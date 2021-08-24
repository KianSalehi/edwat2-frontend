<template>
<div class="query">
  <md-field>
    <md-input v-on:keyup.enter="search()" type="text" v-model="searchQuery" placeholder="Youtube link..."></md-input>
    <md-icon>Search</md-icon>
  </md-field>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "QueryContainer",
  data:()=>({
    searchQuery:""
  }),
  computed:{
    ...mapState([
      'user', 'chat', 'roomID', 'videoID'
    ])
  },
  methods:{
    search(){
      let videoURL = this.searchQuery;
      let ID = '';
      if(videoURL.length>1){
        videoURL = videoURL.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
        if (videoURL[2] !== undefined){
          ID = videoURL[2].split(/[^0-9a-z_-]/i);
          ID = ID[0];
        }
        else {
          ID = videoURL;
        }
        this.$socket.emit('NEW_VIDEO', {
          videoID:ID,
          roomID: this.roomID
        });
      }
      this.searchQuery=""
    }

  }
}
</script>

<style scoped>
.query{
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 75vw;
  height: 100px;
}
</style>