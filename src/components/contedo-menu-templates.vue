<template>
  <div class="contedo-menu-templates-contedo" v-bind:class="rootClassName">
    <botao-menu-templates
      rootClassName="botao-menu-templates-root-class-name"
    ></botao-menu-templates>
  </div>
</template>

<script>
import BotaoMenuTemplates from './botao-menu-templates'

export default {
  name: 'ContedoMenuTemplates',
  props: {
    rootClassName: String,
  },
  components: {
    BotaoMenuTemplates,
  },
}
</script>

<style scoped>
.contedo-menu-templates-contedo {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
</style>
