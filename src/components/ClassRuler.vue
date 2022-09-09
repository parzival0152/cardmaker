<template>
  <svg
    class="card-ruler"
    height="1"
    width="100"
    viewBox="0 0 100 1"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="0,0 100,0.5 0,1"></polyline>
  </svg>
</template>

<script>
export default {
    name:'ClassRuler'
}
</script>

<style scoped>
.card-ruler {
    width: 100%;
    height: 1.0mm;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
	fill: inherit;
}
</style>