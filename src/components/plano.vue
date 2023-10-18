<template>
  <div class="plano-plano">
    <span class="plano-text">{{ text }}</span>
    <span class="plano-text1">{{ text11 }}</span>
    <div class="plano-barrafundo"><div class="plano-container"></div></div>
    <span class="plano-text2">{{ text1 }}</span>
  </div>
</template>

<script>
export default {
  name: 'Plano',
  props: {
    text11: {
      type: String,
      default: 'Vigência até 25/04/2024',
    },
    text1: {
      type: String,
      default: 'Ver assinatura',
    },
    text: {
      type: String,
      default: 'Plano de Enterprise',
    },
  },
}
</script>

<style scoped>
.plano-plano {
  gap: 5px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: 15px;
  position: relative;
  margin-top: 10px;
  align-items: flex-start;
  border-radius: 10px;
  flex-direction: column;
  background-color: #ffffff;
}
.plano-text {
  color: #656565;
  font-size: 20px;
  font-family: Fivo Sans Medium;
}
.plano-text1 {
  color: #FF9F0D;
  font-size: 14;
  margin-top: 10px;
  font-family: Fivo Sans Medium;
}
.plano-barrafundo {
  flex: 0 0 auto;
  width: 100%;
  height: 15px;
  display: flex;
  align-items: flex-start;
  border-radius: 15px;
  background-color: rgba(255, 159, 13, 0.40);
}
.plano-container {
  flex: 0 0 auto;
  width: 30%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  border-radius: 15px;
  background-color: #FF9F0D;
}
.plano-text2 {
  color: #FF9F0D;
  font-size: 16px;
  margin-top: 20px;
  font-family: Fivo Sans Medium;
}
</style>
