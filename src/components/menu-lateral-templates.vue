<template>
  <div class="menu-lateral-templates-container" v-bind:class="rootClassName">
    <logo-menu-templates
      rootClassName="logo-menu-templates-root-class-name"
    ></logo-menu-templates>
    <div class="menu-lateral-templates-barra">
      <div class="menu-lateral-templates-templates">
        <div class="menu-lateral-templates-paginas">
          <div class="menu-lateral-templates-title-section">
            <div class="menu-lateral-templates-container1 hover-menu-button">
              <button type="button" class="menu-lateral-templates-botao-menu">
                <span class="menu-lateral-templates-text">{{ Paginas }}</span>
              </button>
            </div>
          </div>
          <div class="menu-lateral-templates-content-section">
            <div
              id="teste123"
              class="menu-lateral-templates-login hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu01">
                <span class="menu-lateral-templates-text01">{{ Login }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-cadastro hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu02">
                <span class="menu-lateral-templates-text02">{{ Cadastro }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-recuperar-senha hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu03">
                <span class="menu-lateral-templates-text03">
                  {{ RecuperarSenha }}
                </span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-funil-de-vendas hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu04">
                <span class="menu-lateral-templates-text04">{{ Funis }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-recuperar-senha1 hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu05">
                <span class="menu-lateral-templates-text05">{{ Pesquisa }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="menu-lateral-templates-navegao">
          <div class="menu-lateral-templates-title-section1">
            <div class="menu-lateral-templates-container2 hover-menu-button">
              <button type="button" class="menu-lateral-templates-botao-menu06">
                <span class="menu-lateral-templates-text06">{{ Navegacao }}</span>
              </button>
            </div>
          </div>
          <div class="menu-lateral-templates-content-section1">
            <div
              id="teste123"
              class="menu-lateral-templates-headers hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu07">
                <span class="menu-lateral-templates-text07">{{ Headers }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-sidebars hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu08">
                <span class="menu-lateral-templates-text08">{{ Sidebars }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-footers hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu09">
                <span class="menu-lateral-templates-text09">{{ Footers }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="menu-lateral-templates-sees">
          <div class="menu-lateral-templates-title-section2">
            <div class="menu-lateral-templates-container3 hover-menu-button">
              <button type="button" class="menu-lateral-templates-botao-menu10">
                <span class="menu-lateral-templates-text10">{{ Secoes }}</span>
              </button>
            </div>
          </div>
          <div class="menu-lateral-templates-content-section2">
            <div
              id="teste123"
              class="menu-lateral-templates-hero hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu11">
                <span class="menu-lateral-templates-text11">{{ Hero }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-banners hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu12">
                <span class="menu-lateral-templates-text12">{{ Banners }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-features hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu13">
                <span class="menu-lateral-templates-text13">{{ Features }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-preos hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu14">
                <span class="menu-lateral-templates-text14">{{ Price }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-galerias hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu15">
                <span class="menu-lateral-templates-text15">{{ Galerias }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-depoimentos hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu16">
                <span class="menu-lateral-templates-text16">
                  {{ Depoimentos }}
                </span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-steps hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu17">
                <span class="menu-lateral-templates-text17">{{ Steps }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-midias hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu18">
                <span class="menu-lateral-templates-text18">
                  {{ MidiasSociais }}
                </span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-status hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu19">
                <span class="menu-lateral-templates-text19">{{ Satatus }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="menu-lateral-templates-elementos">
          <div class="menu-lateral-templates-title-section3">
            <div class="menu-lateral-templates-container4 hover-menu-button">
              <button type="button" class="menu-lateral-templates-botao-menu20">
                <span class="menu-lateral-templates-text20">{{ Elementos }}</span>
              </button>
            </div>
          </div>
          <div class="menu-lateral-templates-content-section3">
            <div
              id="teste123"
              class="menu-lateral-templates-textos hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu21">
                <span class="menu-lateral-templates-text21">{{ Textos }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-botoes hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu22">
                <span class="menu-lateral-templates-text22">{{ Botoes }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-nav-menus hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu23">
                <span class="menu-lateral-templates-text23">{{ MenusNav }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-icones hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu24">
                <span class="menu-lateral-templates-text24">{{ Icones }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-dropdowns hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu25">
                <span class="menu-lateral-templates-text25">{{ Dropdowns }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-cards hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu26">
                <span class="menu-lateral-templates-text26">{{ Cards }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-timelines hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu27">
                <span class="menu-lateral-templates-text27">{{ Timelines }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-listas hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu28">
                <span class="menu-lateral-templates-text28">{{ Listas }}</span>
              </button>
            </div>
            <div
              id="teste123"
              class="menu-lateral-templates-tabelas hover-menu-button"
            >
              <button type="button" class="menu-lateral-templates-botao-menu29">
                <span class="menu-lateral-templates-text29">{{ Tabelas }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-lateral-templates-contentbotton">
        <div class="menu-lateral-templates-acount">
          <configuraes-templates
            rootClassName="configuraes-templates-root-class-name"
          ></configuraes-templates>
        </div>
        <profile-templates
          rootClassName="profile-templates-root-class-name"
        ></profile-templates>
      </div>
    </div>
  </div>
</template>

<script>
import LogoMenuTemplates from './logo-menu-templates'
import ConfiguraesTemplates from './configuraes-templates'
import ProfileTemplates from './profile-templates'

export default {
  name: 'MenuLateralTemplates',
  props: {
    Pesquisa: {
      type: String,
      default: 'Pesquisas',
    },
    rootClassName4: String,
    Elementos: {
      type: String,
      default: 'Elementos',
    },
    rootClassName4111111: String,
    rootClassName321: String,
    rootClassName4111: String,
    rootClassName4111131111111: String,
    rootClassName41111: String,
    rootClassName12: String,
    rootClassName412: String,
    rootClassName121: String,
    rootClassName422: String,
    Paginas: {
      type: String,
      default: 'Páginas',
    },
    Sidebars: {
      type: String,
      default: 'Sidebars',
    },
    rootClassName11: String,
    Headers: {
      type: String,
      default: 'Headers',
    },
    rootClassName411113111: String,
    rootClassName3: String,
    Satatus: {
      type: String,
      default: 'Status',
    },
    Features: {
      type: String,
      default: 'Features',
    },
    Funis: {
      type: String,
      default: 'Funil de vendas',
    },
    MenusNav: {
      type: String,
      default: 'Menus de navegação',
    },
    rootClassName41: String,
    rootClassName41111111: String,
    rootClassName41111311111: String,
    rootClassName42: String,
    rootClassName4111141: String,
    Botoes: {
      type: String,
      default: 'Botões',
    },
    rootClassName4111132: String,
    rootClassName32: String,
    rootClassName4112: String,
    rootClassName43: String,
    Price: {
      type: String,
      default: 'Precificação',
    },
    RecuperarSenha: {
      type: String,
      default: 'Recuperar Senha',
    },
    rootClassName411111: String,
    rootClassName1: String,
    Cadastro: {
      type: String,
      default: 'Cadastro',
    },
    rootClassName411112: String,
    Banners: {
      type: String,
      default: 'Banners',
    },
    rootClassName41131: String,
    rootClassName4113: String,
    Dropdowns: {
      type: String,
      default: 'Dropdowns',
    },
    Icones: {
      type: String,
      default: 'Ícones',
    },
    Depoimentos: {
      type: String,
      default: 'Depoimentos',
    },
    rootClassName4111131111: String,
    rootClassName411113: String,
    rootClassName22: String,
    Cards: {
      type: String,
      default: 'Cards',
    },
    rootClassName41111311: String,
    rootClassName31: String,
    Tabelas: {
      type: String,
      default: 'Tabelas',
    },
    Steps: {
      type: String,
      default: 'Steps',
    },
    Timelines: {
      type: String,
      default: 'Timelines',
    },
    rootClassName411: String,
    Login: {
      type: String,
      default: 'Login',
    },
    rootClassName: String,
    rootClassName2: String,
    rootClassName411113111111: String,
    rootClassName421: String,
    Listas: {
      type: String,
      default: 'Listas',
    },
    rootClassName221: String,
    Hero: {
      type: String,
      default: 'Hero Sections',
    },
    rootClassName411114: String,
    rootClassName21: String,
    Footers: {
      type: String,
      default: 'Footers',
    },
    rootClassName4111131: String,
    Secoes: {
      type: String,
      default: 'Seções',
    },
    MidiasSociais: {
      type: String,
      default: 'Mídias Sociais',
    },
    Navegacao: {
      type: String,
      default: 'Navegação',
    },
    rootClassName41111311111111: String,
    rootClassName41112: String,
    Galerias: {
      type: String,
      default: 'Galerias',
    },
    Textos: {
      type: String,
      default: 'Textos',
    },
  },
  components: {
    LogoMenuTemplates,
    ConfiguraesTemplates,
    ProfileTemplates,
  },
}
</script>

<style scoped>
.menu-lateral-templates-container {
  width: 300px;
  height: 100%;
  display: flex;
  position: absolute;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--dl-color-gray-black);
}
.menu-lateral-templates-barra {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 70px 25px 35px;
  overflow: auto;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.menu-lateral-templates-templates {
  width: 100%;
  margin-top: 30px;
}
.menu-lateral-templates-paginas {
  width: 100%;
}
.menu-lateral-templates-title-section {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.menu-lateral-templates-container1 {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
}
.menu-lateral-templates-botao-menu {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text {
  color: #fccf00;
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  justify-content: center;
}
.menu-lateral-templates-content-section {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.menu-lateral-templates-login {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu01 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text01 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-cadastro {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu02 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text02 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-recuperar-senha {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu03 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text03 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-funil-de-vendas {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu04 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text04 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-recuperar-senha1 {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu05 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text05 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-navegao {
  width: 100%;
  padding-top: 20px;
}
.menu-lateral-templates-title-section1 {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.menu-lateral-templates-container2 {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
}
.menu-lateral-templates-botao-menu06 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text06 {
  color: #fccf00;
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  justify-content: center;
}
.menu-lateral-templates-content-section1 {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.menu-lateral-templates-headers {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu07 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text07 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-sidebars {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu08 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text08 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-footers {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu09 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text09 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-sees {
  width: 100%;
  padding-top: 20px;
}
.menu-lateral-templates-title-section2 {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.menu-lateral-templates-container3 {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
}
.menu-lateral-templates-botao-menu10 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text10 {
  color: #fccf00;
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  justify-content: center;
}
.menu-lateral-templates-content-section2 {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.menu-lateral-templates-hero {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu11 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text11 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-banners {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu12 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text12 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-features {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu13 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text13 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-preos {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu14 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text14 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-galerias {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu15 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text15 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-depoimentos {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu16 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text16 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-steps {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu17 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text17 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-midias {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu18 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text18 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-status {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu19 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text19 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-elementos {
  width: 100%;
  padding-top: 20px;
}
.menu-lateral-templates-title-section3 {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.menu-lateral-templates-container4 {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
}
.menu-lateral-templates-botao-menu20 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text20 {
  color: #fccf00;
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  justify-content: center;
}
.menu-lateral-templates-content-section3 {
  gap: 10px;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.menu-lateral-templates-textos {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu21 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text21 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-botoes {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu22 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text22 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-nav-menus {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu23 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  padding-bottom: 5px;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text23 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-icones {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu24 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text24 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-dropdowns {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu25 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text25 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-cards {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu26 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text26 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-timelines {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu27 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text27 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-listas {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu28 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text28 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-tabelas {
  width: 100%;
  border: none;
  display: flex;
  padding: 0px;
  position: relative;
}
.menu-lateral-templates-botao-menu29 {
  width: 100%;
  border: none;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.menu-lateral-templates-text29 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-family: Fivo Sans Medium;
  margin-left: 20px;
  justify-content: center;
}
.menu-lateral-templates-contentbotton {
  gap: 50px;
  width: 100%;
  display: flex;
  max-height: 400px;
  padding-top: 20px;
  flex-direction: column;
  justify-content: space-between;
}
.menu-lateral-templates-acount {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.menu-lateral-templates-root-class-name {
  left: 0px;
}
@media(max-width: 767px) {
  .menu-lateral-templates-container {
    width: 80px;
    display: none;
  }
  .menu-lateral-templates-barra {
    padding: 70px 5px 35px;
  }
  .menu-lateral-templates-text {
    display: none;
  }
  .menu-lateral-templates-text01 {
    display: none;
  }
  .menu-lateral-templates-text02 {
    display: none;
  }
  .menu-lateral-templates-text03 {
    display: none;
  }
  .menu-lateral-templates-text04 {
    display: none;
  }
  .menu-lateral-templates-text05 {
    display: none;
  }
  .menu-lateral-templates-text06 {
    display: none;
  }
  .menu-lateral-templates-text07 {
    display: none;
  }
  .menu-lateral-templates-text08 {
    display: none;
  }
  .menu-lateral-templates-text09 {
    display: none;
  }
  .menu-lateral-templates-text10 {
    display: none;
  }
  .menu-lateral-templates-text11 {
    display: none;
  }
  .menu-lateral-templates-text12 {
    display: none;
  }
  .menu-lateral-templates-text13 {
    display: none;
  }
  .menu-lateral-templates-text14 {
    display: none;
  }
  .menu-lateral-templates-text15 {
    display: none;
  }
  .menu-lateral-templates-text16 {
    display: none;
  }
  .menu-lateral-templates-text17 {
    display: none;
  }
  .menu-lateral-templates-text18 {
    display: none;
  }
  .menu-lateral-templates-text19 {
    display: none;
  }
  .menu-lateral-templates-text20 {
    display: none;
  }
  .menu-lateral-templates-text21 {
    display: none;
  }
  .menu-lateral-templates-text22 {
    display: none;
  }
  .menu-lateral-templates-text23 {
    display: none;
  }
  .menu-lateral-templates-text24 {
    display: none;
  }
  .menu-lateral-templates-text25 {
    display: none;
  }
  .menu-lateral-templates-text26 {
    display: none;
  }
  .menu-lateral-templates-text27 {
    display: none;
  }
  .menu-lateral-templates-text28 {
    display: none;
  }
  .menu-lateral-templates-text29 {
    display: none;
  }
}
</style>
