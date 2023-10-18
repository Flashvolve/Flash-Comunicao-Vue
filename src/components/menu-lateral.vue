<template>
  <div class="menu-lateral-container" v-bind:class="rootClassName">
    <logo-menu></logo-menu>
    <div class="menu-lateral-barra">
      <div class="menu-lateral-sections"><contedo-menu></contedo-menu></div>
      <div class="menu-lateral-contentbotton">
        <div class="menu-lateral-acount">
          <app-settings></app-settings>
          <app-plano></app-plano>
        </div>
        <app-profile rootClassName="profile-root-class-name"></app-profile>
      </div>
    </div>
  </div>
</template>

<script>
import LogoMenu from './logo-menu'
import ContedoMenu from './contedo-menu'
import AppSettings from './settings'
import AppPlano from './plano'
import AppProfile from './profile'

export default {
  name: 'MenuLateral',
  props: {
    image_alt1: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_src1: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
  },
  components: {
    LogoMenu,
    ContedoMenu,
    AppSettings,
    AppPlano,
    AppProfile,
  },
}
</script>

<style scoped>
.menu-lateral-container {
  width: 300px;
  height: 100%;
  display: flex;
  position: absolute;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FF9F0D;
}
.menu-lateral-barra {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 70px 25px 35px;
  overflow: auto;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.menu-lateral-sections {
  width: 246px;
  margin-top: 30px;
}
.menu-lateral-contentbotton {
  gap: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  max-height: 400px;
  flex-direction: column;
  justify-content: space-between;
}
.menu-lateral-acount {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.menu-lateral-root-class-name {
  left: 0px;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  background-color: #FF9F0D;
}
.menu-lateral-root-class-name1 {
  left: 0px;
}
.menu-lateral-root-class-name2 {
  left: 0px;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  background-color: #FF9F0D;
}
.menu-lateral-root-class-name3 {
  left: 0px;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  background-color: #dc0f37;
}
.menu-lateral-root-class-name4 {
  left: 0px;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  background-color: #dc0f37;
}
.menu-lateral-root-class-name5 {
  left: 0px;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  background-color: #dc0f37;
}
.menu-lateral-root-class-name6 {
  left: 0px;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  background-color: #dc0f37;
}
.menu-lateral-root-class-name7 {
  left: 0px;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  background-color: #dc0f37;
}
.menu-lateral-root-class-name8 {
  left: 0px;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  background-color: #FF9F0D;
}
.menu-lateral-root-class-name9 {
  left: 0px;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  background-color: #FF9F0D;
}
@media(max-width: 767px) {
  .menu-lateral-container {
    width: 80px;
    display: none;
  }
  .menu-lateral-barra {
    padding: 70px 5px 35px;
  }
}
</style>
