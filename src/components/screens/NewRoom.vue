<template>
  <div>
  <video id="backgroundVideo"
         autoplay
         muted
         loop>
    <source src="./background.mp4" type="video/mp4">
  </video>
    <CreateRoom />
    <RoomList />
  </div>
</template>

<script>

import CreateRoom from '../CreateRoom'
import RoomList from '../RoomList.vue'

export default {
  name: 'NewRoom',
  components:{
    CreateRoom,
    RoomList
  },
  sockets: {
    connect(){
      console.log('socket connected')
    },
    console_message(val){
      console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
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
