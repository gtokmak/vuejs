<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">

      <server  v-for="server in servers" :serverDetail="server" :key="server['id']" > </server>
    </ul>
  </div>
</template>

<script>


  import Server from "./Server.vue";


  export default{
        components : {
      server : Server
    },
    data() {
      return {
         servers: [
           { id : 1, status: "Kritik"},
           { id : 2, status: "Normal"},
           { id : 3, status: "Tehlikede"},
           { id : 4, status: "Bilinmiyor"}
         ]
      }
    },
  }
</script>