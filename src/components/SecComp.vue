<template>
    <h3 class="card-section" v-html="content[0]"></h3>
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
.card-section {
    border-bottom: 1px solid;
    font-size: 10pt;
    font-variant: small-caps;
    font-weight: normal;
    letter-spacing: 1px;
    margin: 0;
    border-color: inherit;
}
</style>