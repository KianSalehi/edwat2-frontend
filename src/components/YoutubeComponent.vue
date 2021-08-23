<template>
  <div id="youtubeBox">
  <youtube height="100%" width="100%" :video-id="videoId" ref="youtube" @playing="playing"></youtube>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'lG0Ys-2d4MA'
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('o/ we are watching!!!')
    }
  },
  computed: {
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
  padding-top: 32px;
  height: calc(100vh - 10vh);
  width: calc(100vw - 22vw);
  backgroundColor: rgba(0, 0, 0, 0.6);
}

</style>