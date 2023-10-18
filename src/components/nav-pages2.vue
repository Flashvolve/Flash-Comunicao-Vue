<template>
  <div class="nav-pages2-actions" v-bind:class="rootClassName">
    <div class="nav-pages2-boto">
      <div class="nav-pages2-container">
        <button type="button" class="nav-pages2-button button">
          <img
            alt="image"
            src="https://api.iconify.design/ion/arrow-back.svg?color=%23FF9F0D"
            class="nav-pages2-image"
          />
        </button>
      </div>
    </div>
    <div class="nav-pages2-container1">
      <span class="nav-pages2-text">{{ text2111 }}</span>
      <div class="nav-pages2-drop">
        <div class="nav-pages2-drop-menu">
          <span class="nav-pages2-text1">{{ text16 }}</span>
        </div>
      </div>
      <span class="nav-pages2-text2">{{ text212 }}</span>
    </div>
    <div class="nav-pages2-container2">
      <button type="button" class="nav-pages2-button1">
        <span class="nav-pages2-text3">{{ text17 }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavPages2',
  props: {
    rootClassName11: String,
    rootClassName: String,
    text212: {
      type: String,
      default: 'de 50',
    },
    text17: {
      type: String,
      default: 'Próxima página',
    },
    text2111: {
      type: String,
      default: 'Página',
    },
    rootClassName1: String,
    text16: {
      type: String,
      default: '1',
    },
  },
}
</script>

<style scoped>
.nav-pages2-actions {
  gap: 10px;
  flex: 0 0 auto;
  width: 400px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  max-width: 525px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.nav-pages2-boto {
  flex: 0 0 auto;
  display: flex;
  column-gap: 10PX;
  align-items: flex-start;
  justify-content: flex-end;
}
.nav-pages2-container {
  display: flex;
  position: relative;
}
.nav-pages2-button {
  color: #ffffff;
  width: 40PX;
  height: 40PX;
  display: flex;
  font-family: Fivo Sans Medium;
  border-color: #FF9F0D;
  border-width: 1px;
  padding-left: 20PX;
  border-radius: 7PX;
  padding-right: 20PX;
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.nav-pages2-image {
  width: 25PX;
  height: 25PX;
  object-fit: cover;
}
.nav-pages2-container1 {
  gap: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.nav-pages2-text {
  color: #737373;
  font-size: 16px;
  align-self: center;
  margin-top: 2px;
}
.nav-pages2-drop {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.nav-pages2-drop-menu {
  width: 40px;
  height: 40px;
  display: flex;
  max-width: 525pxpx;
  align-self: flex-start;
  align-items: center;
  border-color: #FF9F0D;
  border-width: 1px;
  border-radius: 7PX;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.nav-pages2-text1 {
  color: #737373;
  font-family: "Fivo Sans Medium";
}
.nav-pages2-text2 {
  color: #737373;
  font-size: 16px;
  align-self: center;
  margin-top: 2px;
  margin-left: =5PX;
}
.nav-pages2-container2 {
  display: flex;
  position: relative;
}
.nav-pages2-button1 {
  color: #ffffff;
  height: 39px;
  display: flex;
  font-family: Fivo Sans Medium;
  padding-left: 20PX;
  border-radius: 7PX;
  padding-right: 20PX;
  flex-direction: row;
  justify-content: center;
  background-color: #FF9F0D;
}
.nav-pages2-button1:hover {
  background-color: #bc0d2f;
}
.nav-pages2-text3 {
  font-size: 16px;
  align-self: center;
  margin-top: 1PX;
  transition: 0.3s;
  align-items: center;
  margin-left: 5px;
}
.nav-pages2-text3:hover {
  color: var(--dl-color-gray-white);
}

@media(max-width: 1220px) {
  .nav-pages2-text {
    font-size: 14px;
  }
  .nav-pages2-text2 {
    font-size: 14px;
  }
}
@media(max-width: 479px) {
  .nav-pages2-actions {
    flex-direction: column;
  }
}
</style>
