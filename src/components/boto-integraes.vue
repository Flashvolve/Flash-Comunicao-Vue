<template>
  <div class="boto-integraes-container" v-bind:class="rootClassName">
    <button type="button" class="boto-integraes-button button">
      <span class="boto-integraes-text">
        <span>Nova integração</span>
        <br />
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BotoIntegraes',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.boto-integraes-container {
  display: flex;
  position: relative;
}
.boto-integraes-button {
  color: #ffffff;
  display: flex;
  font-family: Fivo Sans Medium;
  border-width: 0px;
  padding-left: 20PX;
  border-radius: 7PX;
  padding-right: 20PX;
  flex-direction: row;
  background-color: #dc0f37;
}
.boto-integraes-text {
  font-size: 18px;
  margin-top: 1PX;
  margin-left: 5px;
}

</style>
