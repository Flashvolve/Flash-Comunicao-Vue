<template>
  <div
    id="teste123"
    class="botao-menu-templates-container hover-menu-button"
    v-bind:class="rootClassName"
  >
    <button type="button" class="botao-menu-templates-botao-menu">
      <span class="botao-menu-templates-text">{{ text }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BotaoMenuTemplates',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    image_src: {
      type: String,
      default: 'ed0cae4e-f7f3-4ebe-8021-71de575d3484',
    },
    text: {
      type: String,
      default: 'Dashboard',
    },
  },
}
</script>

<style scoped>
.botao-menu-templates-container {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
}
.botao-menu-templates-botao-menu {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.botao-menu-templates-text {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  justify-content: center;
}

@media(max-width: 767px) {
  .botao-menu-templates-text {
    display: none;
  }
}
</style>
