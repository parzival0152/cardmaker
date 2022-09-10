<template>
    <div  class="card-element card-description-line">
        <p v-html="content[0]" class="card-p card-description-text"></p>
    </div>
</template>

<script>

export default {
    props:{
        content:Array
    },
    data(){
        return {
            text:'hello there'
        }
    },
}
</script>

<style scoped>
.card-description-line {
    margin-top: 0.5em;
    margin-bottom: 0.0em;
    font-size: inherit;
    color: black;
}

.card-description-text {
    display: inline;
}
</style>