<template>
  <div class="card-element card-description-line">
    <h4 class="card-description-name" v-html="content[0]"></h4>
    <p class="card-p card-description-text" v-html="content[1]">
    </p>
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

<style>
.card-description-line {
    margin-top: 0.5em;
    margin-bottom: 0.0em;
    font-size: inherit;
    color: black;
}

.card-description-name {
    display: inline;
    font-size: inherit;
    font-style: italic;
}

.card h4 {
    font-weight: bold;
}

.card-description-text {
    margin-left: 3px;
    display: inline;
}

.card-description-name::after {
    content: ".";
}
</style>