<template>
  <div class="card-element card-property-line">
    <h4 class="card-property-name" v-html="content[0]"></h4>
    <p class="card-p card-property-text" v-html="content[1]"></p>
  </div>
</template>

<script>
export default {
  props: {
    content: Array,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.card-property-text {
  margin-left: 3px;
  display: inline;
}

.card-property-line {
  text-indent: -1em;
  margin-left: 1em;
  font-size: inherit;
  color: black;
}

.card-property-name {
  display: inline;
  font-size: inherit;
}

.card h4 {
  font-weight: bold;
}

p {
    margin: 0 0 10px;
}
</style>