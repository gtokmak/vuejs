<template>
    <div>
         <h1>NewMemory Componenti</h1>
         <button @click="counter++">Arttır</button>
         <p> {{ counter }} </p>
    </div>
</template>

<script>
export default {
     data() {
         return {
             counter : 0
         }
     },
     destroyed() {
         console.log("destroyed");
     },
     deactivated() {
         console.log("deactivated")
     },
     activated() {
         console.log("activated")
     },
}
</script>
 
