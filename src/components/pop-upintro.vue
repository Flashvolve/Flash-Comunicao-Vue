<template>
  <div class="pop-upintro-pop-upintro" v-bind:class="rootClassName">
    <div class="pop-upintro-barra">
      <img :alt="image_alt" :src="image_src" class="pop-upintro-image" />
    </div>
    <div class="pop-upintro-logo">
      <img :alt="image_alt1" :src="image_src1" class="pop-upintro-image1" />
    </div>
    <div class="pop-upintro-texto">
      <h1 class="pop-upintro-text">{{ heading }}</h1>
      <span class="pop-upintro-text1">
        <span>
          Antes de começarmos, vamos precisar de algumas informações importantes
          sobre o ramo de atuação da sua empresa, informações sobre os seus
          produtos e o potencial público alvo para alimentar a nossa inteligência
          e assim maximizar os resultados e agendamentos. É bem rápido! 
        </span>
        <br />
        <br />
        <span>Vamos começar? </span>
        <br />
      </span>
    </div>
    <div class="pop-upintro-boto">
      <button type="button" class="pop-upintro-button">
        <span class="pop-upintro-text7">{{ text1 }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopUpintro',
  props: {
    text: {
      type: String,
      default: 'Responder depois',
    },
    image_src1: {
      type: String,
      default:
        'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
    },
    rootClassName: String,
    heading: {
      type: String,
      default: 'Olá! seja bem-vindo, {{Nome}}!',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    text1: {
      type: String,
      default: 'Responder questionário',
    },
    image_src: {
      type: String,
      default:
        'https://api.iconify.design/icon-park-outline/close-one.svg?color=white',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.pop-upintro-pop-upintro {
  width: 100%;
  height: 650px;
  margin: 0px;
  display: flex;
  position: relative;
  max-width: 800px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.10);
  max-height: 600px;
  align-items: center;
  border-radius: 15px;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.pop-upintro-barra {
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  display: flex;
  align-self: flex-start;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius4);
  justify-content: flex-end;
  background-color: #dc0f37;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.pop-upintro-image {
  width: 25px;
  margin-right: 10px;
}
.pop-upintro-logo {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.pop-upintro-image1 {
  width: 289px;
  height: 51px;
  object-fit: cover;
}
.pop-upintro-texto {
  gap: 50px;
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  flex-direction: column;
  padding-bottom: 30px;
  justify-content: center;
}
.pop-upintro-text {
  font-family: "Fivo Sans Medium";
}
.pop-upintro-text1 {
  font-size: 18px;
  font-family: "Fivo Sans Medium";
  line-height: 1.5;
}
.pop-upintro-boto {
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  bottom: 0px;
  display: flex;
  position: absolute;
  align-items: center;
  padding-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  justify-content: center;
}
.pop-upintro-button {
  color: #ffffff;
  height: 50px;
  display: flex;
  transition: 0.3s;
  font-family: Fivo Sans Medium;
  border-color: #dc0f37;
  border-width: 0px;
  padding-left: 20PX;
  border-radius: 7PX;
  padding-right: 20PX;
  flex-direction: row;
  background-color: #dc0f37;
}
.pop-upintro-button:hover {
  color: #dc0f37;
  border-width: 1px;
  background-color: var(--dl-color-gray-white);
}
.pop-upintro-text7 {
  font-size: 20px;
  align-self: center;
  margin-top: 1PX;
  transition: 0.3s;
  align-items: center;
  margin-left: 5px;
}
.pop-upintro-text7:hover {
  color: #dc0f37;
}

@media(max-width: 957px) {
  .pop-upintro-pop-upintro {
    margin: 0px;
    display: flex;
  }
}
@media(max-width: 767px) {
  .pop-upintro-pop-upintro {
    display: flex;
  }
}
@media(max-width: 479px) {
  .pop-upintro-pop-upintro {
    display: flex;
    max-height: 800px;
  }
}
</style>
