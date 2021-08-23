<template>
  <div class="chat-box">
    <div class="chats-container">
      <ul>
        <li :class="message.type" v-bind:key="100">
          message: Your room id is {{roomID}}
          name: server
        </li>
        <li :class="message.type" v-for="(message, index) in this.chat" v-bind:key="index">
          message: {{message.message }}
          name: {{ message.user }}
        </li>
      </ul>
    </div>

    <div class="chat-input">
      <input style="width: 100%" v-on:keyup.enter="sendMessage()" v-model="message" type="text"> <br />
      <button v-on:click="sendMessage()">Send Chat</button>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "ChatContainer",
  data:()=>{
    return {
      message:''
    }
},
  computed:{
    ...mapState([
        'user', 'chat', 'roomID'
    ])
  },
  methods: {
    ...mapActions(['SOCKET_addNewMessage']),
    sendMessage(){
      let message = this.message
      if(message.length >= 1) {
        console.log(message);
        this.SOCKET_addNewMessage({
          message: message,
          user: this.user,
          roomID: this.roomID
        });
      }

      this.message = ''
    }
  }
}
</script>

<style scoped>
.chats-container{
  position: fixed;
  background-color: #42b983;
  right: 5px;
  width: 20vw;
  height: 90vh;
  padding-right: 10px;
}
.chat-input{
  position: fixed;
  right: 5px;
  padding-right: 10px;
  bottom:0;
  width: 20vw;

}
</style>