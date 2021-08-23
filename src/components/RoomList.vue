<template>
<div>
  {{roomIDs}}
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "RoomList",
  computed: mapState([
      'roomIDs'
  ])
}
</script>

<style scoped>

</style>