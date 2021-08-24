<template>
  <div id="youtubeBox">
  <youtube height="100%" width="100%" :video-id="videoID" ref="youtube" @playing="playing" @paused="paused"></youtube>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data() {
    return {
      videoId: this.videoID
    }
  },
  methods: {
    ...mapActions(['SOCKET_newVideoID']),
    playing() {
      this.$socket.emit("VIDEO_PLAYING", this.roomID);
    },
    paused() {
      this.$socket.emit("VIDEO_PAUSED", this.roomID);
      console.log('o/ we are pause!!!')
    }
  },
  sockets:{
    SOCKET_newVideoID(data){
      this.SOCKET_newVideoID(data);
    },
    SOCKET_VIDEO_IS_PLAYING(){
      this.player.playVideo();
    },
    SOCKET_VIDEO_IS_PAUSED(){
      this.player.pauseVideo();
    }
  },
  computed: {
    ...mapState([
      'user', 'chat', 'roomID', 'videoID'
    ]),
    player() {
      return this.$refs.youtube.player
    }
  }
}
</script>

<style scoped>
youtube{
  width: 100vw;

}
#youtubeBox{
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  padding-top: 48px;
  height: calc(100vh - 100px);
  width: calc(100vw - 23vw);
}

</style>