<template>
  <div class="comunicao-dashboard-container">
    <MenuLateral rootClassName="menu-lateral-root-class-name"></MenuLateral>
    <ContedoDashboard
      rootClassName="contedo-dashboard-root-class-name"
    ></ContedoDashboard>
  </div>
</template>

<script setup>
import MenuLateral from '../components/menu-lateral'
import ContedoDashboard from '../components/contedo-dashboard'

const metaInfo = {
    title: 'Flash - Comunicação',
    meta: [
        {
            property: 'og:title',
            content: 'Flash - Comunicação',
        },
    ],
};
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
