<template>
  <div class="contedo-campanhas-container" v-bind:class="rootClassName">
    <div class="contedo-campanhas-conteudo">
      <div class="contedo-campanhas-header">
        <div class="contedo-campanhas-display">
          <span class="contedo-campanhas-text titulo">Campanhas</span>
          <span class="subtitulo">Quinta feira, 03 de agosto de 2023</span>
        </div>
        <div class="contedo-campanhas-actions">
          <div class="contedo-campanhas-boto"><app-boto></app-boto></div>
        </div>
      </div>
      <div class="contedo-campanhas-banner">
        <img :alt="image_alt" :src="image_src" class="contedo-campanhas-image" />
      </div>
      <div class="contedo-campanhas-dropcampanha">
        <div class="contedo-campanhas-campanha">
          <img
            alt="image"
            src="https://api.iconify.design/icon-park-outline/market-analysis.svg?color=%23ff9f0d"
            class="contedo-campanhas-image01"
          />
          <input
            type="text"
            placeholder="Todas as campanhas"
            class="contedo-campanhas-input"
          />
          <img
            alt="image"
            src="https://api.iconify.design/mingcute/down-fill.svg?color=%23FF9F0D"
            class="contedo-campanhas-image02"
          />
        </div>
        <div class="contedo-campanhas-pesquisa">
          <img
            alt="image"
            src="https://api.iconify.design/radix-icons/magnifying-glass.svg?color=%23FF9F0D"
            class="contedo-campanhas-image03"
          />
          <input
            type="text"
            placeholder="Pesquisar por número"
            class="contedo-campanhas-input1"
          />
        </div>
        <div class="contedo-campanhas-drop">
          <img
            alt="image"
            src="https://api.iconify.design/lucide/calendar-clock.svg?color=%23FF9F0D"
            class="contedo-campanhas-image04"
          />
          <span class="contedo-campanhas-text02 Optionmenu">
            Pesquisar por data de criação da campanha
          </span>
          <img
            alt="image"
            src="https://api.iconify.design/mingcute/down-fill.svg?color=%23FF9F0D"
            class="contedo-campanhas-image05"
          />
        </div>
      </div>
      <div class="contedo-campanhas-container01">
        <div class="contedo-campanhas-box">
          <div class="contedo-campanhas-container02">
            <span class="contedo-campanhas-text03">{{ text4 }}</span>
            <span class="contedo-campanhas-text04">{{ text311 }}</span>
          </div>
          <div class="contedo-campanhas-container03">
            <img
              :alt="image_alt1"
              src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
              class="contedo-campanhas-image06"
            />
          </div>
        </div>
        <div class="contedo-campanhas-box1">
          <div class="contedo-campanhas-container04">
            <span class="contedo-campanhas-text05">{{ text42 }}</span>
            <span class="contedo-campanhas-text06">{{ text3112 }}</span>
          </div>
          <div class="contedo-campanhas-container05">
            <img
              :alt="image_alt12"
              src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
              class="contedo-campanhas-image07"
            />
          </div>
        </div>
        <div class="contedo-campanhas-box2">
          <div class="contedo-campanhas-container06">
            <span class="contedo-campanhas-text07">{{ text41 }}</span>
            <span class="contedo-campanhas-text08">{{ text3111 }}</span>
          </div>
          <div class="contedo-campanhas-container07">
            <img
              :alt="image_alt11"
              src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
              class="contedo-campanhas-image08"
            />
          </div>
        </div>
        <div class="contedo-campanhas-box3">
          <div class="contedo-campanhas-container08">
            <span class="contedo-campanhas-text09">{{ text411 }}</span>
            <span class="contedo-campanhas-text10">{{ text31111 }}</span>
          </div>
          <div class="contedo-campanhas-container09">
            <img
              :alt="image_alt111"
              src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
              class="contedo-campanhas-image09"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBoto from './boto'

