<template>
    <div>
        <lamp-status v-for="lamp in 5"></lamp-status>
    </div>
</template>

<script>
import lampSatatus from "./LampStatus.vue"
export default {
    components:{ 
            "lamp-status":lampSatatus
    }
}
</script>