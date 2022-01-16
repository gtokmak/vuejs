<template>

      <li @click="sendServerStatus"
        class="list-group-item" >
        Sunucu #{{serverDetail["id"] }} {{ serverDetail["status"] }}
      </li>

</template>


<script>
import {eventBus} from "../../main"

export default{
    props : ["serverDetail"],
    data() {
      return {
        id : this.serverDetail["id"],
        status : this.serverDetail["status"]
      }
    },
    methods: {
        sendServerStatus(){
            eventBus.ServerStatus(this.serverDetail)
        }
    },
}

</script>