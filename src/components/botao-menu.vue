<template>
  <div
    id="teste123"
    class="botao-menu-container hover-menu-button"
    v-bind:class="rootClassName"
  >
    <button type="button" class="botao-menu-botao-menu">
      <img :alt="image_alt" :src="image_src" class="botao-menu-image" />
      <span class="botao-menu-text MenuBarra">{{ text }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BotaoMenu',
  props: {
    image_src: {
      type: String,
      default: '/Novos ícones/dashboard-200h.png',
    },
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'image',
    },
    text: {
      type: String,
      default: 'Dashboard',
    },
  },
}
</script>

<style scoped>
.botao-menu-container {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
}
.botao-menu-botao-menu {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.botao-menu-image {
  width: 35px;
  object-fit: cover;
}
.botao-menu-text {
  font-family: "Fivo Sans Medium";
}


</style>
