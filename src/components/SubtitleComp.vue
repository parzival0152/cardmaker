<template>
    <div  class="card-element card-subtitle" v-html="content[0]">
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
.card-subtitle {
    height: 18px;
    margin-bottom: 0.0em;
    line-height: 18px;
    font-family: 'Noto Sans', 'Myriad Pro', Calibri, Helvetica, Arial, sans-serif;
    font-size: 12pt;
    font-style: italic;
}
</style>