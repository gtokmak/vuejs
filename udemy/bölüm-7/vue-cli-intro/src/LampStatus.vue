

<template>
    <div>
        <p>lamba durum: {{ status }}</p>
        <button @click="openLamp"> Lambayı aç</button>
        <hr>
    </div>
</template>

<script>
export default {
    data() {
        return {
            status: "Kapalı"
            
        }
    },
    methods: {
        openLamp(){
                this.status = "Açık"
            }
        },
}
</script>

<style>

</style>