export default {
  name: 'ContedoCampanhas',
  props: {
    text311: {
      type: String,
      default: '1478',
    },
    rootClassName1: String,
    image_alt111: {
      type: String,
      default: 'image',
    },
    text31111: {
      type: String,
      default: '32%',
    },
    rootClassName11: String,
    text31: {
      type: String,
      default: 'R$ 41.654,78',
    },
    text4: {
      type: String,
      default: 'Usuários',
    },
    text41: {
      type: String,
      default: 'Média por usuário',
    },
    image_src: {
      type: String,
      default: '/cielo-header-1500w.jpg',
    },
    text611: {
      type: String,
      default: '40',
    },
    text411: {
      type: String,
      default: 'Engajamento',
    },
    text42: {
      type: String,
      default: 'Personalizações',
    },
    text61: {
      type: String,
      default: 'de',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_alt12: {
      type: String,
      default: 'image',
    },
    text6: {
      type: String,
      default: '10',
    },
    text3111: {
      type: String,
      default: '2.56',
    },
    text3112: {
      type: String,
      default: '3786',
    },
    text312: {
      type: String,
      default: '36,12%',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    rootClassName111: String,
    image_alt11: {
      type: String,
      default: 'image',
    },
    text7: {
      type: String,
      default: 'Próximas reuniões',
    },
  },
  components: {
    AppBoto,
  },
}
</script>

<style scoped>
.contedo-campanhas-container {
  width: calc(100% - 300px);
  height: 100vh;
  display: flex;
  overflow: auto;
  position: relative;
  max-width: 1500px;
  overflow-x: auto;
  margin-left: 300px;
  justify-content: center;
  background-color: F5F5F5;
}
.contedo-campanhas-conteudo {
  width: 100%;
  height: fit-content;
  display: flex;
  padding: 40px 50px;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-campanhas-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.contedo-campanhas-display {
  flex: 0 0 auto;
  width: 40%;
  height: 100px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-campanhas-text {
  color: rgb(255, 159, 13);
  font-size: 35px;
}
.contedo-campanhas-actions {
  gap: 10px;
  flex: 0 0 auto;
  width: 45%;
  height: 100px;
  display: flex;
  max-width: 50%;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-campanhas-boto {
  gap: 20px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.contedo-campanhas-banner {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-start;
  border-radius: 15px;
  margin-bottom: 30px;
}
.contedo-campanhas-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 15px;
}
.contedo-campanhas-dropcampanha {
  gap: 1%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  flex-direction: row;
}
.contedo-campanhas-campanha {
  gap: 10px;
  flex: 0 0 auto;
  width: 33%;
  height: 40px;
  display: flex;
  position: relative;
  align-items: center;
  border-color: #FF9F0D;
  border-width: 1.5px;
  border-radius: 10px;
  background-color: #ffffff;
}
.contedo-campanhas-image01 {
  width: 32px;
  object-fit: cover;
  padding-left: 10px;
}
.contedo-campanhas-input {
  color: #737373;
  font-size: 16px;
  font-family: "Fivo Sans Medium";
  font-weight: 400;
  line-height: 1.15;
  padding-top: 0px;
  border-width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  text-transform: none;
  text-decoration: none;
}
.contedo-campanhas-image02 {
  top: 11px;
  right: 0px;
  height: 50%;
  position: absolute;
  align-self: center;
  object-fit: cover;
  justify-self: flex-end;
  margin-right: 10px;
}
.contedo-campanhas-pesquisa {
  gap: 5px;
  flex: 0 0 auto;
  width: 32%;
  height: 40px;
  display: flex;
  position: relative;
  align-items: center;
  border-color: #FF9F0D;
  border-width: 1.5px;
  border-radius: 10px;
  background-color: #ffffff;
}
.contedo-campanhas-image03 {
  width: 35px;
  object-fit: cover;
  padding-left: 10px;
}
.contedo-campanhas-input1 {
  color: #737373;
  font-size: 16px;
  font-family: "Fivo Sans Medium";
  font-weight: 400;
  line-height: 1.15;
  padding-top: 0px;
  border-width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  text-transform: none;
  text-decoration: none;
}
.contedo-campanhas-drop {
  gap: 10px;
  flex: 0 0 auto;
  width: 33%;
  height: 40px;
  display: flex;
  max-width: 525pxpx;
  align-items: flex-start;
  border-color: #FF9F0D;
  border-width: 1px;
  border-radius: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-campanhas-image04 {
  width: 22px;
  height: 22px;
  align-self: center;
  object-fit: cover;
  margin-left: 10px;
}
.contedo-campanhas-text02 {
  color: rgb(115, 115, 115);
  width: 100%;
  overflow: hidden;
  font-size: 16px;
  align-self: center;
  margin-top: 2px;
  font-family: "Fivo Sans Medium";
  white-space: nowrap;
  text-overflow: ellipsis;
}
.contedo-campanhas-image05 {
  height: 50%;
  align-self: center;
  object-fit: cover;
  justify-self: flex-end;
  margin-right: 10px;
}
.contedo-campanhas-container01 {
  gap: 1%;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.contedo-campanhas-box {
  flex: 0 0 auto;
  width: 24%;
  height: 75px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-end;
  padding-top: 10px;
  padding-left: 20px;
  border-radius: 12px;
  padding-right: 20px;
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: flex-end;
  background-color: var(--dl-color-gray-white);
}
.contedo-campanhas-container02 {
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
}
.contedo-campanhas-text03 {
  color: #FF9F0D;
  font-family: "Fivo Sans Modern";
}
.contedo-campanhas-text04 {
  color: #737373;
  width: 100%;
  font-size: 30px;
  align-self: flex-end;
  text-align: right;
  font-family: Russo One;
}
.contedo-campanhas-container03 {
  flex: 0 0 auto;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
}
.contedo-campanhas-image06 {
  width: 200px;
  align-self: flex-end;
  object-fit: cover;
}
.contedo-campanhas-box1 {
  flex: 0 0 auto;
  width: 24%;
  height: 75px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-end;
  padding-top: 10px;
  padding-left: 20px;
  border-radius: 12px;
  padding-right: 20px;
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: flex-end;
  background-color: var(--dl-color-gray-white);
}
.contedo-campanhas-container04 {
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
}
.contedo-campanhas-text05 {
  color: #FF9F0D;
  font-family: "Fivo Sans Modern";
}
.contedo-campanhas-text06 {
  color: #737373;
  width: 100%;
  font-size: 30px;
  align-self: flex-end;
  text-align: right;
  font-family: Russo One;
}
.contedo-campanhas-container05 {
  flex: 0 0 auto;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
}
.contedo-campanhas-image07 {
  width: 200px;
  align-self: flex-end;
  object-fit: cover;
}
.contedo-campanhas-box2 {
  flex: 0 0 auto;
  width: 24%;
  height: 75px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-end;
  padding-top: 10px;
  padding-left: 20px;
  border-radius: 12px;
  padding-right: 20px;
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: flex-end;
  background-color: var(--dl-color-gray-white);
}
.contedo-campanhas-container06 {
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
}
.contedo-campanhas-text07 {
  color: #FF9F0D;
  font-family: "Fivo Sans Modern";
}
.contedo-campanhas-text08 {
  color: #737373;
  width: 100%;
  font-size: 30px;
  align-self: flex-end;
  text-align: right;
  font-family: Russo One;
}
.contedo-campanhas-container07 {
  flex: 0 0 auto;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
}
.contedo-campanhas-image08 {
  width: 200px;
  align-self: flex-end;
  object-fit: cover;
}
.contedo-campanhas-box3 {
  flex: 0 0 auto;
  width: 24%;
  height: 75px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-end;
  padding-top: 10px;
  padding-left: 20px;
  border-radius: 12px;
  padding-right: 20px;
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: flex-end;
  background-color: var(--dl-color-gray-white);
}
.contedo-campanhas-container08 {
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
}
.contedo-campanhas-text09 {
  color: #FF9F0D;
  font-family: "Fivo Sans Modern";
}
.contedo-campanhas-text10 {
  color: #737373;
  width: 100%;
  font-size: 30px;
  align-self: flex-end;
  text-align: right;
  font-family: Russo One;
}
.contedo-campanhas-container09 {
  flex: 0 0 auto;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
}
.contedo-campanhas-image09 {
  width: 200px;
  align-self: flex-end;
  object-fit: cover;
}

@media(max-width: 1220px) {
  .contedo-campanhas-display {
    width: 40%%;
  }
  .contedo-campanhas-actions {
    width: 55%;
    height: fit-content;
    max-width: 60%;
  }
  .contedo-campanhas-text02 {
    font-size: 14px;
  }
  .contedo-campanhas-text04 {
    font-size: 35px;
  }
  .contedo-campanhas-text06 {
    font-size: 35px;
  }
  .contedo-campanhas-text08 {
    font-size: 35px;
  }
  .contedo-campanhas-text10 {
    font-size: 35px;
  }
}
@media(max-width: 957px) {
  .contedo-campanhas-conteudo {
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
  }
  .contedo-campanhas-header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .contedo-campanhas-display {
    width: 100%;
  }
  .contedo-campanhas-actions {
    width: 100%;
    max-width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .contedo-campanhas-boto {
    width: fit-content;
  }
  .contedo-campanhas-text02 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
@media(max-width: 767px) {
  .contedo-campanhas-container {
    width: calc(100% - 67px);
    margin-left: 67px;
  }
}
@media(max-width: 479px) {
  .contedo-campanhas-container {
    width: 100%;
    margin-left: 0px;
  }
  .contedo-campanhas-drop {
    max-width: 200px;
  }
  .contedo-campanhas-text02 {
    max-width: 140px;
  }
  .contedo-campanhas-text04 {
    font-size: 25px;
  }
  .contedo-campanhas-text06 {
    font-size: 25px;
  }
  .contedo-campanhas-text08 {
    font-size: 25px;
  }
  .contedo-campanhas-text10 {
    font-size: 25px;
  }
}
</style>
