<template>
  <div class="configuraes-templates-settings" v-bind:class="rootClassName">
    <botao-menu
      text="Configurações"
      image_src="/settings.svg"
      rootClassName="botao-menu-root-class-name5"
    ></botao-menu>
  </div>
</template>

<script>
import BotaoMenu from './botao-menu'

export default {
  name: 'ConfiguraesTemplates',
  props: {
    rootClassName: String,
  },
  components: {
    BotaoMenu,
  },
}
</script>

<style scoped>
.configuraes-templates-settings {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-end;
}

</style>
