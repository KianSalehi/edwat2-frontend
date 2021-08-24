<template>
  <div id="ChangeUser">
    <md-field><md-input v-model="user" :class="{active: active}" contenteditable @:click="clearInput()" @blur="setName()" @:keyup.enter="setName()"/></md-field>
  </div>
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
#ChangeUser {
  position: absolute;
  text-align: center;
  display: inline-block;
  width: 11vw;
  cursor: pointer;
  top: -1vh;
  right: 5vw;
  padding: 5px;
  border-radius: 120px;
  background-color: rgba(0,0,0,0.6);
 }

</style>