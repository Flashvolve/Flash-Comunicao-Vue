<template>
  <div class="contedo-dashboard2-container" v-bind:class="rootClassName">
    <div class="contedo-dashboard2-conteudo">
      <div class="contedo-dashboard2-header">
        <div class="contedo-dashboard2-display">
          <span class="titulo">Dashboard</span>
          <span class="subtitulo">Quinta feira, 03 de agosto de 2023</span>
        </div>
        <div class="contedo-dashboard2-actions">
          <div class="contedo-dashboard2-boto"><app-boto></app-boto></div>
          <div class="contedo-dashboard2-drop">
            <div class="contedo-dashboard2-menu">
              <img
                alt="image"
                src="https://api.iconify.design/lucide/calendar-clock.svg?color=%23dc0f37"
                class="contedo-dashboard2-image"
              />
              <span class="contedo-dashboard2-text02 Optionmenu">
                Últimos 2 meses: 01 de maio, 2023 - 01 de agosto, 2023
              </span>
              <img
                alt="image"
                src="https://api.iconify.design/mingcute/down-fill.svg?color=%23dc0f37"
                class="contedo-dashboard2-image01"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="contedo-dashboard2-dashboard">
        <div class="contedo-dashboard2-container01">
          <div class="contedo-dashboard2-metrica">
            <div class="contedo-dashboard2-lead">
              <span class="contedo-dashboard2-text03 dashlead">
                <span class="contedo-dashboard2-text04">Agendamentos</span>
                <br />
              </span>
            </div>
            <div class="contedo-dashboard2-numeros">
              <div class="contedo-dashboard2-esta-semana">
                <div class="contedo-dashboard2-periodo">
                  <span class="contedo-dashboard2-text06">{{ text }}</span>
                </div>
                <div class="contedo-dashboard2-numeros1">
                  <div class="contedo-dashboard2-agendamentos">
                    <span class="contedo-dashboard2-text07 metrica">28</span>
                    <span class="contedo-dashboard2-text08 metrica">
                      AGENDAMENTOS
                    </span>
                  </div>
                  <div class="contedo-dashboard2-container02">
                    <img
                      alt="image"
                      src="https://api.iconify.design/bxs/bar-chart-alt-2.svg?color=%2300a89c"
                      class="contedo-dashboard2-image02"
                    />
                  </div>
                </div>
                <div class="contedo-dashboard2-container03"></div>
                <span class="contedo-dashboard2-text09">
                  <span class="contedo-dashboard2-text10">+ 23%</span>
                  <br />
                </span>
              </div>
              <div class="contedo-dashboard2-ultima-semana">
                <div class="contedo-dashboard2-periodo1">
                  <span class="contedo-dashboard2-text12">{{ text3 }}</span>
                </div>
                <div class="contedo-dashboard2-numeros2">
                  <div class="contedo-dashboard2-agendamentos1">
                    <span class="contedo-dashboard2-text13 metrica">23</span>
                    <span class="contedo-dashboard2-text14 metrica">
                      AGENDAMENTOS
                    </span>
                  </div>
                  <div class="contedo-dashboard2-container04">
                    <img
                      alt="image"
                      src="https://api.iconify.design/bxs/bar-chart-alt-2.svg?color=%23dc0f37"
                      class="contedo-dashboard2-image03"
                    />
                  </div>
                </div>
                <div class="contedo-dashboard2-container05"></div>
                <span class="contedo-dashboard2-text15">
                  <span class="contedo-dashboard2-text16">- 3%</span>
                  <br />
                </span>
              </div>
              <div class="contedo-dashboard2-ultimo-mes">
                <div class="contedo-dashboard2-periodo2">
                  <span class="contedo-dashboard2-text18">{{ text32 }}</span>
                </div>
                <div class="contedo-dashboard2-numeros3">
                  <div class="contedo-dashboard2-agendamentos2">
                    <span class="contedo-dashboard2-text19 metrica">68</span>
                    <span class="contedo-dashboard2-text20 metrica">
                      AGENDAMENTOS
                    </span>
                  </div>
                  <div class="contedo-dashboard2-container06">
                    <img
                      alt="image"
                      src="https://api.iconify.design/bxs/bar-chart-alt-2.svg?color=%2300a89c"
                      class="contedo-dashboard2-image04"
                    />
                  </div>
                </div>
                <div class="contedo-dashboard2-container07"></div>
                <span class="contedo-dashboard2-text21">
                  <span class="contedo-dashboard2-text22">+ 17%</span>
                  <br />
                </span>
              </div>
              <div class="contedo-dashboard2-mes-passado">
                <div class="contedo-dashboard2-periodo3">
                  <span class="contedo-dashboard2-text24">{{ text321 }}</span>
                </div>
                <div class="contedo-dashboard2-numeros4">
                  <div class="contedo-dashboard2-agendamentos3">
                    <span class="contedo-dashboard2-text25 metrica">85</span>
                    <span class="contedo-dashboard2-text26 metrica">
                      AGENDAMENTOS
                    </span>
                  </div>
                  <div class="contedo-dashboard2-container08">
                    <img
                      alt="image"
                      src="https://api.iconify.design/bxs/bar-chart-alt-2.svg?color=%2300a89c"
                      class="contedo-dashboard2-image05"
                    />
                  </div>
                </div>
                <div class="contedo-dashboard2-container09"></div>
                <span class="contedo-dashboard2-text27">
                  <span class="contedo-dashboard2-text28">+ 23%</span>
                  <br />
                </span>
              </div>
            </div>
          </div>
          <div class="contedo-dashboard2-agendamentos4">
            <span class="contedo-dashboard2-text30 dashlead">
              <span class="contedo-dashboard2-text31">Reuniões</span>
              <br />
            </span>
            <div class="contedo-dashboard2-agendados">
              <span class="contedo-dashboard2-text33">{{ text6 }}</span>
              <span class="contedo-dashboard2-text34">{{ text61 }}</span>
              <span class="contedo-dashboard2-text35">{{ text611 }}</span>
            </div>
            <div class="contedo-dashboard2-barrafundo">
              <div class="contedo-dashboard2-progresso"></div>
            </div>
            <div class="contedo-dashboard2-status">
              <img
                alt="image"
                src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695141867/d1caokjvqllbn3uweqim.svg"
                class="contedo-dashboard2-image06"
              />
              <div class="contedo-dashboard2-texto-status">
                <span class="contedo-dashboard2-text36 dashlead">
                  O seu resultado até o momento comparado a empresas do mesmo
                  segmento está: Acima da meta
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="contedo-dashboard2-container10">
          <div class="contedo-dashboard2-resultados">
            <div class="contedo-dashboard2-economia">
              <div class="contedo-dashboard2-numeros5">
                <span class="dashlead">Você economizou até o momento</span>
                <span class="contedo-dashboard2-text38">{{ text31 }}</span>
                <div class="contedo-dashboard2-container11">
                  <img
                    alt="image"
                    src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
                    class="contedo-dashboard2-image07"
                  />
                  <span class="contedo-dashboard2-text39">{{ text312 }}</span>
                </div>
                <div class="contedo-dashboard2-container12">
                  <span class="contedo-dashboard2-text40 subtitulo">
                    Atualizado hoje, às 10h56
                  </span>
                </div>
              </div>
              <div class="contedo-dashboard2-grafico">
                <img
                  alt="image"
                  src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695067451/kfnw8qw8iuorqruwhwnv.svg"
                  class="contedo-dashboard2-image08"
                />
              </div>
            </div>
          </div>
          <div class="contedo-dashboard2-prospectos">
            <div class="contedo-dashboard2-reunioes">
              <div class="contedo-dashboard2-lead1">
                <span class="contedo-dashboard2-text41 dashlead">
                  {{ text7 }}
                </span>
              </div>
              <div class="contedo-dashboard2-reuniao1">
                <div class="contedo-dashboard2-image09">
                  <img
                    alt="image"
                    src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                    class="contedo-dashboard2-image10"
                  />
                </div>
                <div class="contedo-dashboard2-cliente1">
                  <span class="contedo-dashboard2-text42 dashlead">
                    Reunião Libbs
                  </span>
                  <span class="contedo-dashboard2-text43 subtitulo">
                    09/08/2023 | Das 9h às 10h | online
                  </span>
                </div>
              </div>
              <div class="contedo-dashboard2-reuniao2">
                <div class="contedo-dashboard2-image11">
                  <img
                    alt="image"
                    src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                    class="contedo-dashboard2-image12"
                  />
                </div>
                <div class="contedo-dashboard2-client2">
                  <span class="contedo-dashboard2-text44 dashlead">
                    Reunião Ultrafarma
                  </span>
                  <span class="contedo-dashboard2-text45 subtitulo">
                    10/08/2023 | Das 9h às 12h | online
                  </span>
                </div>
              </div>
              <div class="contedo-dashboard2-reuniao21">
                <div class="contedo-dashboard2-image13">
                  <img
                    alt="image"
                    src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                    class="contedo-dashboard2-image14"
                  />
                </div>
                <div class="contedo-dashboard2-client21">
                  <span class="contedo-dashboard2-text46 dashlead">
                    Reunião Neo Química
                  </span>
                  <span class="contedo-dashboard2-text47 subtitulo">
                    10/08/2023 | Das 9h às 12h | online
                  </span>
                </div>
              </div>
              <div class="contedo-dashboard2-reuniao22">
                <div class="contedo-dashboard2-image15">
                  <img
                    alt="image"
                    src="https://api.iconify.design/mdi/bell.svg?color=%23dc0f37"
                    class="contedo-dashboard2-image16"
                  />
                </div>
                <div class="contedo-dashboard2-client22">
                  <span class="contedo-dashboard2-text48 dashlead">
                    Reunião Hypera Pharma
                  </span>
                  <span class="contedo-dashboard2-text49 subtitulo">
                    10/08/2023 | Das 9h às 12h | online
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
  name: 'ContedoDashboard2',
  props: {
    text321: {
      type: String,
      default: 'Último mês',
    },
    rootClassName: String,
    text61: {
      type: String,
      default: 'de',
    },
    text31: {
      type: String,
      default: 'R$ 41.654,78',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    text32: {
      type: String,
      default: 'Esse mês',
    },
    text7: {
      type: String,
      default: 'Próximas reuniões',
    },
    text312: {
      type: String,
      default: '36,12%',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    text1: {
      type: String,
      default: 'de 20/07/2023 a 27/07/2023',
    },
    text2: {
      type: String,
      default: 'Última semana',
    },
    rootClassName11: String,
    image_src1: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text3: {
      type: String,
      default: 'Última semana',
    },
    text: {
      type: String,
      default: 'Esta semana',
    },
    rootClassName1: String,
    image_src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text611: {
      type: String,
      default: '240',
    },
    text6: {
      type: String,
      default: '168',
    },
  },
  components: {
    AppBoto,
  },
}
</script>

<style scoped>
.contedo-dashboard2-container {
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
.contedo-dashboard2-conteudo {
  width: 100%;
  height: fit-content;
  display: flex;
  padding: 40px 50px;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-dashboard2-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.contedo-dashboard2-display {
  flex: 0 0 auto;
  width: 40%;
  height: 100px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-dashboard2-actions {
  gap: 10px;
  flex: 0 0 auto;
  width: 45%;
  height: 100px;
  display: flex;
  max-width: 50%;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-dashboard2-boto {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.contedo-dashboard2-drop {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.contedo-dashboard2-menu {
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  display: flex;
  max-width: 525pxpx;
  align-items: flex-start;
  border-color: #dc0f37;
  border-width: 1px;
  border-radius: 10px;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.contedo-dashboard2-image {
  height: 70%;
  align-self: center;
  object-fit: cover;
  margin-left: 20px;
}
.contedo-dashboard2-text02 {
  color: rgb(115, 115, 115);
  width: 100%;
  overflow: hidden;
  font-size: 16px;
  align-self: center;
  margin-top: 2px;
  margin-left: 15PX;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.contedo-dashboard2-image01 {
  height: 50%;
  align-self: center;
  object-fit: cover;
  justify-self: flex-end;
  margin-right: 20px;
}
.contedo-dashboard2-dashboard {
  gap: 20px;
  width: 100%;
  display: flex;
  margin-top: 40px;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-dashboard2-container01 {
  gap: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.contedo-dashboard2-metrica {
  flex: 0 0 auto;
  width: 60%;
  height: auto;
  display: flex;
  padding: 30px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-start;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.contedo-dashboard2-lead {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-dashboard2-text03 {
  color: #dc0f37;
  font-size: 20px;
  align-self: flex-start;
  text-align: right;
  font-family: Fivo Sans Medium;
}
.contedo-dashboard2-text04 {
  align-self: flex-start;
  text-align: right;
}
.contedo-dashboard2-numeros {
  gap: 20px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
  justify-content: flex-start;
}
.contedo-dashboard2-esta-semana {
  gap: 10px;
  flex: 0 0 auto;
  width: 23%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.contedo-dashboard2-periodo {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.contedo-dashboard2-text06 {
  color: #737373;
  font-size: 18px;
  font-family: Fivo Sans Medium;
}
.contedo-dashboard2-numeros1 {
  width: 70%%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.contedo-dashboard2-agendamentos {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-dashboard2-text07 {
  color: #737373;
  font-size: 68px;
  margin-top: -10px;
}
.contedo-dashboard2-text08 {
  color: var(--dl-color-gray-black);
  font-size: 10px;
  margin-top: -10PX;
}
.contedo-dashboard2-container02 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-dashboard2-image02 {
  width: 25px;
  object-fit: cover;
  margin-left: 5px;
}
.contedo-dashboard2-container03 {
  width: 75%;
  border: 2px rgba(120, 120, 120, 0.4);
  height: 2px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  background-color: #737373;
}
.contedo-dashboard2-text09 {
  color: #00A89C;
  font-family: Russo One;
}
.contedo-dashboard2-ultima-semana {
  gap: 10px;
  flex: 0 0 auto;
  width: 23%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.contedo-dashboard2-periodo1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.contedo-dashboard2-text12 {
  color: #737373;
  font-size: 18px;
  font-family: Fivo Sans Medium;
}
.contedo-dashboard2-numeros2 {
  width: 70%%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.contedo-dashboard2-agendamentos1 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-dashboard2-text13 {
  color: #737373;
  font-size: 68px;
  margin-top: -10px;
}
.contedo-dashboard2-text14 {
  color: var(--dl-color-gray-black);
  font-size: 10px;
  margin-top: -10PX;
}
.contedo-dashboard2-container04 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-dashboard2-image03 {
  width: 25px;
  object-fit: cover;
  margin-left: 5px;
}
.contedo-dashboard2-container05 {
  width: 75%;
  border: 2px rgba(120, 120, 120, 0.4);
  height: 2px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  background-color: #737373;
}
.contedo-dashboard2-text15 {
  color: #dc0f37;
  font-family: Russo One;
}
.contedo-dashboard2-ultimo-mes {
  gap: 10px;
  flex: 0 0 auto;
  width: 23%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.contedo-dashboard2-periodo2 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.contedo-dashboard2-text18 {
  color: #737373;
  font-size: 18px;
  font-family: Fivo Sans Medium;
}
.contedo-dashboard2-numeros3 {
  width: 70%%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.contedo-dashboard2-agendamentos2 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-dashboard2-text19 {
  color: #737373;
  font-size: 68px;
  margin-top: -10px;
}
.contedo-dashboard2-text20 {
  color: var(--dl-color-gray-black);
  font-size: 10px;
  margin-top: -10PX;
}
.contedo-dashboard2-container06 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-dashboard2-image04 {
  width: 25px;
  object-fit: cover;
  margin-left: 5px;
}
.contedo-dashboard2-container07 {
  width: 75%;
  border: 2px rgba(120, 120, 120, 0.4);
  height: 2px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  background-color: #737373;
}
.contedo-dashboard2-text21 {
  color: rgb(0, 168, 156);
  font-family: Russo One;
}
.contedo-dashboard2-mes-passado {
  gap: 10px;
  flex: 0 0 auto;
  width: 23%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.contedo-dashboard2-periodo3 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.contedo-dashboard2-text24 {
  color: #737373;
  font-size: 18px;
  font-family: Fivo Sans Medium;
}
.contedo-dashboard2-numeros4 {
  width: 70%%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.contedo-dashboard2-agendamentos3 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-dashboard2-text25 {
  color: #737373;
  font-size: 68px;
  margin-top: -10px;
}
.contedo-dashboard2-text26 {
  color: var(--dl-color-gray-black);
  font-size: 10px;
  margin-top: -10PX;
}
.contedo-dashboard2-container08 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-dashboard2-image05 {
  width: 25px;
  object-fit: cover;
  margin-left: 5px;
}
.contedo-dashboard2-container09 {
  width: 75%;
  border: 2px rgba(120, 120, 120, 0.4);
  height: 2px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  background-color: #737373;
}
.contedo-dashboard2-text27 {
  color: rgb(0, 168, 156);
  font-family: Russo One;
}
.contedo-dashboard2-agendamentos4 {
  gap: 10px;
  width: calc(40% - 20px);
  height: 235px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  padding-top: 30px;
  padding-left: 30px;
  border-radius: 15px;
  padding-right: 30px;
  flex-direction: column;
  padding-bottom: 30px;
  background-color: var(--dl-color-gray-white);
}
.contedo-dashboard2-text30 {
  color: #dc0f37;
  font-size: 18px;
  align-self: flex-start;
  font-family: Fivo Sans Medium;
}
.contedo-dashboard2-text31 {
  align-self: flex-start;
}
.contedo-dashboard2-agendados {
  gap: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.contedo-dashboard2-text33 {
  color: #656565;
  font-size: 20px;
  font-family: Russo One;
}
.contedo-dashboard2-text34 {
  color: #dadada;
  font-size: 20px;
  font-family: Russo One;
}
.contedo-dashboard2-text35 {
  color: #DADADA;
  font-size: 20px;
  font-family: Russo One;
}
.contedo-dashboard2-barrafundo {
  flex: 0 0 auto;
  width: 100%;
  height: 15px;
  display: flex;
  align-items: flex-start;
  border-radius: 15px;
  background-color: #E4E4E4;
}
.contedo-dashboard2-progresso {
  flex: 0 0 auto;
  width: 70%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  border-radius: 15px;
  background-color: #dc0f37;
}
.contedo-dashboard2-status {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.contedo-dashboard2-image06 {
  width: 75px;
  object-fit: cover;
}
.contedo-dashboard2-texto-status {
  display: flex;
  position: relative;
}
.contedo-dashboard2-text36 {
  color: #737373;
  font-size: 16px;
  text-align: left;
  font-family: Fivo Sans Medium;
  padding-left: 20px;
}
.contedo-dashboard2-container10 {
  gap: 20px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.contedo-dashboard2-resultados {
  flex: 0 0 auto;
  width: 60%;
  height: 400px;
  display: flex;
  padding: 40px;
  flex-grow: 1;
  min-width: 60%;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  border-radius: 15px;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.contedo-dashboard2-economia {
  gap: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.contedo-dashboard2-numeros5 {
  width: 65%;
  display: flex;
  align-items: flex-start;
  padding-top: 0px;
  padding-right: 0px;
  flex-direction: column;
  padding-bottom: 0px;
  justify-content: flex-end;
}
.contedo-dashboard2-text38 {
  color: #737373;
  width: 100%;
  font-size: 50px;
  align-self: flex-end;
  text-align: right;
  font-family: Russo One;
  padding-top: 10px;
}
.contedo-dashboard2-container11 {
  width: 100%;
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.contedo-dashboard2-image07 {
  width: 35px;
  object-fit: cover;
}
.contedo-dashboard2-text39 {
  color: #00A89C;
  font-size: 25px;
  align-self: center;
  text-align: right;
  font-family: Russo One;
}
.contedo-dashboard2-container12 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: flex-end;
  align-items: center;
  padding-top: 10px;
  justify-content: flex-end;
}
.contedo-dashboard2-text40 {
  color: #737373;
  font-size: 18px;
  font-family: Fivo Sans Medium;
}
.contedo-dashboard2-grafico {
  width: 35%;
  height: 100%;
  display: flex;
}
.contedo-dashboard2-image08 {
  width: 100%;
  max-width: 200px;
  justify-content: center;
}
.contedo-dashboard2-prospectos {
  gap: 20px;
  width: 40%;
  height: 399px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.contedo-dashboard2-reunioes {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 30px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-white);
}
.contedo-dashboard2-lead1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.contedo-dashboard2-text41 {
  color: #dc0f37;
  font-size: 20px;
  font-family: Fivo Sans Medium;
}
.contedo-dashboard2-reuniao1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
}
.contedo-dashboard2-image09 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: flex-start;
}
.contedo-dashboard2-image10 {
  width: 35px;
  object-fit: cover;
}
.contedo-dashboard2-cliente1 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  align-items: flex-start;
  padding-left: 20px;
  flex-direction: column;
}
.contedo-dashboard2-text42 {
  color: #737373;
  align-self: flex-start;
}
.contedo-dashboard2-text43 {
  color: #737373;
  font-size: 14px;
  margin-top: 10px;
}
.contedo-dashboard2-reuniao2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
}
.contedo-dashboard2-image11 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: flex-start;
}
.contedo-dashboard2-image12 {
  width: 35px;
  object-fit: cover;
}
.contedo-dashboard2-client2 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  align-items: flex-start;
  padding-left: 20px;
  flex-direction: column;
}
.contedo-dashboard2-text44 {
  color: #737373;
  align-self: flex-start;
}
.contedo-dashboard2-text45 {
  color: #737373;
  font-size: 14px;
  margin-top: 10px;
}
.contedo-dashboard2-reuniao21 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
}
.contedo-dashboard2-image13 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: flex-start;
}
.contedo-dashboard2-image14 {
  width: 35px;
  object-fit: cover;
}
.contedo-dashboard2-client21 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  align-items: flex-start;
  padding-left: 20px;
  flex-direction: column;
}
.contedo-dashboard2-text46 {
  color: #737373;
  align-self: flex-start;
}
.contedo-dashboard2-text47 {
  color: #737373;
  font-size: 14px;
  margin-top: 10px;
}
.contedo-dashboard2-reuniao22 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
}
.contedo-dashboard2-image15 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: flex-start;
}
.contedo-dashboard2-image16 {
  width: 35px;
  object-fit: cover;
}
.contedo-dashboard2-client22 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  align-items: flex-start;
  padding-left: 20px;
  flex-direction: column;
}
.contedo-dashboard2-text48 {
  color: #737373;
  align-self: flex-start;
}
.contedo-dashboard2-text49 {
  color: #737373;
  font-size: 14px;
  margin-top: 10px;
}

@media(max-width: 1440px) {
  .contedo-dashboard2-metrica {
    width: 60%;
    height: 100%;
  }
  .contedo-dashboard2-image02 {
    align-self: flex-end;
  }
  .contedo-dashboard2-text09 {
    color: rgb(0, 168, 156);
    font-size: 10px;
    text-align: left;
    font-family: Russo One;
  }
  .contedo-dashboard2-text10 {
    align-self: flex-end;
  }
  .contedo-dashboard2-image03 {
    align-self: flex-end;
  }
  .contedo-dashboard2-text15 {
    color: rgb(0, 168, 156);
    font-size: 10px;
    text-align: left;
    font-family: Russo One;
  }
  .contedo-dashboard2-text16 {
    align-self: flex-end;
  }
  .contedo-dashboard2-image04 {
    align-self: flex-end;
  }
  .contedo-dashboard2-text21 {
    color: rgb(0, 168, 156);
    font-size: 10px;
    text-align: left;
    font-family: Russo One;
  }
  .contedo-dashboard2-text22 {
    align-self: flex-end;
  }
  .contedo-dashboard2-image05 {
    align-self: flex-end;
  }
  .contedo-dashboard2-text27 {
    color: rgb(0, 168, 156);
    font-size: 10px;
    text-align: left;
    font-family: Russo One;
  }
  .contedo-dashboard2-text28 {
    align-self: flex-end;
  }
  .contedo-dashboard2-agendamentos4 {
    height: auto;
  }
  .contedo-dashboard2-progresso {
    width: 70%;
  }
  .contedo-dashboard2-text46 {
    color: rgb(115, 115, 115);
  }
  .contedo-dashboard2-text48 {
    color: rgb(115, 115, 115);
  }
}
@media(max-width: 1220px) {
  .contedo-dashboard2-display {
    width: 40%%;
  }
  .contedo-dashboard2-actions {
    width: 55%;
    height: fit-content;
    max-width: 60%;
  }
  .contedo-dashboard2-text02 {
    font-size: 14px;
  }
  .contedo-dashboard2-numeros {
    gap: 15px;
  }
  .contedo-dashboard2-text06 {
    font-size: 16px;
  }
  .contedo-dashboard2-numeros1 {
    gap: 5px;
    flex-direction: column;
  }
  .contedo-dashboard2-text07 {
    font-size: 55px;
  }
  .contedo-dashboard2-image02 {
    margin-left: 0;
  }
  .contedo-dashboard2-text09 {
    font-size: 14px;
  }
  .contedo-dashboard2-text12 {
    font-size: 16px;
  }
  .contedo-dashboard2-numeros2 {
    gap: 5px;
    flex-direction: column;
  }
  .contedo-dashboard2-text13 {
    font-size: 55px;
  }
  .contedo-dashboard2-image03 {
    margin-left: 0;
  }
  .contedo-dashboard2-text15 {
    font-size: 14px;
  }
  .contedo-dashboard2-text18 {
    font-size: 16px;
  }
  .contedo-dashboard2-numeros3 {
    gap: 5px;
    flex-direction: column;
  }
  .contedo-dashboard2-text19 {
    font-size: 55px;
  }
  .contedo-dashboard2-image04 {
    margin-left: 0;
  }
  .contedo-dashboard2-text21 {
    font-size: 14;
  }
  .contedo-dashboard2-text24 {
    font-size: 16px;
  }
  .contedo-dashboard2-numeros4 {
    gap: 5px;
    flex-direction: column;
  }
  .contedo-dashboard2-text25 {
    font-size: 55px;
  }
  .contedo-dashboard2-image05 {
    margin-left: 00;
  }
  .contedo-dashboard2-text27 {
    font-size: 14px;
  }
  .contedo-dashboard2-texto-status {
    font-size: 16px;
  }
  .contedo-dashboard2-text36 {
    color: #737373;
    font-size: 18px;
    font-family: Fivo Sans Medium;
    padding-left: 20px;
  }
  .contedo-dashboard2-text38 {
    font-size: 35px;
  }
  .contedo-dashboard2-text39 {
    font-size: 20px;
  }
  .contedo-dashboard2-text40 {
    font-size: 14px;
  }
  .contedo-dashboard2-cliente1 {
    padding-left: 15;
  }
  .contedo-dashboard2-client2 {
    padding-left: 15;
  }
  .contedo-dashboard2-client21 {
    padding-left: 15;
  }
  .contedo-dashboard2-client22 {
    padding-left: 15;
  }
}
@media(max-width: 957px) {
  .contedo-dashboard2-conteudo {
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
  }
  .contedo-dashboard2-header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .contedo-dashboard2-display {
    width: 100%;
  }
  .contedo-dashboard2-actions {
    width: 100%;
    max-width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .contedo-dashboard2-boto {
    width: fit-content;
  }
  .contedo-dashboard2-drop {
    width: fit-content;
  }
  .contedo-dashboard2-text02 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .contedo-dashboard2-dashboard {
    display: flex;
    flex-direction: column;
  }
  .contedo-dashboard2-metrica {
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
  }
  .contedo-dashboard2-numeros {
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
  }
  .contedo-dashboard2-esta-semana {
    width: 45%;
  }
  .contedo-dashboard2-numeros1 {
    flex-direction: row;
  }
  .contedo-dashboard2-ultima-semana {
    width: 45%;
  }
  .contedo-dashboard2-numeros2 {
    flex-direction: row;
  }
  .contedo-dashboard2-ultimo-mes {
    width: 45%;
  }
  .contedo-dashboard2-numeros3 {
    flex-direction: row;
  }
  .contedo-dashboard2-mes-passado {
    width: 45%;
  }
  .contedo-dashboard2-numeros4 {
    flex-direction: row;
  }
  .contedo-dashboard2-agendamentos4 {
    height: 355px;
  }
  .contedo-dashboard2-container10 {
    flex-direction: column;
  }
  .contedo-dashboard2-resultados {
    width: 100%;
    height: fit-content;
    justify-content: flex-start;
  }
  .contedo-dashboard2-prospectos {
    width: 100%;
  }
}
@media(max-width: 767px) {
  .contedo-dashboard2-container {
    width: calc(100% - 67px);
    margin-left: 67px;
  }
  .contedo-dashboard2-text36 {
    font-size: 16px;
  }
}
@media(max-width: 479px) {
  .contedo-dashboard2-container {
    width: 100%;
    margin-left: 0px;
  }
  .contedo-dashboard2-menu {
    max-width: 200px;
  }
  .contedo-dashboard2-text02 {
    max-width: 140px;
  }
  .contedo-dashboard2-container01 {
    flex-direction: column;
  }
  .contedo-dashboard2-metrica {
    width: 100%;
  }
  .contedo-dashboard2-text13 {
    color: rgb(115, 115, 115);
    font-size: 55px;
  }
  .contedo-dashboard2-agendamentos4 {
    width: 100%;
    height: fit-content;
  }
  .contedo-dashboard2-economia {
    gap: 15px;
  }
  .contedo-dashboard2-numeros5 {
    width: 60%;
  }
  .contedo-dashboard2-text38 {
    font-size: 25px;
  }
  .contedo-dashboard2-grafico {
    width: 40%;
  }
}
</style>
