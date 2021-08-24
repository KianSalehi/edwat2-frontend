<template>
  <div class="Video">
    <div id="nav">
      <router-link to="/"><md-button class="navButton md-primary md-raised">New Room</md-button></router-link>
    </div>
    <video id="backgroundVideo"
           autoplay
           muted
           loop>
      <source src="./background.mp4" type="video/mp4">
    </video>
    <ChangeUser />
    <Chat/>
    <YoutubeComponent/>
    <QueryContainer/>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
import Chat from '../smallComponents/ChatContainer'
import ChangeUser from '../smallComponents/ChangeUser'
import YoutubeComponent from '../smallComponents/YoutubeComponent'
import QueryContainer from "../smallComponents/QueryContainer";
export default {
  name: "Video",
  components:{
    Chat,
    ChangeUser,
    YoutubeComponent,
    QueryContainer
  },
  methods:{
    ...mapMutations([
        'CLEAR_CHAT'
    ]),
    ...mapActions(['SOCKET_newRoomAction'])
  },
  sockets:{
    SOCKET_newRoomAction(roomName){
      this.SOCKET_newRoomAction(roomName);
    }
  }
  ,
  mounted() {
    this.CLEAR_CHAT();

    let roomName= this.$route.params.videoSlug
    console.log(roomName)
    if(roomName){
      this.$socket.emit('join_create_room', roomName);
    }
  }
}
</script>

<style scoped>
#backgroundVideo{
  position: absolute;
  width: 100%;
  height:100%;
  right:0;
  top:0;
  object-fit: cover;
  z-index: -1;
}

</style>