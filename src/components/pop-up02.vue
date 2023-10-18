<template>
  <div class="pop-up02-pop-up01" v-bind:class="rootClassName">
    <div class="pop-up02-barra">
      <img :alt="image_alt" :src="image_src" class="pop-up02-image" />
    </div>
    <div class="pop-up02-logo">
      <img :alt="image_alt1" :src="image_src1" class="pop-up02-image1" />
    </div>
    <div class="pop-up02-steps">
      <div class="pop-up02-container">
        <div class="pop-up02-container01"></div>
      </div>
      <div class="pop-up02-container02">
        <div class="pop-up02-container03"></div>
      </div>
      <div class="pop-up02-container04">
        <div class="pop-up02-container05"></div>
      </div>
      <div class="pop-up02-container06">
        <div class="pop-up02-container07"></div>
      </div>
      <div class="pop-up02-container08">
        <div class="pop-up02-container09"></div>
      </div>
      <div class="pop-up02-container10">
        <div class="pop-up02-container11"></div>
      </div>
    </div>
    <div class="pop-up02-texto">
      <div class="pop-up02-container12">
        <h2 class="pop-up02-text">{{ heading }}</h2>
        <input
          type="text"
          placeholder="Qual é o carro chefe da empresa?"
          class="pop-up02-textinput input"
        />
      </div>
      <div class="pop-up02-container13">
        <h2 class="pop-up02-text1">{{ heading1 }}</h2>
        <input
          type="text"
          placeholder="Valor em reais"
          class="pop-up02-textinput1 input"
        />
      </div>
    </div>
    <div class="pop-up02-boto">
      <button type="button" class="pop-up02-button">
        <span class="pop-up02-text2">{{ text1 }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopUp02',
  props: {
    image_alt1: {
      type: String,
      default: 'image',
    },
    text: {
      type: String,
      default: 'Pular essa pergunta',
    },
    image_src: {
      type: String,
      default:
        'https://api.iconify.design/icon-park-outline/close-one.svg?color=white',
    },
    heading1: {
      type: String,
      default: 'Qual o valor do ticket médio de vocês?',
    },
    text1: {
      type: String,
      default: 'Enviar respostas',
    },
    text211: {
      type: String,
      default: '11',
    },
    text2: {
      type: String,
      default: '3',
    },
    heading: {
      type: String,
      default: 'Qual produto é o mais vendido?',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    text21: {
      type: String,
      default: 'de',
    },
    rootClassName: String,
    image_src1: {
      type: String,
      default:
        'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
    },
  },
}
</script>

<style scoped>
.pop-up02-pop-up01 {
  width: 100%;
  height: 100%;
  margin: 0px;
  display: flex;
  position: relative;
  max-width: 800px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.10);
  max-height: 600px;
  min-height: 600px;
  align-items: center;
  border-radius: 15px;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.pop-up02-barra {
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
.pop-up02-image {
  width: 25px;
  margin-right: 10px;
}
.pop-up02-logo {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.pop-up02-image1 {
  width: 289px;
  height: 51px;
  object-fit: cover;
}
.pop-up02-steps {
  gap: 10px;
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-start;
  padding-top: 50px;
  justify-content: center;
}
.pop-up02-container {
  flex: 0 0 auto;
  width: 15;
  height: 15;
  display: flex;
  align-items: center;
  border-color: #dc0f37;
  border-radius: 100%;
  justify-content: center;
}
.pop-up02-container01 {
  flex: 0 0 auto;
  width: 70%;
  height: 70%;
  display: flex;
  align-items: flex-start;
  border-radius: 100%;
  background-color: #dc0f37;
}
.pop-up02-container02 {
  flex: 0 0 auto;
  width: 15;
  height: 15;
  display: flex;
  align-items: center;
  border-color: #dc0f37;
  border-width: 2px;
  border-radius: 100%;
  justify-content: center;
}
.pop-up02-container03 {
  flex: 0 0 auto;
  width: 70%;
  height: 70%;
  display: flex;
  align-items: flex-start;
  border-radius: 100%;
  background-color: #dc0f37;
}
.pop-up02-container04 {
  flex: 0 0 auto;
  width: 15;
  height: 15;
  display: flex;
  align-items: center;
  border-color: #dc0f37;
  border-radius: 100%;
  justify-content: center;
}
.pop-up02-container05 {
  flex: 0 0 auto;
  width: 70%;
  height: 70%;
  display: flex;
  align-items: flex-start;
  border-radius: 100%;
  background-color: #dc0f37;
}
.pop-up02-container06 {
  flex: 0 0 auto;
  width: 15;
  height: 15;
  display: flex;
  align-items: center;
  border-color: #dc0f37;
  border-radius: 100%;
  justify-content: center;
}
.pop-up02-container07 {
  flex: 0 0 auto;
  width: 70%;
  height: 70%;
  display: flex;
  align-items: flex-start;
  border-radius: 100%;
  background-color: #dc0f37;
}
.pop-up02-container08 {
  flex: 0 0 auto;
  width: 15;
  height: 15;
  display: flex;
  align-items: center;
  border-color: #dc0f37;
  border-radius: 100%;
  justify-content: center;
}
.pop-up02-container09 {
  flex: 0 0 auto;
  width: 70%;
  height: 70%;
  display: flex;
  align-items: flex-start;
  border-radius: 100%;
  background-color: #dc0f37;
}
.pop-up02-container10 {
  flex: 0 0 auto;
  width: 15;
  height: 15;
  display: flex;
  align-items: center;
  border-color: #dc0f37;
  border-radius: 100%;
  justify-content: center;
}
.pop-up02-container11 {
  flex: 0 0 auto;
  width: 70%;
  height: 70%;
  display: flex;
  align-items: flex-start;
  border-radius: 100%;
  background-color: #dc0f37;
}
.pop-up02-texto {
  gap: 20px;
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
.pop-up02-container12 {
  gap: 5px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.pop-up02-text {
  font-family: "Fivo Sans Medium";
}
.pop-up02-textinput {
  width: 100%;
}
.pop-up02-container13 {
  gap: 5px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.pop-up02-text1 {
  font-family: "Fivo Sans Medium";
}
.pop-up02-textinput1 {
  width: 100%;
}
.pop-up02-boto {
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
.pop-up02-button {
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
.pop-up02-button:hover {
  color: #dc0f37;
  border-width: 1px;
  background-color: var(--dl-color-gray-white);
}
.pop-up02-text2 {
  font-size: 20px;
  align-self: center;
  margin-top: 1PX;
  transition: 0.3s;
  align-items: center;
  margin-left: 5px;
}
.pop-up02-text2:hover {
  color: #dc0f37;
}

@media(max-width: 957px) {
  .pop-up02-pop-up01 {
    margin: 0px;
    display: flex;
  }
}
@media(max-width: 767px) {
  .pop-up02-pop-up01 {
    display: flex;
  }
}
@media(max-width: 479px) {
  .pop-up02-pop-up01 {
    display: flex;
    max-height: 800px;
  }
}
</style>
