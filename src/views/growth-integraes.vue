<template>
  <div class="growth-integraes-container">
    <menu-lateral rootClassName="menu-lateral-root-class-name3"></menu-lateral>
    <contedo-integraes
      rootClassName="contedo-integraes-root-class-name"
    ></contedo-integraes>
  </div>
</template>

<script>
import MenuLateral from '../components/menu-lateral'
import ContedoIntegraes from '../components/contedo-integraes'

export default {
  name: 'GrowthIntegraes',
  components: {
    MenuLateral,
    ContedoIntegraes,
  },
  metaInfo: {
    title: 'Growth-Integraes - Flash - Comunicação',
    meta: [
      {
        property: 'og:title',
        content: 'Growth-Integraes - Flash - Comunicação',
      },
    ],
  },
}
</script>

<style scoped>
.growth-integraes-container {
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
