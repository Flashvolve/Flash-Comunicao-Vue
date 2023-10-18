<template>
  <div class="comunicao-dashboard-container">
    <menu-lateral rootClassName="menu-lateral-root-class-name"></menu-lateral>
    <contedo-dashboard
      rootClassName="contedo-dashboard-root-class-name"
    ></contedo-dashboard>
  </div>
</template>

<script>
import MenuLateral from '../components/menu-lateral'
import ContedoDashboard from '../components/contedo-dashboard'

export default {
  name: 'ComunicaoDashboard',
  components: {
    MenuLateral,
    ContedoDashboard,
  },
  metaInfo: {
    title: 'Flash - Comunicação',
    meta: [
      {
        property: 'og:title',
        content: 'Flash - Comunicação',
      },
    ],
  },
}
</script>

<style scoped>
.comunicao-dashboard-container {
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
