<template>
  <div class="pesquisa-container" v-bind:class="rootClassName">
    <img
      alt="image"
      src="https://api.iconify.design/radix-icons/magnifying-glass.svg?color=%23FF9F0D"
      class="pesquisa-image"
    />
    <input type="text" placeholder="Pesquisar" class="pesquisa-input" />
  </div>
</template>

<script>
export default {
  name: 'Pesquisa',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.pesquisa-container {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  position: relative;
  align-items: center;
  border-color: #FF9F0D;
  border-width: 1.5px;
  border-radius: 10px;
  background-color: #ffffff;
}
.pesquisa-image {
  width: 30px;
  object-fit: cover;
  padding-left: 5px;
}
.pesquisa-input {
  color: #dcdcdc;
  font-family: "Fivo Sans Medium";
  padding-top: 0px;
  border-width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}
</style>
