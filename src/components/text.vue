<template>
  <div class="text-container" v-bind:class="rootClassName">
    <span class="Textbox">
      O seu resultado até o momento comparado a empresas do mesmo segmento está:
      Acima da meta
    </span>
  </div>
</template>

<script>
export default {
  name: 'Text',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.text-container {
  display: flex;
  position: relative;
}
</style>
