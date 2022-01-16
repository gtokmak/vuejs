<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <br><br>
        <button class="btn-sm btn-primary" @click="selectedComponent = 'appMemory'"> appMemory</button>
        <button class="btn-sm btn-primary" @click="selectedComponent = 'appNewMemory'"> appNewMemory</button>
        <button class="btn-sm btn-primary" @click="selectedComponent = 'appAuthor'"> appAuthor</button>
        <hr>
        <p> {{ selectedComponent }} </p>
        <hr>
        <keep-alive>
          <component :is="selectedComponent">
            <h1 slot="heading">Güzel Bir Gün</h1>
            <p >Bu çok güzel bir anı...</p>
          </component>
        </keep-alive>


      </div>
    </div>
  </div>
</template>

<script>
import Memory from "./components/Memory.vue"
import NewMemory from "./components/NewMemory.vue"
import Author from "./components/Author.vue"

export default {
  components:{
    appMemory : Memory,
    appNewMemory : NewMemory,
    appAuthor : Author
  },
  data() {
    return {
      selectedComponent : "appMemory"
    }
  },
  
}
</script>

