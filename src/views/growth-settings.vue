<template>
  <div class="growth-settings-container">
    <menu-lateral rootClassName="menu-lateral-root-class-name5"></menu-lateral>
    <contedo-settings
      rootClassName="contedo-settings-root-class-name1"
    ></contedo-settings>
  </div>
</template>

<script>
import MenuLateral from '../components/menu-lateral'
import ContedoSettings from '../components/contedo-settings'

export default {
  name: 'GrowthSettings',
  components: {
    MenuLateral,
    ContedoSettings,
  },
  metaInfo: {
    title: 'Growth-Settings - Flash - Comunicação',
    meta: [
      {
        property: 'og:title',
        content: 'Growth-Settings - Flash - Comunicação',
      },
    ],
  },
}
</script>

<style scoped>
.growth-settings-container {
  width: 100%;
  height: 100vh;
  display: flex;
  max-height: 100vh;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  background-color: F5F5F5;
}
</style>
