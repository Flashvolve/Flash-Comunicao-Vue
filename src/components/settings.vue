<template>
  <div class="settings-settings">
    <botao-menu
      text="Configurações"
      image_src="/settings.svg"
      rootClassName="botao-menu-root-class-name4"
    ></botao-menu>
  </div>
</template>

<script>
import BotaoMenu from './botao-menu'

export default {
  name: 'Settings',
  props: {},
  components: {
    BotaoMenu,
  },
}
</script>

<style scoped>
.settings-settings {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-end;
}
</style>
