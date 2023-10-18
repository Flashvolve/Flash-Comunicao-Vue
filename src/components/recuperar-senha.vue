<template>
  <div class="recuperar-senha-container" v-bind:class="rootClassName">
    <div class="recuperar-senha-logo">
      <img :alt="image_alt" :src="image_src" class="recuperar-senha-image" />
    </div>
    <div class="recuperar-senha-recuperacao">
      <span class="recuperar-senha-text">{{ text }}</span>
      <span class="recuperar-senha-text1">{{ text1 }}</span>
    </div>
    <div class="recuperar-senha-senha">
      <span class="recuperar-senha-text2">{{ text2 }}</span>
      <input
        type="text"
        :placeholder="textinput_placeholder"
        class="recuperar-senha-textinput input"
      />
    </div>
    <div class="recuperar-senha-botao">
      <span class="recuperar-senha-text3">{{ Text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecuperarSenha',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default:
        'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
    },
    textinput_placeholder: {
      type: String,
      default: 'exemplo@flashvolve.com',
    },
    text: {
      type: String,
      default: 'Recuperação de senha',
    },
    rootClassName: String,
    Text: {
      type: String,
      default: 'Enviar link',
    },
    text1: {
      type: String,
      default:
        'Para recuperar seu acesso, por gentileza informe seu endereço de email cadastrado na nossa plataforma para enviarmos o link de alteração da senha.',
    },
    text2: {
      type: String,
      default: 'E-mail',
    },
  },
}
</script>

<style scoped>
.recuperar-senha-container {
  gap: 20px;
  width: 100%;
  display: flex;
  padding: 40px;
  position: relative;
  max-width: 450px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.10);
  align-items: flex-start;
  border-radius: 12px;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.recuperar-senha-logo {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.recuperar-senha-image {
  width: 100%;
  object-fit: cover;
  margin-left: -10px;
}
.recuperar-senha-recuperacao {
  gap: 30px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.recuperar-senha-text {
  color: var(--dl-color-gray-black);
  font-size: 30px;
  font-family: Fivo Sans Heavy;
}
.recuperar-senha-text1 {
  color: #737373;
  font-family: Fivo Sans Medium;
}
.recuperar-senha-senha {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.recuperar-senha-text2 {
  color: rgb(220, 15, 55);
  font-family: Fivo Sans Heavy;
}
.recuperar-senha-textinput {
  width: 100%;
  display: flex;
  align-self: flex-start;
  border-color: #737373;
  justify-content: flex-start;
}
.recuperar-senha-botao {
  flex: 0 0 auto;
  width: 100%;
  height: 50px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: #dc0f37;
}
.recuperar-senha-botao:active {
  background-color: #3aaa9b;
}
.recuperar-senha-text3 {
  color: var(--dl-color-gray-white);
  font-size: 18px;
  align-self: center;
  text-align: center;
  transition: 0.3s;
  font-family: Fivo Sans Medium;
}
.recuperar-senha-text3:active {
  color: var(--dl-color-gray-white);
}
.recuperar-senha-root-class-name {
  display: none;
}
@media(max-width: 957px) {
  .recuperar-senha-root-class-name {
    display: none;
  }
}
@media(max-width: 479px) {
  .recuperar-senha-text {
    font-size: 27px;
  }
}
</style>
