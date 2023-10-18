<template>
  <div class="comunicao-campanhas-container">
    <menu-lateral rootClassName="menu-lateral-root-class-name8"></menu-lateral>
    <contedo-campanhas
      rootClassName="contedo-campanhas-root-class-name"
    ></contedo-campanhas>
  </div>
</template>

<script>
import MenuLateral from '../components/menu-lateral'
import ContedoCampanhas from '../components/contedo-campanhas'

export default {
  name: 'ComunicaoCampanhas',
  components: {
    MenuLateral,
    ContedoCampanhas,
  },
  metaInfo: {
    title: 'Comunicao-Campanhas - Flash - Comunicação',
    meta: [
      {
        property: 'og:title',
        content: 'Comunicao-Campanhas - Flash - Comunicação',
      },
    ],
  },
}
</script>

<style scoped>
.comunicao-campanhas-container {
  width: 100%;
  height: 100vh;
  display: flex;
  max-height: 100vh;
  min-height: 100vh;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: F5F5F5;
}
</style>
