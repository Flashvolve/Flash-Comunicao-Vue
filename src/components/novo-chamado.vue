<template>
  <div class="novo-chamado-pop-upintro">
    <div class="novo-chamado-barra">
      <span class="novo-chamado-novo-chamado">{{ text }}</span>
      <img :alt="image_alt" :src="image_src" class="novo-chamado-image" />
    </div>
    <div class="novo-chamado-entrada">
      <span class="novo-chamado-text">{{ text5 }}</span>
      <div class="novo-chamado-tipo-de-chamado">
        <div class="novo-chamado-container">
          <label class="novo-chamado-text1">{{ text42 }}</label>
          <select class="novo-chamado-select Content">
            <option value="Option 1">Option 1</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
      </div>
      <textarea
        :placeholder="textarea_placeholder"
        class="novo-chamado-textarea textarea"
      ></textarea>
      <div class="novo-chamado-urgencia">
        <div class="novo-chamado-urgente">
          <input type="radio" name="radio" />
          <span class="novo-chamado-text2">{{ text7 }}</span>
        </div>
        <div class="novo-chamado-pouco-urgente">
          <input type="radio" name="radio" />
          <span class="novo-chamado-text3">{{ text711 }}</span>
        </div>
        <div class="novo-chamado-nao-urgente">
          <input type="radio" name="radio" />
          <span class="novo-chamado-text4">{{ text71 }}</span>
        </div>
      </div>
      <div class="novo-chamado-boto">
        <button type="button" class="novo-chamado-button">
          <span class="novo-chamado-text5">{{ text1 }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NovoChamado',
  props: {
    text2: {
      type: String,
      default: 'Text',
    },
    text: {
      type: String,
      default: 'Novo chamado',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    text4: {
      type: String,
      default: 'Qual a urgência?',
    },
    text1: {
      type: String,
      default: 'Abrir chamado',
    },
    heading: {
      type: String,
      default: 'Olá! seja bem-vindo, {{Nome}}!',
    },
    text42: {
      type: String,
      default: 'Tipo de chamado',
    },
    text6: {
      type: String,
      default: 'Text',
    },
    image_src1: {
      type: String,
      default:
        'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
    },
    text71: {
      type: String,
      default: 'Não urgente',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default:
        'https://api.iconify.design/icon-park-outline/close-one.svg?color=white',
    },
    text5: {
      type: String,
      default:
        'Por gentleza, selecione o tipo de chamado que deseja abrir e descreva, em poucas palavras, o que está acontecendo.',
    },
    text7: {
      type: String,
      default: 'Urgente',
    },
    rootClassName: String,
    text41: {
      type: String,
      default: 'Qual a urgência?',
    },
    text711: {
      type: String,
      default: 'Pouco urgente',
    },
    text3: {
      type: String,
      default: 'Qual o motivo da abertura do chamado?',
    },
    textarea_placeholder: {
      type: String,
      default: 'Descreva aqui qual o seu problema',
    },
  },
}
</script>

<style scoped>
.novo-chamado-pop-upintro {
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
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.novo-chamado-barra {
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  display: flex;
  position: relative;
  align-self: flex-start;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius4);
  justify-content: center;
  background-color: #dc0f37;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.novo-chamado-novo-chamado {
  color: var(--dl-color-gray-white);
  font-size: 18px;
  text-align: center;
  font-family: "Fivo Sans Medium";
}
.novo-chamado-image {
  top: 8px;
  right: 0px;
  width: 25px;
  position: absolute;
  justify-self: flex-end;
  margin-right: 10px;
}
.novo-chamado-entrada {
  flex: 0 0 auto;
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  flex-direction: column;
  padding-bottom: 30px;
  justify-content: flex-start;
}
.novo-chamado-text {
  font-size: 18px;
  font-family: "Fivo Sans Medium";
}
.novo-chamado-tipo-de-chamado {
  gap: 10px;
  width: 100%;
  display: flex;
  margin-top: 30px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.novo-chamado-container {
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.novo-chamado-text1 {
  color: #737373;
  font-family: "Fivo Sans Medium";
}
.novo-chamado-select {
  border-color: #Cd0f37;
  border-width: 1px;
  border-radius: 7px;
}
.novo-chamado-textarea {
  width: 100%;
  height: 200px;
  margin-top: 30px;
}
.novo-chamado-urgencia {
  gap: 15px;
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  margin-top: 10px;
  align-items: center;
}
.novo-chamado-urgente {
  gap: 5px;
  display: flex;
  align-items: center;
}
.novo-chamado-text2 {
  font-family: "Fivo Sans Medium";
}
.novo-chamado-pouco-urgente {
  gap: 5px;
  display: flex;
  align-items: center;
}
.novo-chamado-text3 {
  font-family: "Fivo Sans Medium";
}
.novo-chamado-nao-urgente {
  gap: 5px;
  display: flex;
  align-items: center;
}
.novo-chamado-text4 {
  font-family: "Fivo Sans Medium";
}
.novo-chamado-boto {
  flex: 0 0 auto;
  left: 0px;
  right: 0px;
  width: 100%;
  bottom: 40px;
  margin: auto;
  display: flex;
  padding: 0px;
  position: absolute;
  align-items: center;
  justify-content: center;
}
.novo-chamado-button {
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
.novo-chamado-button:hover {
  color: #dc0f37;
  border-width: 1px;
  background-color: var(--dl-color-gray-white);
}
.novo-chamado-text5 {
  font-size: 20px;
  align-self: center;
  margin-top: 1PX;
  transition: 0.3s;
  align-items: center;
  margin-left: 5px;
}
.novo-chamado-text5:hover {
  color: #dc0f37;
}
@media(max-width: 957px) {
  .novo-chamado-pop-upintro {
    margin: 0px;
    display: flex;
  }
}
@media(max-width: 767px) {
  .novo-chamado-pop-upintro {
    display: flex;
  }
}
@media(max-width: 479px) {
  .novo-chamado-pop-upintro {
    display: flex;
    max-height: 800px;
  }
}
</style>
