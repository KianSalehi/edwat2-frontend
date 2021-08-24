<template>
  <div class="chat-box">
    <div class="chats-container">
      <ul>
        <li :class="message.type" v-for="(message, index) in this.chat" v-bind:key="index">
          {{ message.user }}: {{message.message }}
        </li>
      </ul>
    </div>

    <div>
      <div class="chat-input">
        <md-field><md-input style="width: 100%;background-color: rgba(74, 154, 208, 0.9);border-radius: 5px" v-on:keyup.enter="sendMessage()" v-model="message" type="text" placeholder="message..."></md-input></md-field> <br />
      </div>
      <div class="sendButton">
        <MdButton class="md-primary md-raised" v-on:click="sendMessage()">Send Chat</MdButton>
      </div>
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
        'user', 'chat', 'roomID', 'videoID'
    ])
  },
  methods: {
    ...mapActions(['SOCKET_addNewMessage']),
    sendMessage(){
      let message = this.message
      if(message.length >= 1) {
        console.log(message);
        this.$socket.emit('NEW_MESSAGE',{
          message: message,
          user: this.user,
          roomID: this.roomID}
        );
      }

      this.message = ''
    }
  },
  sockets: {
    SOCKET_addNewMessage(data) {
      this.SOCKET_addNewMessage({
        message: data.message,
        user: data.user,
        roomID: data.roomID
      })
    }
  }
}
</script>

<style scoped>
.chats-container{
  position: fixed;
  background-color: rgba(74, 154, 208, 0.9);
  right: 0;
  width: 23vw;
  height: 80vh;
  padding-right: 10px;
  bottom: 100px;
  border-radius: 20px;
}
.chat-input{
  position: fixed;
  align-content: center;
  right: 5px;
  padding-right: 10px;
  bottom:1vh;
  height: 100px;
  width: 20vw;
}

.sendButton{
  position: absolute;
  bottom: 0;
  right: 7vw;
  width: auto;
  background-color: rgba(0,0,0,0.6);
  border-radius: 10px;
}

</style>