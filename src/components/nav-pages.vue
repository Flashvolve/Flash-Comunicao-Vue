<template>
  <div class="nav-pages-actions" v-bind:class="rootClassName">
    <div class="nav-pages-boto">
      <div class="nav-pages-container">
        <button type="button" class="nav-pages-button button">
          <img
            alt="image"
            src="https://api.iconify.design/ion/arrow-back.svg?color=%23dc0f37"
            class="nav-pages-image"
          />
        </button>
      </div>
      <div class="nav-pages-container1">
        <button type="button" class="nav-pages-button1">
          <span class="nav-pages-text">{{ text17 }}</span>
        </button>
      </div>
    </div>
    <div class="nav-pages-container2">
      <span class="nav-pages-text1">{{ text2111 }}</span>
      <div class="nav-pages-drop">
        <div class="nav-pages-drop-menu">
          <span class="nav-pages-text2">{{ text16 }}</span>
        </div>
      </div>
      <span class="nav-pages-text3">{{ text212 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavPages',
  props: {
    rootClassName: String,
    text16: {
      type: String,
      default: '1',
    },
    text212: {
      type: String,
      default: 'de 50',
    },
    rootClassName11: String,
    text17: {
      type: String,
      default: 'Próxima página',
    },
    text2111: {
      type: String,
      default: 'Página',
    },
    rootClassName1: String,
  },
}
</script>

<style scoped>
.nav-pages-actions {
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
.nav-pages-boto {
  flex: 0 0 auto;
  display: flex;
  column-gap: 10PX;
  align-items: flex-start;
  justify-content: flex-end;
}
.nav-pages-container {
  display: flex;
  position: relative;
}
.nav-pages-button {
  color: #ffffff;
  width: 40PX;
  height: 40PX;
  display: flex;
  font-family: Fivo Sans Medium;
  border-color: #DC0F37;
  border-width: 1px;
  padding-left: 20PX;
  border-radius: 7PX;
  padding-right: 20PX;
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.nav-pages-image {
  width: 25PX;
  height: 25PX;
  object-fit: cover;
}
.nav-pages-container1 {
  display: flex;
  position: relative;
}
.nav-pages-button1 {
  color: #ffffff;
  height: 39px;
  display: flex;
  font-family: Fivo Sans Medium;
  padding-left: 20PX;
  border-radius: 7PX;
  padding-right: 20PX;
  flex-direction: row;
  background-color: #dc0f37;
}
.nav-pages-button1:hover {
  color: #dc0f37;
  border-color: #dc0f37;
  border-width: 1px;
  background-color: var(--dl-color-gray-white);
}
.nav-pages-text {
  font-size: 16px;
  align-self: center;
  margin-top: 1PX;
  transition: 0.3s;
  align-items: center;
  margin-left: 5px;
}
.nav-pages-text:hover {
  color: #dc0f37;
}
.nav-pages-container2 {
  gap: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.nav-pages-text1 {
  color: #737373;
  font-size: 16px;
  align-self: center;
  margin-top: 2px;
  margin-left: 15PX;
}
.nav-pages-drop {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.nav-pages-drop-menu {
  width: 40px;
  height: 40px;
  display: flex;
  max-width: 525pxpx;
  align-self: flex-start;
  align-items: center;
  border-color: #dc0f37;
  border-width: 1px;
  border-radius: 7PX;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.nav-pages-text2 {
  color: #737373;
  font-family: "Fivo Sans Medium";
}
.nav-pages-text3 {
  color: #737373;
  font-size: 16px;
  align-self: center;
  margin-top: 2px;
  margin-left: =5PX;
}
.nav-pages-root-class-name {
  display: none;
}
@media(max-width: 1220px) {
  .nav-pages-text1 {
    font-size: 14px;
  }
  .nav-pages-text3 {
    font-size: 14px;
  }
}
@media(max-width: 479px) {
  .nav-pages-actions {
    flex-direction: column;
  }
}
</style>
