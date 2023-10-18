<template>
  <div class="growth-chamado-status-container">
    <menu-lateral rootClassName="menu-lateral-root-class-name7"></menu-lateral>
    <acompanhar-chamado
      rootClassName="acompanhar-chamado-root-class-name"
    ></acompanhar-chamado>
  </div>
</template>

<script>
import MenuLateral from '../components/menu-lateral'
import AcompanharChamado from '../components/acompanhar-chamado'

export default {
  name: 'GrowthChamadoStatus',
  components: {
    MenuLateral,
    AcompanharChamado,
  },
  metaInfo: {
    title: 'Growth-Chamado-Status - Flash - Comunicação',
    meta: [
      {
        property: 'og:title',
        content: 'Growth-Chamado-Status - Flash - Comunicação',
      },
    ],
  },
}
</script>

<style scoped>
.growth-chamado-status-container {
  width: 100%;
  height: 100vh;
  display: flex;
  max-height: 100vh;
  min-height: 100vh;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: F5F5F5;
}
</style>
