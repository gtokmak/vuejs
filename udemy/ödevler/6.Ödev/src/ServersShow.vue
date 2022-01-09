<template>
      <div class="row">
          <div class="col-xs-12 col-sm-6">
          <ul class="list-group">
            <ServerList> </ServerList> 
          </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
          <ServerInfo></ServerInfo>
        </div>
      </div>
</template>


<script>
import ServerList from "./ServerList.vue"
import ServerInfo from "./ServerInfo.vue"
export default {
    components:{ 
            ServerList:ServerList,
            ServerInfo
    }
}
</script>