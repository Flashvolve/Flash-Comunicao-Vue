<template>
  <div class="comunicao-dashboard-container">
    <menu-lateral rootClassName="menu-lateral-root-class-name"></menu-lateral>
    <h1>Teste</h1>
    <contedo-dashboard
      rootClassName="contedo-dashboard-root-class-name"
    ></contedo-dashboard>
  </div>
</template>

<script>
import MenuLateral from './menu-lateral'
import ContedoDashboard from './contedo-dashboard'

export default {
  name: 'ComunicaoDashboard',
  props: {},
  components: {
    MenuLateral,
    ContedoDashboard,
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
