<template>
    <div>
        <li class="list-group-item" v-for="index in 5"> 
            {{server}} # {{ index }}
         </li>
    </div>
</template>

<script>
export default {
    data() {
        return {
            server:"Sunucu"
        }
    },
}
</script>