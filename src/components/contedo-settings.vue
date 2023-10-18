<template>
  <div class="contedo-settings-container" v-bind:class="rootClassName">
    <div class="contedo-settings-group">
      <div class="contedo-settings-header">
        <div class="contedo-settings-display">
          <span class="contedo-settings-text titulo">{{ text2 }}</span>
        </div>
      </div>
      <div class="contedo-settings-configuraes">
        <div class="contedo-settings-box">
          <div class="contedo-settings-foto">
            <img
              alt="image"
              src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695044084/jsnns64kvxwhtb4hhzq3.png"
              class="contedo-settings-image"
            />
            <div class="contedo-settings-mudar-foto">
              <img
                alt="image"
                src="https://api.iconify.design/zondicons/camera.svg?color=white"
                class="contedo-settings-image01"
              />
            </div>
          </div>
          <div class="contedo-settings-user-info">
            <div class="contedo-settings-container01">
              <span class="contedo-settings-text01">{{ text }}</span>
              <span class="contedo-settings-text02">{{ text4 }}</span>
            </div>
          </div>
          <div class="contedo-settings-container02">
            <div class="contedo-settings-nome">
              <div class="contedo-settings-label">
                <span class="contedo-settings-text03">{{ text5 }}</span>
              </div>
              <div class="contedo-settings-input">
                <span class="contedo-settings-text04">{{ text6 }}</span>
              </div>
            </div>
            <div class="contedo-settings-sobrenome">
              <div class="contedo-settings-label1">
                <span class="contedo-settings-text05">{{ text52 }}</span>
              </div>
              <div class="contedo-settings-input1">
                <span class="contedo-settings-text06">{{ text61 }}</span>
              </div>
            </div>
            <div class="contedo-settings-email">
              <div class="contedo-settings-label2">
                <span class="contedo-settings-text07">{{ text521 }}</span>
              </div>
              <div class="contedo-settings-input2">
                <span class="contedo-settings-text08">{{ text62 }}</span>
              </div>
            </div>
            <div class="contedo-settings-telefone">
              <div class="contedo-settings-label3">
                <span class="contedo-settings-text09">{{ text5211 }}</span>
              </div>
              <div class="contedo-settings-input3">
                <span class="contedo-settings-text10">{{ text63 }}</span>
              </div>
            </div>
            <div class="contedo-settings-alterar-senha">
              <div class="contedo-settings-conteudo">
                <img
                  :alt="image_alt"
                  src="https://api.iconify.design/solar/password-outline.svg?color=%23737373"
                  class="contedo-settings-image02"
                />
                <span class="contedo-settings-text11">{{ text52111 }}</span>
              </div>
            </div>
            <div class="contedo-settings-button">
              <div class="contedo-settings-buttonset">
                <div class="contedo-settings-buttonaction">
                  <span class="contedo-settings-text12">{{ text7 }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contedo-settings-container03">
          <div class="contedo-settings-reunioes">
            <div class="contedo-settings-lead">
              <span class="contedo-settings-text13 dashlead">{{ text71 }}</span>
            </div>
            <div class="contedo-settings-container04">
              <div class="contedo-settings-reuniao1">
                <div class="contedo-settings-image03">
                  <img
                    alt="image"
                    src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                    class="contedo-settings-image04"
                  />
                </div>
                <div class="contedo-settings-cliente1">
                  <span class="contedo-settings-text14 dashlead">
                    Reunião Libbs
                  </span>
                  <span class="contedo-settings-text15 subtitulo">
                    09/08/2023 | Das 9h às 10h | online
                  </span>
                  <span class="contedo-settings-text16">{{ text8 }}</span>
                </div>
              </div>
              <div class="contedo-settings-reuniao11">
                <div class="contedo-settings-image05">
                  <img
                    alt="image"
                    src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                    class="contedo-settings-image06"
                  />
                </div>
                <div class="contedo-settings-cliente11">
                  <span class="contedo-settings-text17 dashlead">
                    Reunião Libbs
                  </span>
                  <span class="contedo-settings-text18 subtitulo">
                    09/08/2023 | Das 9h às 10h | online
                  </span>
                  <span class="contedo-settings-text19">{{ text86 }}</span>
                </div>
              </div>
              <div class="contedo-settings-reuniao12">
                <div class="contedo-settings-image07">
                  <img
                    alt="image"
                    src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                    class="contedo-settings-image08"
                  />
                </div>
                <div class="contedo-settings-cliente12">
                  <span class="contedo-settings-text20 dashlead">
                    Reunião Libbs
                  </span>
                  <span class="contedo-settings-text21 subtitulo">
                    09/08/2023 | Das 9h às 10h | online
                  </span>
                  <span class="contedo-settings-text22">{{ text85 }}</span>
                </div>
              </div>
              <div class="contedo-settings-reuniao13">
                <div class="contedo-settings-image09">
                  <img
                    alt="image"
                    src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                    class="contedo-settings-image10"
                  />
                </div>
                <div class="contedo-settings-cliente13">
                  <span class="contedo-settings-text23 dashlead">
                    Reunião Libbs
                  </span>
                  <span class="contedo-settings-text24 subtitulo">
                    09/08/2023 | Das 9h às 10h | online
                  </span>
                  <span class="contedo-settings-text25">{{ text851 }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="contedo-settings-container05">
            <div class="contedo-settings-content-left">
              <div class="contedo-settings-container06">
                <span class="contedo-settings-text26">{{ text92 }}</span>
                <span class="contedo-settings-text27">{{ text91 }}</span>
                <span class="contedo-settings-text28">{{ text9 }}</span>
              </div>
              <div class="contedo-settings-container07"></div>
              <div class="contedo-settings-container08">
                <span class="contedo-settings-text29">{{ text922 }}</span>
                <span class="contedo-settings-text30">{{ text912 }}</span>
                <span class="contedo-settings-text31">{{ text94 }}</span>
              </div>
            </div>
            <div class="contedo-settings-timeline">
              <div class="contedo-settings-step1">
                <div class="contedo-settings-container09"></div>
                <div class="contedo-settings-container10"></div>
              </div>
              <div class="contedo-settings-step2">
                <div class="contedo-settings-container11"></div>
                <div class="contedo-settings-container12"></div>
              </div>
              <div class="contedo-settings-step3">
                <div class="contedo-settings-container13"></div>
                <div class="contedo-settings-container14"></div>
              </div>
              <div class="contedo-settings-step4">
                <div class="contedo-settings-container15"></div>
              </div>
            </div>
            <div class="contedo-settings-content-right">
              <div class="contedo-settings-container16"></div>
              <div class="contedo-settings-container17">
                <span class="contedo-settings-text32">{{ text9211 }}</span>
                <span class="contedo-settings-text33">{{ text9111 }}</span>
                <span class="contedo-settings-text34">{{ text931 }}</span>
              </div>
              <div class="contedo-settings-container18"></div>
              <div class="contedo-settings-container19">
                <span class="contedo-settings-text35">{{ text921 }}</span>
                <span class="contedo-settings-text36">{{ text911 }}</span>
                <span class="contedo-settings-text37">{{ text93 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContedoSettings',
  props: {
    text52: {
      type: String,
      default: 'Sobrenome',
    },
    text62: {
      type: String,
      default: 'exemplo@flashvolve.com',
    },
    text631: {
      type: String,
      default: '55 11 98765-4321',
    },
    text81: {
      type: String,
      default: 'Desmarcar',
    },
    text911: {
      type: String,
      default: 'Título do evento',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text9: {
      type: String,
      default:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    text3: {
      type: String,
      default: 'Configurar',
    },
    text4: {
      type: String,
      default: 'exemploa@flashvolve.com',
    },
    rootClassName11: String,
    text831: {
      type: String,
      default: 'Desmarcar',
    },
    image_alt3: {
      type: String,
      default: 'image',
    },
    text64: {
      type: String,
      default: '168',
    },
    text5211: {
      type: String,
      default: 'Telefone',
    },
    text83: {
      type: String,
      default: 'Desmarcar',
    },
    text6: {
      type: String,
      default: 'Nome',
    },
    text851: {
      type: String,
      default: 'Desmarcar',
    },
    text71: {
      type: String,
      default: 'Próximas reuniões',
    },
    text84: {
      type: String,
      default: 'Desmarcar',
    },
    text931: {
      type: String,
      default:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    text: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text33: {
      type: String,
      default: 'Configurar',
    },
    text63: {
      type: String,
      default: '55 11 98765-4321',
    },
    text86: {
      type: String,
      default: 'Desmarcar',
    },
    text91: {
      type: String,
      default: 'Título do evento',
    },
    text33111: {
      type: String,
      default: 'Configurar',
    },
    text2: {
      type: String,
      default: 'Configurações da conta',
    },
    text521111: {
      type: String,
      default: 'Alterar senha',
    },
    text92: {
      type: String,
      default: '12 de agosto',
    },
    image_src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text94: {
      type: String,
      default:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    text9111: {
      type: String,
      default: 'Título do evento',
    },
    text1: {
      type: String,
      default:
        'Aqui você pode integrar seu banco de dados com as principais plataformas  de gerenciamento de CRM.',
    },
    text7: {
      type: String,
      default: 'Salvar alterações',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    text82: {
      type: String,
      default: 'Desmarcar',
    },
    text51: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    image_src2: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text912: {
      type: String,
      default: 'Título do evento',
    },
    text331111: {
      type: String,
      default: 'Configurar',
    },
    text811: {
      type: String,
      default: 'Desmarcar',
    },
    text8: {
      type: String,
      default: 'Desmarcar',
    },
    text9211: {
      type: String,
      default: '12 de agosto',
    },
    text521: {
      type: String,
      default: 'E-mail',
    },
    rootClassName: String,
    text93: {
      type: String,
      default:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    text922: {
      type: String,
      default: '12 de agosto',
    },
    text85: {
      type: String,
      default: 'Desmarcar',
    },
    text41: {
      type: String,
      default: 'exemploa@flashvolve.com',
    },
    text52111: {
      type: String,
      default: 'Alterar senha',
    },
    text3311111: {
      type: String,
      default: 'Configurar',
    },
    text921: {
      type: String,
      default: '12 de agosto',
    },
    text3311: {
      type: String,
      default: 'Configurar',
    },
    text61: {
      type: String,
      default: 'Sobrenome',
    },
    text6111: {
      type: String,
      default: '240',
    },
    text611: {
      type: String,
      default: 'de',
    },
    text5: {
      type: String,
      default: 'Nome',
    },
    image_alt2: {
      type: String,
      default: 'image',
    },
    text331: {
      type: String,
      default: 'Configurar',
    },
    text33111111: {
      type: String,
      default: 'Configurar',
    },
  },
}
</script>

<style scoped>
.contedo-settings-container {
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
.contedo-settings-group {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-settings-header {
  gap: 10PX;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-settings-display {
  gap: 10px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-settings-text {
  color: #dc0f37;
  font-size: 45px;
  font-family: Fivo Sans Medium;
}
.contedo-settings-configuraes {
  gap: 20px;
  width: 100%;
  display: flex;
  align-self: center;
  margin-top: 50px;
  align-items: flex-start;
  justify-self: center;
  flex-direction: row;
}
.contedo-settings-box {
  gap: 10px;
  width: 40%;
  display: flex;
  padding: 40px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.contedo-settings-foto {
  flex: 0 0 auto;
  width: 70%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.contedo-settings-image {
  width: 100%;
  max-width: 200px;
  object-fit: cover;
  border-radius: 50%;
}
.contedo-settings-mudar-foto {
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  display: flex;
  position: absolute;
  align-items: center;
  border-radius: 100%;
  margin-bottom: -20;
  justify-content: center;
  background-color: #dc0f37;
}
.contedo-settings-image01 {
  width: 60%;
  object-fit: cover;
}
.contedo-settings-user-info {
  gap: 20px;
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-self: center;
  flex-direction: row;
}
.contedo-settings-container01 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-settings-text01 {
  color: #737373;
  font-size: 38px;
  font-family: Fivo Sans Heavy;
}
.contedo-settings-text02 {
  color: #737373;
}
.contedo-settings-container02 {
  gap: 10px;
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-settings-nome {
  gap: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-self: center;
  flex-direction: column;
}
.contedo-settings-label {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-settings-text03 {
  color: #737373;
  font-size: 18px;
  font-family: Fivo Sans Heavy;
}
.contedo-settings-input {
  flex: 0 0 auto;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: flex-start;
  border-color: #b3b3b3;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  background-color: var(--dl-color-gray-white);
}
.contedo-settings-text04 {
  color: #b3b3b3;
  font-size: 18px;
  align-self: center;
  font-family: Fivo Sans Medium;
  padding-left: 10px;
}
.contedo-settings-sobrenome {
  gap: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-self: center;
  flex-direction: column;
}
.contedo-settings-label1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-settings-text05 {
  color: #737373;
  font-size: 18px;
  font-family: Fivo Sans Heavy;
}
.contedo-settings-input1 {
  flex: 0 0 auto;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: flex-start;
  border-color: #b3b3b3;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  background-color: var(--dl-color-gray-white);
}
.contedo-settings-text06 {
  color: #b3b3b3;
  font-size: 18px;
  align-self: center;
  font-family: Fivo Sans Medium;
  padding-left: 10px;
}
.contedo-settings-email {
  gap: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-self: center;
  flex-direction: column;
}
.contedo-settings-label2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-settings-text07 {
  color: #737373;
  font-size: 18px;
  font-family: Fivo Sans Heavy;
}
.contedo-settings-input2 {
  flex: 0 0 auto;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: flex-start;
  border-color: #b3b3b3;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  background-color: var(--dl-color-gray-white);
}
.contedo-settings-text08 {
  color: #b3b3b3;
  font-size: 18px;
  align-self: center;
  font-family: Fivo Sans Medium;
  padding-left: 10px;
}
.contedo-settings-telefone {
  gap: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-self: center;
  flex-direction: column;
}
.contedo-settings-label3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-settings-text09 {
  color: #737373;
  font-size: 18px;
  font-family: Fivo Sans Heavy;
}
.contedo-settings-input3 {
  flex: 0 0 auto;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: flex-start;
  border-color: #b3b3b3;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  background-color: var(--dl-color-gray-white);
}
.contedo-settings-text10 {
  color: #b3b3b3;
  font-size: 18px;
  align-self: center;
  font-family: Fivo Sans Medium;
  padding-left: 10px;
}
.contedo-settings-alterar-senha {
  gap: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-self: center;
  flex-direction: column;
}
.contedo-settings-conteudo {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-settings-image02 {
  width: 35px;
  object-fit: cover;
}
.contedo-settings-text11 {
  color: #737373;
  font-size: 20px;
  font-family: Fivo Sans Heavy;
  padding-left: 10px;
}
.contedo-settings-button {
  gap: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-self: center;
  flex-direction: column;
}
.contedo-settings-buttonset {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.contedo-settings-buttonaction {
  flex: 0 0 auto;
  width: 70%;
  height: 50px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: #dc0f37;
}
.contedo-settings-text12 {
  color: #ffffff;
  font-size: 18px;
  align-self: center;
  text-align: center;
  font-family: Fivo Sans Medium;
}
.contedo-settings-container03 {
  gap: 20px;
  width: 60%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-settings-reunioes {
  gap: 20px;
  width: 100%;
  height: 80%;
  display: flex;
  padding: 30px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #dc0f37;
}
.contedo-settings-lead {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.contedo-settings-text13 {
  color: var(--dl-color-gray-white);
  font-size: 20px;
  font-family: Fivo Sans Medium;
}
.contedo-settings-container04 {
  gap: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-settings-reuniao1 {
  flex: 0 0 auto;
  width: 48%;
  height: auto;
  display: flex;
  padding: 10px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-start;
  border-radius: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-settings-image03 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
}
.contedo-settings-image04 {
  width: 25px;
  object-fit: cover;
}
.contedo-settings-cliente1 {
  flex: 0 0 auto;
  width: calc(100% - 25px);
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  flex-direction: column;
}
.contedo-settings-text14 {
  color: #737373;
  align-self: flex-start;
}
.contedo-settings-text15 {
  color: var(--dl-color-gray-black);
  font-size: 14px;
  margin-top: 5px;
}
.contedo-settings-text16 {
  color: #dc0f37;
  margin-top: 5px;
  font-family: Fivo Sans Modern;
}
.contedo-settings-reuniao11 {
  flex: 0 0 auto;
  width: 48%;
  height: auto;
  display: flex;
  padding: 10px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-start;
  border-radius: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-settings-image05 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
}
.contedo-settings-image06 {
  width: 25px;
  object-fit: cover;
}
.contedo-settings-cliente11 {
  flex: 0 0 auto;
  width: calc(100% - 25px);
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  flex-direction: column;
}
.contedo-settings-text17 {
  color: #737373;
  align-self: flex-start;
}
.contedo-settings-text18 {
  color: var(--dl-color-gray-black);
  font-size: 14px;
  margin-top: 5px;
}
.contedo-settings-text19 {
  color: #dc0f37;
  margin-top: 5px;
  font-family: Fivo Sans Modern;
}
.contedo-settings-reuniao12 {
  flex: 0 0 auto;
  width: 48%;
  height: auto;
  display: flex;
  padding: 10px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-start;
  border-radius: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-settings-image07 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
}
.contedo-settings-image08 {
  width: 25px;
  object-fit: cover;
}
.contedo-settings-cliente12 {
  flex: 0 0 auto;
  width: calc(100% - 25px);
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  flex-direction: column;
}
.contedo-settings-text20 {
  color: #737373;
  align-self: flex-start;
}
.contedo-settings-text21 {
  color: var(--dl-color-gray-black);
  font-size: 14px;
  margin-top: 5px;
}
.contedo-settings-text22 {
  color: #dc0f37;
  margin-top: 5px;
  font-family: Fivo Sans Modern;
}
.contedo-settings-reuniao13 {
  flex: 0 0 auto;
  width: 48%;
  height: auto;
  display: flex;
  padding: 10px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-start;
  border-radius: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-settings-image09 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
}
.contedo-settings-image10 {
  width: 25px;
  object-fit: cover;
}
.contedo-settings-cliente13 {
  flex: 0 0 auto;
  width: calc(100% - 25px);
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  flex-direction: column;
}
.contedo-settings-text23 {
  color: #737373;
  align-self: flex-start;
}
.contedo-settings-text24 {
  color: var(--dl-color-gray-black);
  font-size: 14px;
  margin-top: 5px;
}
.contedo-settings-text25 {
  color: #dc0f37;
  margin-top: 5px;
  font-family: Fivo Sans Modern;
}
.contedo-settings-container05 {
  width: 100%;
  height: 481px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  align-items: center;
  padding-top: 40px;
  padding-left: 20px;
  border-radius: 15px;
  padding-right: 20px;
  padding-bottom: 40px;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.contedo-settings-content-left {
  flex: 0 0 auto;
  width: 45%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-settings-container06 {
  gap: 5px;
  flex: 0 0 auto;
  width: 100%;
  height: 100PX;
  display: flex;
  align-self: flex-end;
  align-items: flex-end;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
}
.contedo-settings-text26 {
  color: #737373;
  font-size: 14px;
  text-align: right;
  font-family: "Fivo Sans Modern";
}
.contedo-settings-text27 {
  color: #dc0f37;
  font-size: 22px;
  text-align: right;
  font-family: "Fivo Sans Modern";
}
.contedo-settings-text28 {
  color: #737373;
  font-size: 14px;
  text-align: right;
  font-family: "Fivo Sans Medium";
}
.contedo-settings-container07 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.contedo-settings-container08 {
  gap: 5px;
  flex: 0 0 auto;
  width: 100%;
  height: 100PX;
  display: flex;
  align-items: flex-end;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
}
.contedo-settings-text29 {
  color: #737373;
  font-size: 14px;
  text-align: right;
  font-family: "Fivo Sans Modern";
}
.contedo-settings-text30 {
  color: #dc0f37;
  font-size: 22px;
  text-align: right;
  font-family: "Fivo Sans Modern";
}
.contedo-settings-text31 {
  color: #737373;
  font-size: 14px;
  text-align: right;
  font-family: "Fivo Sans Medium";
}
.contedo-settings-timeline {
  flex: 0 0 auto;
  width: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-settings-step1 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-settings-container09 {
  flex: 0 0 auto;
  width: 20PX;
  height: 20PX;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-radius: 100%;
  background-color: #DC0F37;
}
.contedo-settings-container10 {
  flex: 0 0 auto;
  width: 5PX;
  height: 100px;
  margin: 2PX;
  display: flex;
  align-items: flex-start;
  background-color: #D3D3D3;
}
.contedo-settings-step2 {
  display: flex;
  margin-top: -2;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-settings-container11 {
  flex: 0 0 auto;
  width: 20PX;
  height: 20PX;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-radius: 100%;
  background-color: #DC0F37;
}
.contedo-settings-container12 {
  flex: 0 0 auto;
  width: 5PX;
  height: 100px;
  margin: 2PX;
  display: flex;
  align-items: flex-start;
  background-color: #D3D3D3;
}
.contedo-settings-step3 {
  display: flex;
  margin-top: -2px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-settings-container13 {
  flex: 0 0 auto;
  width: 20PX;
  height: 20PX;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-radius: 100%;
  background-color: #DC0F37;
}
.contedo-settings-container14 {
  flex: 0 0 auto;
  width: 5PX;
  height: 100px;
  margin: 2PX;
  display: flex;
  align-items: flex-start;
  background-color: #D3D3D3;
}
.contedo-settings-step4 {
  display: flex;
  margin-top: -2px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-settings-container15 {
  flex: 0 0 auto;
  width: 20PX;
  height: 20PX;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-radius: 100%;
  background-color: #DC0F37;
}
.contedo-settings-content-right {
  flex: 0 0 auto;
  width: 45%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-settings-container16 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.contedo-settings-container17 {
  gap: 5px;
  flex: 0 0 auto;
  width: 100%;
  height: 100PX;
  display: flex;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
}
.contedo-settings-text32 {
  color: #737373;
  font-size: 14px;
  font-family: "Fivo Sans Modern";
}
.contedo-settings-text33 {
  color: #dc0f37;
  font-size: 22px;
  font-family: "Fivo Sans Modern";
}
.contedo-settings-text34 {
  color: #737373;
  font-size: 14px;
  font-family: "Fivo Sans Medium";
}
.contedo-settings-container18 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.contedo-settings-container19 {
  gap: 5px;
  flex: 0 0 auto;
  width: 100%;
  height: 100PX;
  display: flex;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
}
.contedo-settings-text35 {
  color: #737373;
  font-size: 14px;
  font-family: "Fivo Sans Modern";
}
.contedo-settings-text36 {
  color: #dc0f37;
  font-size: 22px;
  font-family: "Fivo Sans Modern";
}
.contedo-settings-text37 {
  color: #737373;
  font-size: 14px;
  font-family: "Fivo Sans Medium";
}

@media(max-width: 1440px) {
  .contedo-settings-box {
    position: relative;
  }
  .contedo-settings-foto {
    width: 60%;
    align-self: center;
  }
  .contedo-settings-user-info {
    margin-top: 20px;
  }
  .contedo-settings-text13 {
    color: var(--dl-color-gray-white);
  }
  .contedo-settings-text16 {
    color: #dc0f37;
    margin-top: 5px;
    font-family: Fivo Sans Modern;
  }
  .contedo-settings-text19 {
    color: #dc0f37;
    margin-top: 5px;
    font-family: Fivo Sans Modern;
  }
  .contedo-settings-text22 {
    color: #dc0f37;
    margin-top: 5px;
    font-family: Fivo Sans Modern;
  }
  .contedo-settings-text25 {
    color: #dc0f37;
    margin-top: 5px;
    font-family: Fivo Sans Modern;
  }
}
@media(max-width: 1220px) {
  .contedo-settings-cliente1 {
    padding-left: 15;
  }
  .contedo-settings-cliente11 {
    padding-left: 15;
  }
  .contedo-settings-cliente12 {
    padding-left: 15;
  }
  .contedo-settings-cliente13 {
    padding-left: 15;
  }
}
</style>
