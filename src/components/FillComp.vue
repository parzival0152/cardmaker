<template>
    <div  class="card-fill" :style="{flex:content[0]}">
    </div>
</template>

<script>

export default {
    props:{
        content:Array
    },
    data(){
        return {
            
        }
    },
}
</script>

<style scoped>
.card-fill {
    flex: 1;
}
</style>