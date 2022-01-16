<template>
  <div class="col-xs-12 col-sm-6">
    <p>Sunucu Bilgisi güncel değil!! {{status}} </p>
    <button @click="Normal">Normale Çek</button>
    
  </div>
</template>


<script>
import {eventBus} from "../../main"

export default {
  data() {
    return {
      server: null,
      status : "Durum Yok"
    }
  },
  methods: {
    Normal(){
      this.server.status = "Normal"
      this.status =  this.server.status
    }
  },

  watch:{
    server:function(newValue, oldValue){
        this.status=newValue.status
    }
  },

  created() {
    eventBus.$on("serverStatus",(server)=>{
      this.server = server 
    })
  },
}
</script>