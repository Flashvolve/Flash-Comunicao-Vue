<template>
  <div class="acompanhar-chamado-pop-upintro" v-bind:class="rootClassName">
    <div class="acompanhar-chamado-chamados">
      <div class="acompanhar-chamado-chamado">
        <h3 class="acompanhar-chamado-text titulo">{{ heading }}</h3>
        <div class="acompanhar-chamado-statusset">
          <span class="acompanhar-chamado-text01 textbutton">{{ text1524 }}</span>
        </div>
      </div>
      <div class="acompanhar-chamado-voltar">
        <div class="acompanhar-chamado-container">
          <button type="button" class="acompanhar-chamado-button">
            <img
              alt="https://api.iconify.design/material-symbols/arrow-back-rounded.svg?color=%23dc0f37"
              src="https://api.iconify.design/material-symbols/arrow-back-rounded.svg?color=white"
              class="acompanhar-chamado-image"
            />
            <span class="acompanhar-chamado-text02">{{ text11 }}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="acompanhar-chamado-linha"></div>
    <div class="acompanhar-chamado-container1">
      <div class="acompanhar-chamado-chat">
        <div class="acompanhar-chamado-mensagem-enviada">
          <div class="acompanhar-chamado-dev-flash-growth">
            <div class="acompanhar-chamado-container2">
              <img
                alt="image"
                src="https://res.cloudinary.com/dd9puomgu/image/upload/v1696944693/fxpt7oz7c4j0extebst1.svg"
                class="acompanhar-chamado-image1"
              />
              <span class="acompanhar-chamado-text03">{{ text2 }}</span>
            </div>
            <span class="acompanhar-chamado-text04">{{ text3 }}</span>
          </div>
          <div class="acompanhar-chamado-mensagem-dev">
            <span class="acompanhar-chamado-text05">{{ text4 }}</span>
          </div>
          <div class="acompanhar-chamado-linha1"></div>
          <div class="acompanhar-chamado-status-mensagem">
            <span class="acompanhar-chamado-text06">{{ text41 }}</span>
          </div>
        </div>
      </div>
      <div class="acompanhar-chamado-status">
        <div class="acompanhar-chamado-timeline">
          <div class="acompanhar-chamado-container3">
            <div class="acompanhar-chamado-dot"></div>
            <div class="acompanhar-chamado-container4"></div>
          </div>
          <div class="acompanhar-chamado-container5">
            <div class="acompanhar-chamado-dot1"></div>
            <div class="acompanhar-chamado-container6"></div>
          </div>
          <div class="acompanhar-chamado-container7">
            <div class="acompanhar-chamado-dot2"></div>
          </div>
        </div>
        <div class="acompanhar-chamado-status1">
          <div>
            <span class="acompanhar-chamado-text07">{{ text6 }}</span>
            <span class="acompanhar-chamado-text08">{{ text8 }}</span>
          </div>
          <div class="acompanhar-chamado-status2">
            <span class="acompanhar-chamado-text09">{{ text63 }}</span>
            <span class="acompanhar-chamado-text10">{{ text83 }}</span>
          </div>
          <div class="acompanhar-chamado-status3">
            <span class="acompanhar-chamado-text11">{{ text631 }}</span>
            <span class="acompanhar-chamado-text12">{{ text831 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcompanharChamado',
  props: {
    text61: {
      type: String,
      default: '{nome} {sobrenome}',
    },
    text5: {
      type: String,
      default:
        'Por gentileza, selecione o tipo de chamado que deseja abrir e descreva, em poucas palavras, o que está acontecendo.',
    },
    heading1: {
      type: String,
      default: 'Chamado 42928',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default:
        'https://api.iconify.design/icon-park-outline/close-one.svg?color=white',
    },
    text1: {
      type: String,
      default: 'Abrir chamado',
    },
    image_src3: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text821: {
      type: String,
      default: 'Em análise às 10h48',
    },
    text311: {
      type: String,
      default: '10 de out. 10h48',
    },
    text7: {
      type: String,
      default: 'Urgente',
    },
    text2: {
      type: String,
      default: 'Suporte Flash [Growth]',
    },
    text11: {
      type: String,
      default: 'Voltar',
    },
    text4111: {
      type: String,
      default:
        'O seu chamado foi recebido pelo time de desenvolvedores às 10h48 e entrou na fila de análise. Em breve retornaremos com a solução.',
    },
    text41: {
      type: String,
      default:
        'O seu chamado foi recebido pelo time de desenvolvedores às 10h48 e entrou na fila de análise. Em breve retornaremos com a solução.',
    },
    textarea_placeholder: {
      type: String,
      default: 'Descreva aqui qual o seu problema',
    },
    text63: {
      type: String,
      default: 'Suporte Flash [Growth]',
    },
    text431: {
      type: String,
      default:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    text81: {
      type: String,
      default: 'Abriu ticket de suporte às 10h36',
    },
    text31: {
      type: String,
      default: '10 de out. 10h48',
    },
    heading: {
      type: String,
      default: 'Chamado 42928',
    },
    text6: {
      type: String,
      default: '{nome} {sobrenome}',
    },
    text8: {
      type: String,
      default: 'Abriu ticket de suporte às 10h36',
    },
    rootClassName1: String,
    text83: {
      type: String,
      default: 'Mudou o status do chamado para "Em análise" às 10h48',
    },
    text82: {
      type: String,
      default: 'Em análise às 10h48',
    },
    text411: {
      type: String,
      default:
        'O seu chamado foi recebido pelo time de desenvolvedores às 10h48 e entrou na fila de análise. Em breve retornaremos com a solução.',
    },
    text43: {
      type: String,
      default:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    text211: {
      type: String,
      default: 'Suporte Flash [Growth]',
    },
    text15241: {
      type: String,
      default: 'Aberto',
    },
    image_alt2: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    text4: {
      type: String,
      default:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    image_src1: {
      type: String,
      default: '3e8475b4-c786-4069-bdc8-cabac908f3e4',
    },
    text21: {
      type: String,
      default: 'Suporte Flash [Growth]',
    },
    text42: {
      type: String,
      default: 'Tipo de chamado',
    },
    text62: {
      type: String,
      default: 'Suporte Flash [Growth]',
    },
    text631: {
      type: String,
      default: '{nome} {sobrenome}',
    },
    text621: {
      type: String,
      default: 'Suporte Flash [Growth]',
    },
    image_src2: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text: {
      type: String,
      default: 'Acompanhar chamado',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    text711: {
      type: String,
      default: 'Pouco urgente',
    },
    image_alt3: {
      type: String,
      default: 'image',
    },
    text831: {
      type: String,
      default: 'Abriu ticket de suporte às 10h36',
    },
    text1524: {
      type: String,
      default: 'Em análise',
    },
    text71: {
      type: String,
      default: 'Não urgente',
    },
    text3: {
      type: String,
      default: '10 de out. 10h48',
    },
  },
}
</script>

<style scoped>
.acompanhar-chamado-pop-upintro {
  width: calc(100% - 300px);
  height: 100%;
  margin: 0px;
  display: flex;
  padding: 40px;
  position: relative;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.10);
  border-radius: 15px;
  flex-direction: column;
  background-color: F5F5F5;
}
.acompanhar-chamado-chamados {
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.acompanhar-chamado-chamado {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.acompanhar-chamado-text {
  font-family: "Fivo Sans Medium";
}
.acompanhar-chamado-statusset {
  flex: 0 0 auto;
  height: 20px;
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-left: 20px;
  border-radius: 25px;
  padding-right: 20px;
  padding-bottom: 15px;
  justify-content: center;
  background-color: 00A89C;
}
.acompanhar-chamado-text01 {
  font-size: 16px;
  align-items: center;
}
.acompanhar-chamado-voltar {
  gap: 5pxpx;
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.acompanhar-chamado-container {
  display: flex;
  position: relative;
}
.acompanhar-chamado-button {
  color: #ffffff;
  height: 50px;
  display: flex;
  transition: 0.3s;
  align-items: center;
  font-family: Fivo Sans Medium;
  border-color: #dc0f37;
  border-width: 0px;
  padding-left: 20PX;
  border-radius: 7PX;
  padding-right: 20PX;
  flex-direction: row;
  background-color: #dc0f37;
}
.acompanhar-chamado-button:hover {
  color: #dc0f37;
  border-width: 1px;
  background-color: var(--dl-color-gray-white);
}
.acompanhar-chamado-image {
  width: 25px;
  height: 30pxpx;
  object-fit: cover;
  transition: 0.3s;
}

.acompanhar-chamado-text02 {
  font-size: 18px;
  align-self: center;
  margin-top: 1PX;
  transition: 0.3s;
  align-items: center;
  margin-left: 5px;
}
.acompanhar-chamado-text02:hover {
  color: #dc0f37;
}
.acompanhar-chamado-linha {
  flex: 0 0 auto;
  width: 100%;
  height: 2px;
  display: flex;
  align-self: center;
  margin-top: 30px;
  align-items: flex-start;
  background-color: #dc0f37;
}
.acompanhar-chamado-container1 {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.acompanhar-chamado-chat {
  flex: 0 0 auto;
  width: 70%;
  height: 600px;
  display: flex;
  overflow-y: auto;
  align-items: flex-start;
  padding-top: 40px;
  padding-left: 0px;
  padding-right: 40px;
  flex-direction: column;
  padding-bottom: 40px;
}
.acompanhar-chamado-mensagem-enviada {
  gap: 20px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.acompanhar-chamado-dev-flash-growth {
  gap: 5px;
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
}
.acompanhar-chamado-container2 {
  gap: 5PX;
  display: flex;
  align-items: center;
}
.acompanhar-chamado-image1 {
  width: 30px;
  margin-top: -10px;
  object-fit: cover;
}
.acompanhar-chamado-text03 {
  font-size: 20px;
  font-family: "Fivo Sans Modern";
}
.acompanhar-chamado-text04 {
  display: flex;
  font-size: 14px;
}
.acompanhar-chamado-mensagem-dev {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  padding-top: 0px;
  padding-bottom: 20px;
}
.acompanhar-chamado-text05 {
  color: #737373;
  font-size: 18px;
  font-family: "Fivo Sans Medium";
  line-height: 1.5;
}
.acompanhar-chamado-linha1 {
  flex: 0 0 auto;
  width: 75%;
  height: 1px;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  background-color: #dc0f37;
}
.acompanhar-chamado-status-mensagem {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  padding-top: 10px;
  padding-bottom: 20px;
}
.acompanhar-chamado-text06 {
  color: var(--dl-color-gray-black);
  font-size: 16px;
  font-family: "Fivo Sans Medium";
}
.acompanhar-chamado-status {
  flex: 0 0 auto;
  width: 30%;
  height: auto;
  display: flex;
  padding: 40px;
  align-items: flex-start;
}
.acompanhar-chamado-timeline {
  flex: 0 0 auto;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.acompanhar-chamado-container3 {
  width: auto;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.acompanhar-chamado-dot {
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: flex-start;
  border-radius: 100%;
  background-color: #dc0f37;
}
.acompanhar-chamado-container4 {
  flex: 0 0 auto;
  width: 5px;
  height: 52px;
  display: flex;
  margin-top: -2;
  align-items: flex-start;
  background-color: #dc0f37;
}
.acompanhar-chamado-container5 {
  width: auto;
  height: fit-content;
  display: flex;
  margin-top: -15px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.acompanhar-chamado-dot1 {
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  display: flex;
  margin-top: 3px;
  align-items: flex-start;
  border-radius: 100%;
  background-color: #dc0f37;
}
.acompanhar-chamado-container6 {
  flex: 0 0 auto;
  width: 5px;
  height: 52px;
  display: flex;
  margin-top: -2;
  align-items: flex-start;
  background-color: #dc0f37;
}
.acompanhar-chamado-container7 {
  width: auto;
  height: fit-content;
  display: flex;
  margin-top: -15px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.acompanhar-chamado-dot2 {
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  display: flex;
  margin-top: 3px;
  align-items: flex-start;
  border-radius: 100%;
  background-color: #dc0f37;
}
.acompanhar-chamado-status1 {
  gap: 20px;
  flex: 0 0 auto;
  width: calc(100% - 30px);
  height: fit-content;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.acompanhar-chamado-status1 {
  height: fit-content;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.acompanhar-chamado-text07 {
  font-size: 16px;
  font-family: "Fivo Sans Modern";
}
.acompanhar-chamado-text08 {
  color: #737373;
  font-size: 14px;
  font-family: "Fivo Sans Medium";
}
.acompanhar-chamado-status2 {
  height: fit-content;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.acompanhar-chamado-text09 {
  font-size: 16px;
  font-family: "Fivo Sans Modern";
}
.acompanhar-chamado-text10 {
  color: #737373;
  font-size: 14px;
  font-family: "Fivo Sans Medium";
}
.acompanhar-chamado-status3 {
  height: fit-content;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.acompanhar-chamado-text11 {
  font-size: 16px;
  font-family: "Fivo Sans Modern";
}
.acompanhar-chamado-text12 {
  color: #737373;
  font-size: 14px;
  font-family: "Fivo Sans Medium";
}
.acompanhar-chamado-root-class-name {
  top: 0px;
  right: 0px;
  position: absolute;
}
@media(max-width: 1220px) {
  .acompanhar-chamado-container4 {
    height: 90px;
  }
  .acompanhar-chamado-container6 {
    height: 90px;
  }
}
@media(max-width: 957px) {
  .acompanhar-chamado-pop-upintro {
    margin: 0px;
    display: flex;
  }
  .acompanhar-chamado-chat {
    width: 60%;
  }
  .acompanhar-chamado-dev-flash-growth {
    align-items: flex-start;
    flex-direction: column;
  }
  .acompanhar-chamado-text04 {
    align-self: flex-start;
  }
  .acompanhar-chamado-status {
    width: 40%;
    padding: 20px;
  }
  .acompanhar-chamado-container4 {
    max-height: 70px;
  }
  .acompanhar-chamado-container6 {
    height: 70px;
  }
}
@media(max-width: 767px) {
  .acompanhar-chamado-pop-upintro {
    display: flex;
  }
  .acompanhar-chamado-container1 {
    flex-direction: column-reverse;
  }
  .acompanhar-chamado-chat {
    width: 100%;
  }
  .acompanhar-chamado-status {
    width: 100%;
    border-color: #dc0f37;
    padding-left: 0;
    border-right-width: 0x;
    border-bottom-width: 1px;
  }
  .acompanhar-chamado-container4 {
    height: 50px;
  }
  .acompanhar-chamado-container6 {
    height: 50px;
  }
}
@media(max-width: 479px) {
  .acompanhar-chamado-pop-upintro {
    width: 100%;
    display: flex;
  }
}
</style>
