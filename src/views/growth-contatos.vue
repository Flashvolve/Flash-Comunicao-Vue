<template>
  <div class="growth-contatos-container">
    <menu-lateral rootClassName="menu-lateral-root-class-name2"></menu-lateral>
    <contedo-colaboradores
      rootClassName="contedo-colaboradores-root-class-name1"
    ></contedo-colaboradores>
  </div>
</template>

<script>
import MenuLateral from '../components/menu-lateral'
import ContedoColaboradores from '../components/contedo-colaboradores'

export default {
  name: 'GrowthContatos',
  components: {
    MenuLateral,
    ContedoColaboradores,
  },
  metaInfo: {
    title: 'Growth-Contatos - Flash - Comunicação',
    meta: [
      {
        property: 'og:title',
        content: 'Growth-Contatos - Flash - Comunicação',
      },
    ],
  },
}
</script>

<style scoped>
.growth-contatos-container {
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
