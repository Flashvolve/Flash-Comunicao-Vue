<template>
  <div class="growth-helpdesk-container">
    <menu-lateral rootClassName="menu-lateral-root-class-name4"></menu-lateral>
    <contedo-helpdesk
      rootClassName="contedo-helpdesk-root-class-name"
    ></contedo-helpdesk>
  </div>
</template>

<script>
import MenuLateral from '../components/menu-lateral'
import ContedoHelpdesk from '../components/contedo-helpdesk'

export default {
  name: 'GrowthHelpdesk',
  components: {
    MenuLateral,
    ContedoHelpdesk,
  },
  metaInfo: {
    title: 'Growth-Helpdesk - Flash - Comunicação',
    meta: [
      {
        property: 'og:title',
        content: 'Growth-Helpdesk - Flash - Comunicação',
      },
    ],
  },
}
</script>

<style scoped>
.growth-helpdesk-container {
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
