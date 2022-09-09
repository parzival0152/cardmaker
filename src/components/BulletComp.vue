<template>
    <ul class="card-element card-bullet-line">
        <li class="card-bullet" v-html="content[0]">
        </li>
    </ul>
</template>

<script>
export default {
    props:{
        content:Array
    }
}
</script>

<style>
.card-bullet {
    margin-bottom: 0;
    margin-top: 0;
    font-size: inherit;
}

.card-bullet-line {
    font-size: inherit;
    color: #333;
    padding-left: 16px;
    padding-bottom: 0;
    margin-bottom: 0;
    margin-top: 0;
}
</style>