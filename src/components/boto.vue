<template>
  <div class="boto-container" v-bind:class="rootClassName">
    <button type="button" class="boto-button button">
      <img
        alt="image"
        src="https://api.iconify.design/ph/export-bold.svg?color=white"
        class="boto-image"
      />
      <span class="boto-text textbutton">Exportar</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Boto',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.boto-container {
  display: flex;
  position: relative;
}
.boto-button {
  color: #ffffff;
  display: flex;
  font-family: Fivo Sans Medium;
  border-width: 0px;
  padding-left: 20PX;
  border-radius: 7PX;
  padding-right: 20PX;
  flex-direction: row;
  background-color: #FF9F0D;
}
.boto-image {
  width: auto;
  object-fit: cover;
}
.boto-text {
  font-size: 18px;
  margin-top: 1PX;
  margin-left: 5px;
}
</style>
