<template>
  <div>
    <div class="appTitle">EDWAT</div>
    <form id="form" ref="form" v-on:submit.prevent="createRoom()">
      <md-field><md-input requred type="text" v-model="roomID" placeholder="Enter Room Name..."></md-input></md-field>
      <md-button type="submit" class="md-raised md-primary">Submit</md-button>
    </form>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import slugify from 'slugify'

export default {
  name: "CreateRoom",
  data:()=>({
    roomID: null
    })
,
  computed: mapState([
    'roomID'
  ]),
  methods:{
    createRoom(){
      console.log(this.$refs.name);
      let roomID = slugify(this.roomID, '-');
      this.$router.push({
        name:'video',
        params:{
          videoSlug:roomID
        }
      })
    }
  }
}
</script>

<style scoped>
#form {
  position: absolute;
  background-color:rgba(0, 0, 0, 0.9);
  box-shadow:0 5px 15px rgba(0,0,0,0.9);
  border-radius: 25px;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 4%}
.appTitle{
  font-size: 40px;
  padding: 30px;
  font-weight: bolder;
  color: whitesmoke;
  text-shadow: 10px 5px 5px #070707;
  font-family: 'Roboto', sans-serif;
}
</style>