<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanıcı Adı:{{name}}</p>
    <p>Tersten Kullanıcı Adı:{{switchName()}}</p>
    <button @click="sendToParent">Veriyi Parent'a Gönder</button>
    <p> Kullanıcı Yaşı: {{ age }}</p>

  </div>
</template>

<script>
import {eventBus} from "../main"
  export default{
   // props: ["name"]
   // props: { name: [String, Array]}
    props:{
      name:{
        type : String,  // veri tipi
        required : true, // zorunlu alan
        default : "Adı alanı" // varsayılan değer
      },
      age:[String]
    },
    methods: {
    switchName(){
      return this.name.split("").reverse().join("");
    },
    sendToParent(){
      this.$emit("data","Gokhan Tokmak");
    }
  },
  created() {
    eventBus.$on("ageWasEdited",(age)=>{
      this.age = age
    })
  },
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
