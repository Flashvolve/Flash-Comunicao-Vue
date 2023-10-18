<template>
  <div class="contedo-dashboard-container" v-bind:class="rootClassName">
    <div class="contedo-dashboard-conteudo">
      <div class="contedo-dashboard-header">
        <div class="contedo-dashboard-display">
          <span class="contedo-dashboard-text titulo">Dashboard</span>
          <span class="subtitulo">Quinta feira, 03 de agosto de 2023</span>
        </div>
        <div class="contedo-dashboard-actions">
          <div class="contedo-dashboard-boto"><app-boto></app-boto></div>
        </div>
      </div>
      <div class="contedo-dashboard-conteudo1">
        <div class="contedo-dashboard-boas-vindas">
          <h2 class="contedo-dashboard-text02">{{ heading }}</h2>
          <span class="contedo-dashboard-text03">{{ text5 }}</span>
        </div>
        <div class="contedo-dashboard-kp-is">
          <div class="contedo-dashboard-container01">
            <div class="contedo-dashboard-box">
              <div class="contedo-dashboard-container02">
                <div class="contedo-dashboard-info">
                  <span class="contedo-dashboard-text04">{{ text4 }}</span>
                  <span class="contedo-dashboard-text05">{{ text311 }}</span>
                </div>
                <div class="contedo-dashboard-desempenho">
                  <img
                    :alt="image_alt1"
                    src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
                    class="contedo-dashboard-image"
                  />
                </div>
              </div>
              <div class="contedo-dashboard-container03"></div>
            </div>
            <div class="contedo-dashboard-box1">
              <div class="contedo-dashboard-container04">
                <div class="contedo-dashboard-info1">
                  <span class="contedo-dashboard-text06">{{ text43 }}</span>
                  <span class="contedo-dashboard-text07">{{ text3113 }}</span>
                </div>
                <div class="contedo-dashboard-desempenho1">
                  <img
                    :alt="image_alt13"
                    src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
                    class="contedo-dashboard-image1"
                  />
                </div>
              </div>
              <div class="contedo-dashboard-container05"></div>
            </div>
          </div>
          <div class="contedo-dashboard-container06">
            <div class="contedo-dashboard-box2">
              <div class="contedo-dashboard-container07">
                <div class="contedo-dashboard-info2">
                  <span class="contedo-dashboard-text08">{{ text431 }}</span>
                  <span class="contedo-dashboard-text09">{{ text31131 }}</span>
                </div>
                <div class="contedo-dashboard-desempenho2">
                  <img
                    :alt="image_alt131"
                    src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
                    class="contedo-dashboard-image2"
                  />
                </div>
              </div>
              <div class="contedo-dashboard-container08"></div>
            </div>
            <div class="contedo-dashboard-box3">
              <div class="contedo-dashboard-container09">
                <div class="contedo-dashboard-info3">
                  <span class="contedo-dashboard-text10">{{ text4311 }}</span>
                  <span class="contedo-dashboard-text11">{{ text311311 }}</span>
                </div>
                <div class="contedo-dashboard-desempenho3">
                  <img
                    :alt="image_alt1311"
                    src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
                    class="contedo-dashboard-image3"
                  />
                </div>
              </div>
              <div class="contedo-dashboard-container10"></div>
            </div>
          </div>
        </div>
        <div class="contedo-dashboard-disparos">
          <div class="contedo-dashboard-disparos1">
            <div class="contedo-dashboard-info4">
              <span class="contedo-dashboard-text12">{{ text432 }}</span>
              <span class="contedo-dashboard-text13">{{ text31132 }}</span>
            </div>
            <div class="contedo-dashboard-leads">
              <div class="contedo-dashboard-novos">
                <span class="contedo-dashboard-text14">{{ text311322 }}</span>
                <span class="contedo-dashboard-text15">{{ text4322 }}</span>
              </div>
              <div class="contedo-dashboard-retornos">
                <span class="contedo-dashboard-text16">{{ text3113221 }}</span>
                <span class="contedo-dashboard-text17">{{ text43221 }}</span>
              </div>
              <div class="contedo-dashboard-personalizacoes">
                <span class="contedo-dashboard-text18">{{ text31132211 }}</span>
                <span class="contedo-dashboard-text19">{{ text432211 }}</span>
              </div>
            </div>
            <div class="contedo-dashboard-grafico">
              <img
                :alt="image_alt2"
                :src="image_src2"
                class="contedo-dashboard-image4"
              />
            </div>
          </div>
          <div class="contedo-dashboard-noticias">
            <div class="contedo-dashboard-info5">
              <span class="contedo-dashboard-text20">{{ text4321 }}</span>
            </div>
            <div class="contedo-dashboard-container11">
              <div class="contedo-dashboard-news">
                <div class="contedo-dashboard-timeline">
                  <div class="contedo-dashboard-point">
                    <img
                      :alt="image_alt3"
                      src="https://api.iconify.design/tabler/point-filled.svg?color=white"
                      class="contedo-dashboard-image5"
                    />
                  </div>
                  <div class="contedo-dashboard-line"></div>
                </div>
                <div class="contedo-dashboard-container12">
                  <span class="textboxlead">{{ text10 }}</span>
                  <span class="Textbox">{{ text101 }}</span>
                  <span class="contedo-dashboard-text23 Textboxinfo">
                    {{ text1011 }}
                  </span>
                </div>
              </div>
              <div class="contedo-dashboard-news1">
                <div class="contedo-dashboard-timeline1">
                  <div class="contedo-dashboard-point1">
                    <img
                      :alt="image_alt33"
                      src="https://api.iconify.design/tabler/point-filled.svg?color=white"
                      class="contedo-dashboard-image6"
                    />
                  </div>
                  <div class="contedo-dashboard-line1"></div>
                </div>
                <div class="contedo-dashboard-container13">
                  <span class="textboxlead">{{ text104 }}</span>
                  <span class="Textbox">{{ text1014 }}</span>
                  <span class="contedo-dashboard-text26 Textboxinfo">
                    {{ text10113 }}
                  </span>
                </div>
              </div>
              <div class="contedo-dashboard-news2">
                <div class="contedo-dashboard-timeline2">
                  <div class="contedo-dashboard-point2">
                    <img
                      :alt="image_alt331"
                      src="https://api.iconify.design/tabler/point-filled.svg?color=white"
                      class="contedo-dashboard-image7"
                    />
                  </div>
                  <div class="contedo-dashboard-line2"></div>
                </div>
                <div class="contedo-dashboard-container14">
                  <span class="textboxlead">{{ text1041 }}</span>
                  <span class="Textbox">{{ text10141 }}</span>
                  <span class="contedo-dashboard-text29 Textboxinfo">
                    {{ text101131 }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBoto from './boto'

export default {
  name: 'ContedoDashboard',
  props: {
    text9: {
      type: String,
      default: '2836',
    },
    text2: {
      type: String,
      default: 'Últimos 3 meses: 01 de maio, 2023 - 01 de agosto, 2023',
    },
    text915: {
      type: String,
      default: 'Réplicas',
    },
    text43221: {
      type: String,
      default: '17.152',
    },
    image_alt2: {
      type: String,
      default: 'image',
    },
    image_alt3: {
      type: String,
      default: 'image',
    },
    text31132: {
      type: String,
      default: 'Alcance das mensagens de campanhas no ar',
    },
    text4: {
      type: String,
      default: 'Usuários',
    },
    text811: {
      type: String,
      default: '10/08/2023 | Das 9h às 12h | online',
    },
    text10111: {
      type: String,
      default: '{{data_publicacao}}',
    },
    heading: {
      type: String,
      default: 'Olá, 👋',
    },
    text4322: {
      type: String,
      default: '17.952',
    },
    text4311: {
      type: String,
      default: 'Engajamento',
    },
    text94: {
      type: String,
      default: '39,3%',
    },
    text411: {
      type: String,
      default: 'Engajamento',
    },
    text3113221: {
      type: String,
      default: 'Retornos',
    },
    text10: {
      type: String,
      default: 'Empresa ABC realiza treinamentos para prevenção de acidentes',
    },
    text431: {
      type: String,
      default: 'Média por usuário',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    text113: {
      type: String,
      default: 'Agendamentos',
    },
    text81: {
      type: String,
      default: '09/08/2023 | Das 9h às 10h | online',
    },
    text311: {
      type: String,
      default: '1478',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    text611: {
      type: String,
      default: '40',
    },
    rootClassName: String,
    text114: {
      type: String,
      default: 'Atualizado hoje, às 10h56',
    },
    text1012: {
      type: String,
      default:
        'A empresa ABC está promovendo treinamentos para seus funcionários com o objetivo de prevenir acidentes de trabalho. Os treinamentos abordam temas como segurança em altura, uso de equipamentos de proteção e primeiros socorros.',
    },
    text432: {
      type: String,
      default: 'Disparos',
    },
    text31111: {
      type: String,
      default: '32%',
    },
    text3112: {
      type: String,
      default: '3786',
    },
    text61: {
      type: String,
      default: 'de',
    },
    text432211: {
      type: String,
      default: '9.365',
    },
    rootClassName11: String,
    rootClassName111: String,
    image_alt331: {
      type: String,
      default: 'image',
    },
    text96: {
      type: String,
      default: '1,7%',
    },
    image_alt32: {
      type: String,
      default: 'image',
    },
    text1014: {
      type: String,
      default: 'test',
    },
    text31131: {
      type: String,
      default: '2.56',
    },
    text3111: {
      type: String,
      default: '2.56',
    },
    text101131: {
      type: String,
      default: '{{data_publicacao}}',
    },
    text32: {
      type: String,
      default: 'Métricas',
    },
    image_alt13: {
      type: String,
      default: 'image',
    },
    text7: {
      type: String,
      default: 'Próximas reuniões',
    },
    image_alt131: {
      type: String,
      default: 'image',
    },
    text911: {
      type: String,
      default: 'Entregues',
    },
    text311322: {
      type: String,
      default: 'Novos',
    },
    image_src: {
      type: String,
      default: '9e344562-f664-4f8c-ae7a-ecea58cc2b9f',
    },
    text311321: {
      type: String,
      default: 'Alcance das mensagens de campanhas no ar',
    },
    text10112: {
      type: String,
      default: '{{data_publicacao}}',
    },
    text6: {
      type: String,
      default: '10',
    },
    image_alt111: {
      type: String,
      default: 'image',
    },
    text103: {
      type: String,
      default: 'Empresa ABC realiza treinamentos para prevenção de acidentes',
    },
    text10141: {
      type: String,
      default:
        'A empresa 123 está promovendo treinamentos para seus funcionários com o objetivo de prevenir acidentes de trabalho. Os treinamentos abordam temas como segurança em altura, uso de equipamentos de proteção e primeiros socorros.',
    },
    text95: {
      type: String,
      default: '9,2%',
    },
    text8: {
      type: String,
      default: 'Reunião Libbs',
    },
    text5: {
      type: String,
      default: 'Pronto para começar o dia?',
    },
    image_src1: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text11: {
      type: String,
      default: 'Atualizado hoje, às 10h56',
    },
    text91: {
      type: String,
      default: 'Enviados',
    },
    text101: {
      type: String,
      default:
        'A empresa ABC está promovendo treinamentos para seus funcionários com o objetivo de prevenir acidentes de trabalho. Os treinamentos abordam temas como segurança em altura, uso de equipamentos de proteção e primeiros socorros.',
    },
    text102: {
      type: String,
      default: 'Empresa ABC realiza treinamentos para prevenção de acidentes',
    },
    image_alt12: {
      type: String,
      default: 'image',
    },
    rootClassName1: String,
    text914: {
      type: String,
      default: 'Clicados',
    },
    text1013: {
      type: String,
      default:
        'A empresa ABC está promovendo treinamentos para seus funcionários com o objetivo de prevenir acidentes de trabalho. Os treinamentos abordam temas como segurança em altura, uso de equipamentos de proteção e primeiros socorros.',
    },
    text82: {
      type: String,
      default: 'Reunião Ultrafarma',
    },
    text4321: {
      type: String,
      default: 'Últimas notícias',
    },
    text93: {
      type: String,
      default: '2,1%',
    },
    text10113: {
      type: String,
      default: '{{data_publicacao}}',
    },
    image_alt11: {
      type: String,
      default: 'image',
    },
    text3: {
      type: String,
      default: 'Você economizou até o momento',
    },
    image_src3: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text43: {
      type: String,
      default: 'Personalizações',
    },
    text104: {
      type: String,
      default: 'Empresa XYZ realiza treinamentos para prevenção de acidentes',
    },
    text1: {
      type: String,
      default: 'Quinta feira, 03 de agosto de 2023',
    },
    text31132211: {
      type: String,
      default: 'Personalizações',
    },
    text: {
      type: String,
      default: 'Dashboard',
    },
    text312: {
      type: String,
      default: '36,12%',
    },
    text311311: {
      type: String,
      default: '32%',
    },
    image_alt33: {
      type: String,
      default: 'image',
    },
    text41: {
      type: String,
      default: 'Média por usuário',
    },
    text92: {
      type: String,
      default: '97,8%',
    },
    text1011: {
      type: String,
      default: '{{data_publicacao}}',
    },
    text913: {
      type: String,
      default: 'Abertos',
    },
    image_src2: {
      type: String,
      default: '/group%202.svg',
    },
    image_alt31: {
      type: String,
      default: 'image',
    },
    image_alt1311: {
      type: String,
      default: 'image',
    },
    text31: {
      type: String,
      default: 'R$ 41.654,78',
    },
    text42: {
      type: String,
      default: 'Personalizações',
    },
    text3113: {
      type: String,
      default: '3786',
    },
    text912: {
      type: String,
      default: 'Bounce',
    },
    text1041: {
      type: String,
      default: 'Empresa 123 realiza treinamentos para prevenção de acidentes',
    },
  },
  components: {
    AppBoto,
  },
}
</script>

<style scoped>
.contedo-dashboard-container {
  width: calc(100% - 300px);
  height: 100vh;
  display: flex;
  overflow: auto;
  position: relative;
  max-width: 1500px;
  margin-left: 300px;
  justify-content: center;
  background-color: F5F5F5;
}
.contedo-dashboard-conteudo {
  width: 100%;
  height: fit-content;
  display: flex;
  padding: 40px 50px;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-dashboard-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.contedo-dashboard-display {
  flex: 0 0 auto;
  width: 40%;
  height: 100px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-dashboard-text {
  color: #FF9F0D;
  font-size: 35px;
}
.contedo-dashboard-actions {
  gap: 10px;
  flex: 0 0 auto;
  width: 45%;
  height: 100px;
  display: flex;
  max-width: 50%;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-dashboard-boto {
  gap: 20px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.contedo-dashboard-conteudo1 {
  gap: 20px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-dashboard-boas-vindas {
  flex: 0 0 auto;
  width: 100%;
  height: 150px;
  display: flex;
  align-self: center;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-start;
  padding-top: 20px;
  padding-left: 50px;
  border-radius: 15px;
  padding-right: 50px;
  flex-direction: column;
  padding-bottom: 20px;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.contedo-dashboard-text02 {
  color: #737373;
  font-size: 40px;
  font-family: "Fivo Sans Medium";
}
.contedo-dashboard-text03 {
  color: #737373;
  font-size: 30px;
  font-family: "Fivo Sans Medium";
}
.contedo-dashboard-kp-is {
  gap: 20px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.contedo-dashboard-container01 {
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.contedo-dashboard-box {
  flex: 0 0 auto;
  width: calc(50% - 10px);
  height: 200px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-end;
  padding-top: 10px;
  padding-left: 20px;
  border-radius: 12px;
  padding-right: 20px;
  flex-direction: column;
  padding-bottom: 10px;
  justify-content: flex-end;
  background-color: var(--dl-color-gray-white);
}
.contedo-dashboard-container02 {
  width: 100%;
  height: 30%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.contedo-dashboard-info {
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-dashboard-text04 {
  color: #FF9F0D;
  align-self: flex-end;
  font-family: "Fivo Sans Modern";
}
.contedo-dashboard-text05 {
  color: #737373;
  width: 100%;
  font-size: 30px;
  align-self: flex-end;
  text-align: right;
  font-family: Russo One;
}
.contedo-dashboard-desempenho {
  flex: 0 0 auto;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
}
.contedo-dashboard-image {
  width: 200px;
  align-self: center;
  object-fit: cover;
}
.contedo-dashboard-container03 {
  flex: 0 0 auto;
  width: 100%;
  height: 65%;
  display: flex;
  align-items: flex-start;
}
.contedo-dashboard-box1 {
  flex: 0 0 auto;
  width: calc(50% - 10px);
  height: 200px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-end;
  padding-top: 10px;
  padding-left: 20px;
  border-radius: 12px;
  padding-right: 20px;
  flex-direction: column;
  padding-bottom: 10px;
  justify-content: flex-end;
  background-color: var(--dl-color-gray-white);
}
.contedo-dashboard-container04 {
  width: 100%;
  height: 30%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.contedo-dashboard-info1 {
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-dashboard-text06 {
  color: #FF9F0D;
  align-self: flex-end;
  font-family: "Fivo Sans Modern";
}
.contedo-dashboard-text07 {
  color: #737373;
  width: 100%;
  font-size: 30px;
  align-self: flex-end;
  text-align: right;
  font-family: Russo One;
}
.contedo-dashboard-desempenho1 {
  flex: 0 0 auto;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
}
.contedo-dashboard-image1 {
  width: 200px;
  align-self: center;
  object-fit: cover;
}
.contedo-dashboard-container05 {
  flex: 0 0 auto;
  width: 100%;
  height: 65%;
  display: flex;
  align-items: flex-start;
}
.contedo-dashboard-container06 {
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.contedo-dashboard-box2 {
  flex: 0 0 auto;
  width: calc(50% - 10px);
  height: 200px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-end;
  padding-top: 10px;
  padding-left: 20px;
  border-radius: 12px;
  padding-right: 20px;
  flex-direction: column;
  padding-bottom: 10px;
  justify-content: flex-end;
  background-color: var(--dl-color-gray-white);
}
.contedo-dashboard-container07 {
  width: 100%;
  height: 30%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.contedo-dashboard-info2 {
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-dashboard-text08 {
  color: #FF9F0D;
  align-self: flex-end;
  font-family: "Fivo Sans Modern";
}
.contedo-dashboard-text09 {
  color: #737373;
  width: 100%;
  font-size: 30px;
  align-self: flex-end;
  text-align: right;
  font-family: Russo One;
}
.contedo-dashboard-desempenho2 {
  flex: 0 0 auto;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
}
.contedo-dashboard-image2 {
  width: 200px;
  align-self: center;
  object-fit: cover;
}
.contedo-dashboard-container08 {
  flex: 0 0 auto;
  width: 100%;
  height: 65%;
  display: flex;
  align-items: flex-start;
}
.contedo-dashboard-box3 {
  flex: 0 0 auto;
  width: calc(50% - 10px);
  height: 200px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-end;
  padding-top: 10px;
  padding-left: 20px;
  border-radius: 12px;
  padding-right: 20px;
  flex-direction: column;
  padding-bottom: 10px;
  justify-content: flex-end;
  background-color: var(--dl-color-gray-white);
}
.contedo-dashboard-container09 {
  width: 100%;
  height: 30%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.contedo-dashboard-info3 {
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-dashboard-text10 {
  color: #FF9F0D;
  align-self: flex-end;
  font-family: "Fivo Sans Modern";
}
.contedo-dashboard-text11 {
  color: #737373;
  width: 100%;
  font-size: 30px;
  align-self: flex-end;
  text-align: right;
  font-family: Russo One;
}
.contedo-dashboard-desempenho3 {
  flex: 0 0 auto;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
}
.contedo-dashboard-image3 {
  width: 200px;
  align-self: center;
  object-fit: cover;
}
.contedo-dashboard-container10 {
  flex: 0 0 auto;
  width: 100%;
  height: 65%;
  display: flex;
  align-items: flex-start;
}
.contedo-dashboard-disparos {
  gap: 20px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.contedo-dashboard-disparos1 {
  flex: 0 0 auto;
  width: calc(50% - 10px);
  height: 100%;
  display: flex;
  padding: 40px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-start;
  border-radius: 15px;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.contedo-dashboard-info4 {
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-dashboard-text12 {
  color: #FF9F0D;
  align-self: flex-start;
  font-family: "Fivo Sans Modern";
}
.contedo-dashboard-text13 {
  color: #737373;
  width: 100%;
  font-size: 16px;
  align-self: flex-start;
  text-align: left;
  font-family: "Fivo Sans Medium";
}
.contedo-dashboard-leads {
  gap: 1%;
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
  flex-direction: row;
}
.contedo-dashboard-novos {
  width: 33%;
  display: flex;
  align-self: flex-start;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-dashboard-text14 {
  color: #737373;
  width: 100%;
  font-size: 16px;
  align-self: flex-start;
  text-align: left;
  font-family: "Fivo Sans Medium";
}
.contedo-dashboard-text15 {
  color: #FF9F0D;
  align-self: flex-start;
  font-family: "Russo One";
}
.contedo-dashboard-retornos {
  width: 33%;
  display: flex;
  align-self: flex-start;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-dashboard-text16 {
  color: #737373;
  width: 100%;
  font-size: 16px;
  align-self: flex-start;
  text-align: left;
  font-family: "Fivo Sans Medium";
}
.contedo-dashboard-text17 {
  color: #FF9F0D;
  align-self: flex-start;
  font-family: "Russo One";
}
.contedo-dashboard-personalizacoes {
  width: 33%;
  display: flex;
  align-self: flex-start;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-dashboard-text18 {
  color: #737373;
  width: 100%;
  font-size: 16px;
  align-self: flex-start;
  text-align: left;
  font-family: "Fivo Sans Medium";
}
.contedo-dashboard-text19 {
  color: #FF9F0D;
  align-self: flex-start;
  font-family: "Russo One";
}
.contedo-dashboard-grafico {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.contedo-dashboard-image4 {
  width: 100%;
  object-fit: cover;
}
.contedo-dashboard-noticias {
  gap: 20px;
  flex: 0 0 auto;
  width: calc(50% - 10px);
  height: 380px;
  display: flex;
  padding: 40px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-start;
  border-radius: 15px;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.contedo-dashboard-info5 {
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
}
.contedo-dashboard-text20 {
  color: #FF9F0D;
  align-self: flex-start;
  font-family: "Fivo Sans Modern";
}
.contedo-dashboard-container11 {
  width: 100%;
  display: flex;
  overflow-x: auto;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-dashboard-news {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.contedo-dashboard-timeline {
  flex: 0 0 auto;
  height: 100%;
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: column;
}
.contedo-dashboard-point {
  flex: 0 0 auto;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 100%;
  justify-content: center;
  background-color: #FF9F0D;
}
.contedo-dashboard-image5 {
  width: 200px;
  object-fit: cover;
}
.contedo-dashboard-line {
  flex: 0 0 auto;
  width: 5px;
  height: calc(100% - 26px);
  display: flex;
  margin-top: -1px;
  align-items: flex-start;
  flex-direction: column;
  background-color: #FF9F0D;
}
.contedo-dashboard-container12 {
  gap: 10px;
  flex: 0 0 auto;
  width: calc(98% - 30px);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-dashboard-text23 {
  margin-bottom: 20px;
}
.contedo-dashboard-news1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.contedo-dashboard-timeline1 {
  flex: 0 0 auto;
  height: 100%;
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: column;
}
.contedo-dashboard-point1 {
  flex: 0 0 auto;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 100%;
  justify-content: center;
  background-color: #FF9F0D;
}
.contedo-dashboard-image6 {
  width: 200px;
  object-fit: cover;
}
.contedo-dashboard-line1 {
  flex: 0 0 auto;
  width: 5px;
  height: calc(100% - 26px);
  display: flex;
  margin-top: -1px;
  align-items: flex-start;
  flex-direction: column;
  background-color: #FF9F0D;
}
.contedo-dashboard-container13 {
  gap: 10px;
  flex: 0 0 auto;
  width: calc(98% - 30px);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-dashboard-text26 {
  margin-bottom: 20px;
}
.contedo-dashboard-news2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.contedo-dashboard-timeline2 {
  flex: 0 0 auto;
  height: 100%;
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: column;
}
.contedo-dashboard-point2 {
  flex: 0 0 auto;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 100%;
  justify-content: center;
  background-color: #FF9F0D;
}
.contedo-dashboard-image7 {
  width: 200px;
  object-fit: cover;
}
.contedo-dashboard-line2 {
  flex: 0 0 auto;
  width: 5px;
  height: calc(100% - 26px);
  display: flex;
  margin-top: -1px;
  align-items: flex-start;
  flex-direction: column;
  background-color: #FF9F0D;
}
.contedo-dashboard-container14 {
  gap: 10px;
  flex: 0 0 auto;
  width: calc(98% - 30px);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-dashboard-text29 {
  margin-bottom: 20px;
}

@media(max-width: 1220px) {
  .contedo-dashboard-display {
    width: 40%%;
  }
  .contedo-dashboard-actions {
    width: 55%;
    height: fit-content;
    max-width: 60%;
  }
  .contedo-dashboard-text05 {
    font-size: 35px;
  }
  .contedo-dashboard-text07 {
    font-size: 35px;
  }
  .contedo-dashboard-text09 {
    font-size: 35px;
  }
  .contedo-dashboard-text11 {
    font-size: 35px;
  }
  .contedo-dashboard-text13 {
    font-size: 35px;
  }
  .contedo-dashboard-text14 {
    font-size: 35px;
  }
  .contedo-dashboard-text16 {
    font-size: 35px;
  }
  .contedo-dashboard-text18 {
    font-size: 35px;
  }
}
@media(max-width: 957px) {
  .contedo-dashboard-conteudo {
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
  }
  .contedo-dashboard-header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .contedo-dashboard-display {
    width: 100%;
  }
  .contedo-dashboard-actions {
    width: 100%;
    max-width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .contedo-dashboard-boto {
    width: fit-content;
  }
}
@media(max-width: 767px) {
  .contedo-dashboard-container {
    width: calc(100% - 67px);
    margin-left: 67px;
  }
}
@media(max-width: 479px) {
  .contedo-dashboard-container {
    width: 100%;
    margin-left: 0px;
  }
  .contedo-dashboard-text05 {
    font-size: 25px;
  }
  .contedo-dashboard-text07 {
    font-size: 25px;
  }
  .contedo-dashboard-text09 {
    font-size: 25px;
  }
  .contedo-dashboard-text11 {
    font-size: 25px;
  }
  .contedo-dashboard-text13 {
    font-size: 25px;
  }
  .contedo-dashboard-text14 {
    font-size: 25px;
  }
  .contedo-dashboard-text16 {
    font-size: 25px;
  }
  .contedo-dashboard-text18 {
    font-size: 25px;
  }
}
</style>
