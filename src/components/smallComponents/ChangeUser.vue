<template>
<input v-model="user" :class="{active: active}" contenteditable @:click="clearInput()" @blur="setName()" @:keyup.enter="setName()">

</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "ChangeUser",
  data:()=>{
    return{
      user:'Anonymous',
      active:false
    }
  },
  methods:{
    ...mapActions([
        'SOCKET_updateUser'
    ]),
    clearInput(){

    },
    setName(){
      this.SOCKET_updateUser(this.user)
    }
  }
}
</script>

<style scoped>
input {
  position: fixed;
  display: inline-block;
  width: 10vw;
  cursor: pointer;
  border: 1px dotted rgb(228, 228, 228);
  padding: 5px;
  top: 0;
  right: 5vw;
 }

</style>