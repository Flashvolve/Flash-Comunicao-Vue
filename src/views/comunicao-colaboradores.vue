<template>
  <div class="comunicao-colaboradores-container">
    <menu-lateral rootClassName="menu-lateral-root-class-name9"></menu-lateral>
    <contedo-colaboradores
      rootClassName="contedo-colaboradores-root-class-name"
    ></contedo-colaboradores>
  </div>
</template>

<script>
import MenuLateral from '../components/menu-lateral'
import ContedoColaboradores from '../components/contedo-colaboradores'

export default {
  name: 'ComunicaoColaboradores',
  components: {
    MenuLateral,
    ContedoColaboradores,
  },
  metaInfo: {
    title: 'Comunicao-Colaboradores - Flash - Comunicação',
    meta: [
      {
        property: 'og:title',
        content: 'Comunicao-Colaboradores - Flash - Comunicação',
      },
    ],
  },
}
</script>

<style scoped>
.comunicao-colaboradores-container {
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
