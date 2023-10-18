<template>
  <div class="contedo-integraes-container" v-bind:class="rootClassName">
    <div class="contedo-integraes-group">
      <div class="contedo-integraes-header">
        <div class="contedo-integraes-display">
          <span class="contedo-integraes-text titulo">{{ text2 }}</span>
          <span class="subtitulo">{{ text1 }}</span>
        </div>
        <div class="contedo-integraes-button">
          <div class="contedo-integraes-actions">
            <div class="contedo-integraes-boto">
              <boto-integraes
                rootClassName="boto-integraes-root-class-name"
              ></boto-integraes>
            </div>
          </div>
        </div>
      </div>
      <div class="contedo-integraes-integraes">
        <div class="contedo-integraes-hubspot">
          <div class="contedo-integraes-logo">
            <img
              src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695662933/rch2turvipza9xwka2b9.png"
              class="contedo-integraes-image"
            />
          </div>
          <div class="contedo-integraes-button1">
            <div class="contedo-integraes-container1">
              <span class="textbutton">{{ text3 }}</span>
            </div>
          </div>
        </div>
        <div class="contedo-integraes-piperdrive">
          <div class="contedo-integraes-logo1">
            <img
              src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695661065/jo3m8neiv2t2tizgq8gi.png"
              class="contedo-integraes-image1"
            />
          </div>
          <div class="contedo-integraes-button2">
            <div class="contedo-integraes-container2">
              <span class="textbutton">{{ text33 }}</span>
            </div>
          </div>
        </div>
        <div class="contedo-integraes-mailchimp">
          <div class="contedo-integraes-logo2">
            <img
              src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695661065/ymrcnfbhfagk1kroiqeb.png"
              class="contedo-integraes-image2"
            />
          </div>
          <div class="contedo-integraes-button3">
            <div class="contedo-integraes-container3">
              <span class="textbutton">{{ text331 }}</span>
            </div>
          </div>
        </div>
        <div class="contedo-integraes-piperrun">
          <div class="contedo-integraes-logo3">
            <img
              src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695661066/hwimr4lii3rx2zgpva77.png"
              class="contedo-integraes-image3"
            />
          </div>
          <div class="contedo-integraes-logo4">
            <div class="contedo-integraes-container4">
              <span class="textbutton">{{ text3311 }}</span>
            </div>
          </div>
        </div>
        <div class="contedo-integraes-rd-station">
          <div class="contedo-integraes-logo5">
            <img
              src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695661066/pqtfcoadpjmmcozip79c.png"
              class="contedo-integraes-image4"
            />
          </div>
          <div class="contedo-integraes-button4">
            <div class="contedo-integraes-container5">
              <span class="textbutton">{{ text33111 }}</span>
            </div>
          </div>
        </div>
        <div class="contedo-integraes-salesforce">
          <div class="contedo-integraes-logo6">
            <img
              src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695661066/xgp8lvpfa1jefla616ws.png"
              class="contedo-integraes-image5"
            />
          </div>
          <div class="contedo-integraes-button5">
            <div class="contedo-integraes-container6">
              <span class="textbutton">{{ text331111 }}</span>
            </div>
          </div>
        </div>
        <div class="contedo-integraes-agendor">
          <div class="contedo-integraes-logo7">
            <img
              src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695661067/ewbyeby9lgtrco0wssyr.png"
              class="contedo-integraes-image6"
            />
          </div>
          <div class="contedo-integraes-button6">
            <div class="contedo-integraes-container7">
              <span class="textbutton">{{ text3311111 }}</span>
            </div>
          </div>
        </div>
        <div class="contedo-integraes-agendor1">
          <div class="contedo-integraes-logo8">
            <img
              src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695661065/ztfi5qkh2xbvuebo4ghq.png"
              class="contedo-integraes-image7"
            />
          </div>
          <div class="contedo-integraes-button7">
            <div class="contedo-integraes-container8">
              <span class="textbutton">{{ text33111111 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BotoIntegraes from './boto-integraes'

export default {
  name: 'ContedoIntegraes',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    text1441: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text142311: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text1522: {
      type: String,
      default: 'Agendado',
    },
    text2111: {
      type: String,
      default: 'Monstrando',
    },
    text331111: {
      type: String,
      default: 'Configurar',
    },
    image_src921: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1421121: {
      type: String,
      default: '55 11 98765-4321',
    },
    text14213111: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text1442: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    rootClassName: String,
    text31: {
      type: String,
      default: 'Configurar',
    },
    text144111: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text1421122: {
      type: String,
      default: '55 11 98765-4321',
    },
    text142132: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text1311121311: {
      type: String,
      default: 'Funil de vendas',
    },
    text1423111: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text3111: {
      type: String,
      default: 'Configurar',
    },
    text144: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text33111: {
      type: String,
      default: 'Configurar',
    },
    text142131: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text1311121122: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text152111: {
      type: String,
      default: 'Agendado',
    },
    text131112132: {
      type: String,
      default: 'Funil de vendas',
    },
    image_src9211: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1521: {
      type: String,
      default: 'Agendado',
    },
    text211: {
      type: String,
      default: 'Monstrando',
    },
    text3311111: {
      type: String,
      default: 'Configurar',
    },
    text1421312: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text1421311: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text131112131: {
      type: String,
      default: 'Funil de vendas',
    },
    text14211212: {
      type: String,
      default: '55 11 98765-4321',
    },
    text1311121312: {
      type: String,
      default: 'Funil de vendas',
    },
    text1311121121: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text13111213111: {
      type: String,
      default: 'Funil de vendas',
    },
    text13112: {
      type: String,
      default: 'Contatos',
    },
    text31111: {
      type: String,
      default: 'Configurar',
    },
    text: {
      type: String,
      default: 'Integraçõ',
    },
    text1311112: {
      type: String,
      default: 'Status',
    },
    text3: {
      type: String,
      default: 'Configurar',
    },
    text31111111: {
      type: String,
      default: 'Configurar',
    },
    image_alt9211: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text14213: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    image_alt92111: {
      type: String,
      default: 'image',
    },
    text212: {
      type: String,
      default: 'de 52 resultados',
    },
    text15211: {
      type: String,
      default: 'Agendado',
    },
    text311: {
      type: String,
      default: 'Configurar',
    },
    text1312: {
      type: String,
      default: 'Clientes',
    },
    text13111211211: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text14211211: {
      type: String,
      default: '55 11 98765-4321',
    },
    text131112112111: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text142112111: {
      type: String,
      default: '55 11 98765-4321',
    },
    text142312: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text13111213: {
      type: String,
      default: 'Funil de vendas',
    },
    text331: {
      type: String,
      default: 'Configurar',
    },
    image_src922: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text311111111: {
      type: String,
      default: 'Configurar',
    },
    text32: {
      type: String,
      default: 'Configurar',
    },
    text13111211212: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text33: {
      type: String,
      default: 'Configurar',
    },
    text3311: {
      type: String,
      default: 'Configurar',
    },
    image_src92111: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_src9212: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text33111111: {
      type: String,
      default: 'Configurar',
    },
    text15212: {
      type: String,
      default: 'Agendado',
    },
    text321: {
      type: String,
      default: 'Configurar',
    },
    text142112: {
      type: String,
      default: '55 11 98765-4321',
    },
    text1423: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text131112112: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text2: {
      type: String,
      default: 'Integrações',
    },
    text13111111: {
      type: String,
      default: 'Reunião',
    },
    text21: {
      type: String,
      default: 'de 52 resultados',
    },
    image_alt922: {
      type: String,
      default: 'image',
    },
    text131112: {
      type: String,
      default: 'Origem',
    },
    text152: {
      type: String,
      default: 'Agendado',
    },
    text1: {
      type: String,
      default:
        'Aqui você pode integrar seu banco de dados com as principais plataformas  de gerenciamento de CRM.',
    },
    text14411: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    image_alt921: {
      type: String,
      default: 'image',
    },
    image_src92: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text14232: {
      type: String,
      default: 'Hoje às 12h45',
    },
    image_alt9212: {
      type: String,
      default: 'image',
    },
    text14231: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text311111: {
      type: String,
      default: 'Configurar',
    },
    image_alt92: {
      type: String,
      default: 'image',
    },
    text3111111: {
      type: String,
      default: 'Configurar',
    },
    text14412: {
      type: String,
      default: 'Nome e Sobrenome',
    },
  },
  components: {
    BotoIntegraes,
  },
}
</script>

<style scoped>
.contedo-integraes-container {
  width: calc(100% - 300px);
  height: 100vh;
  display: flex;
  overflow: auto;
  position: relative;
  max-width: 1500px;
  max-height: 100vh;
  min-height: 100%;
  margin-left: 300px;
  padding-top: 40px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 40px;
  justify-content: center;
  background-color: F5F5F5;
}
.contedo-integraes-group {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-integraes-header {
  gap: 10PX;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.contedo-integraes-display {
  gap: 10px;
  flex: 0 0 auto;
  width: 80%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-integraes-text {
  color: #FF9F0D;
  font-size: 45px;
  font-family: Fivo Sans Medium;
}
.contedo-integraes-button {
  flex: 0 0 auto;
  width: calc(20% - 10px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.contedo-integraes-actions {
  gap: 10px;
  flex: 0 0 auto;
  display: flex;
  max-width: 525px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.contedo-integraes-boto {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.contedo-integraes-integraes {
  gap: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-integraes-hubspot {
  width: 32%;
  border: 2px dashed #dc0f37;
  height: 200px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.contedo-integraes-logo {
  flex: 0 0 auto;
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
}
.contedo-integraes-image {
  width: 100%;
  object-fit: cover;
  transition: 0.3s;
  padding-top: 0px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 0px;
}

.contedo-integraes-button1 {
  flex: 0 0 auto;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.contedo-integraes-container1 {
  flex: 0 0 auto;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  border-radius: 15px;
  justify-content: center;
  background-color: #dc0f37;
}
.contedo-integraes-piperdrive {
  width: 32%;
  border: 2px dashed #dc0f37;
  height: 200px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.contedo-integraes-logo1 {
  flex: 0 0 auto;
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
}
.contedo-integraes-image1 {
  width: 100%;
  object-fit: cover;
  transition: 0.3s;
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 0px;
}

.contedo-integraes-button2 {
  flex: 0 0 auto;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.contedo-integraes-container2 {
  flex: 0 0 auto;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  border-radius: 15px;
  justify-content: center;
  background-color: #dc0f37;
}
.contedo-integraes-mailchimp {
  width: 32%;
  border: 2px dashed #dc0f37;
  height: 200px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.contedo-integraes-logo2 {
  flex: 0 0 auto;
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
}
.contedo-integraes-image2 {
  width: 100%;
  object-fit: cover;
  padding-top: 0px;
  padding-left: 70;
  padding-right: 70;
  padding-bottom: 0px;
}

.contedo-integraes-button3 {
  flex: 0 0 auto;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.contedo-integraes-container3 {
  flex: 0 0 auto;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  border-radius: 15px;
  justify-content: center;
  background-color: #dc0f37;
}
.contedo-integraes-piperrun {
  width: 32%;
  border: 2px dashed #dc0f37;
  height: 200px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.contedo-integraes-logo3 {
  flex: 0 0 auto;
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
}
.contedo-integraes-image3 {
  width: 100%;
  object-fit: cover;
  padding-top: 0px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 0px;
}

.contedo-integraes-logo4 {
  flex: 0 0 auto;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.contedo-integraes-container4 {
  flex: 0 0 auto;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  border-radius: 15px;
  justify-content: center;
  background-color: #dc0f37;
}
.contedo-integraes-rd-station {
  width: 32%;
  border: 2px dashed #dc0f37;
  height: 200px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.contedo-integraes-logo5 {
  flex: 0 0 auto;
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
}
.contedo-integraes-image4 {
  width: 100%;
  object-fit: cover;
  padding-top: 0px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 0px;
}

.contedo-integraes-button4 {
  flex: 0 0 auto;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.contedo-integraes-container5 {
  flex: 0 0 auto;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  border-radius: 15px;
  justify-content: center;
  background-color: #dc0f37;
}
.contedo-integraes-salesforce {
  width: 32%;
  border: 2px dashed #dc0f37;
  height: 200px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.contedo-integraes-logo6 {
  flex: 0 0 auto;
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contedo-integraes-image5 {
  max-height: 80%;
  object-fit: cover;
  padding-top: 0px;
  padding-left: 40px;
  padding-right: 40px;
}

.contedo-integraes-button5 {
  flex: 0 0 auto;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.contedo-integraes-container6 {
  flex: 0 0 auto;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  border-radius: 15px;
  justify-content: center;
  background-color: #dc0f37;
}
.contedo-integraes-agendor {
  width: 32%;
  border: 2px dashed #dc0f37;
  height: 200px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.contedo-integraes-logo7 {
  flex: 0 0 auto;
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contedo-integraes-image6 {
  width: 100%;
  object-fit: cover;
  padding-top: 0px;
  padding-left: 40px;
  padding-right: 40px;
}

.contedo-integraes-button6 {
  flex: 0 0 auto;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.contedo-integraes-container7 {
  flex: 0 0 auto;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  border-radius: 15px;
  justify-content: center;
  background-color: #dc0f37;
}
.contedo-integraes-agendor1 {
  width: 32%;
  border: 2px dashed #dc0f37;
  height: 200px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.contedo-integraes-logo8 {
  flex: 0 0 auto;
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contedo-integraes-image7 {
  max-height: 90%;
  object-fit: cover;
  padding-top: 0px;
  padding-left: 40px;
  padding-right: 40px;
}

.contedo-integraes-button7 {
  flex: 0 0 auto;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.contedo-integraes-container8 {
  flex: 0 0 auto;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-self: flex-end;
  border-radius: 15px;
  justify-content: center;
  background-color: #dc0f37;
}

</style>
