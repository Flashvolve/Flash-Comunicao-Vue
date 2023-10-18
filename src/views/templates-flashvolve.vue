<template>
  <div class="templates-flashvolve-container">
    <menu-lateral-templates
      rootClassName="menu-lateral-templates-root-class-name"
    ></menu-lateral-templates>
    <modelos-de-cabealho
      rootClassName="modelos-de-cabealho-root-class-name"
    ></modelos-de-cabealho>
  </div>
</template>

<script>
import MenuLateralTemplates from '../components/menu-lateral-templates'
import ModelosDeCabealho from '../components/modelos-de-cabealho'

export default {
  name: 'TemplatesFlashvolve',
  components: {
    MenuLateralTemplates,
    ModelosDeCabealho,
  },
  metaInfo: {
    title: 'Templates-Flashvolve - Flash - Comunicação',
    meta: [
      {
        property: 'og:title',
        content: 'Templates-Flashvolve - Flash - Comunicação',
      },
    ],
  },
}
</script>

<style scoped>
.templates-flashvolve-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
