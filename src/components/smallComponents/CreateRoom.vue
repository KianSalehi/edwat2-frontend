<template>
  <div>
    <form id="form" ref="form" v-on:submit.prevent="createRoom()">
      <input type="text" ref="name" placeholder="Enter Room Name">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import slugify from 'slugify'

export default {
  name: "CreateRoom",
  computed: mapState([
    'roomID'
  ]),
  methods:{
    createRoom(){
      let roomID = slugify(this.$refs.name.value, '-');
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
</style>