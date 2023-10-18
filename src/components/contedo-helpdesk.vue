<template>
  <div class="contedo-helpdesk-container" v-bind:class="rootClassName">
    <div class="contedo-helpdesk-container1">
      <div class="contedo-helpdesk-header">
        <div class="contedo-helpdesk-container2">
          <div class="contedo-helpdesk-display">
            <span class="contedo-helpdesk-text titulo">{{ text }}</span>
          </div>
          <div class="contedo-helpdesk-actions">
            <div class="contedo-helpdesk-container3">
              <img
                alt="image"
                src="https://api.iconify.design/radix-icons/magnifying-glass.svg?color=%23FF9F0D"
                class="contedo-helpdesk-image"
              />
              <input
                type="text"
                placeholder="Pesquisar"
                class="contedo-helpdesk-input Content"
              />
            </div>
            <div class="contedo-helpdesk-container4">
              <select class="contedo-helpdesk-select Optionmenu">
                <option value="Option 1">Option 1</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div class="contedo-helpdesk-boto">
              <span class="contedo-helpdesk-text01 textbutton">{{ text1 }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="contedo-helpdesk-clientmenu">
        <div class="contedo-helpdesk-clientes">
          <span class="menu_itens">{{ text1312 }}</span>
        </div>
        <div class="contedo-helpdesk-motivo">
          <span class="menu_itens">{{ text13112 }}</span>
        </div>
        <div class="contedo-helpdesk-status">
          <span class="menu_itens">{{ text131112 }}</span>
        </div>
        <div class="contedo-helpdesk-ultima-atualizao">
          <span class="menu_itens">{{ text1311112 }}</span>
        </div>
      </div>
      <div class="contedo-helpdesk-clientlist">
        <div class="contedo-helpdesk-clientvalue">
          <div class="contedo-helpdesk-numero-hamado">
            <span class="Clientname">{{ text144 }}</span>
          </div>
          <div class="contedo-helpdesk-motivo01">
            <div class="contedo-helpdesk-motivo02">
              <span class="contedo-helpdesk-text07 Clientemail">
                {{ text14213 }}
              </span>
            </div>
          </div>
          <div class="contedo-helpdesk-status1">
            <div class="contedo-helpdesk-statusset">
              <span class="textbutton">{{ text152 }}</span>
            </div>
          </div>
          <div class="contedo-helpdesk-data-abertura">
            <span class="reuniao">27/07/2023 às 15h46</span>
          </div>
        </div>
        <div class="contedo-helpdesk-clientvalue1">
          <div class="contedo-helpdesk-numero-hamado1">
            <span class="Clientname">{{ text1444 }}</span>
          </div>
          <div class="contedo-helpdesk-motivo03">
            <div class="contedo-helpdesk-motivo04">
              <span class="contedo-helpdesk-text11 Clientemail">
                {{ text142134 }}
              </span>
            </div>
          </div>
          <div class="contedo-helpdesk-status2">
            <div class="contedo-helpdesk-statusset1">
              <span class="textbutton">{{ text1524 }}</span>
            </div>
          </div>
          <div class="contedo-helpdesk-data-abertura1">
            <span class="contedo-helpdesk-text13 reuniao">
              27/07/2023 às 15h46
            </span>
          </div>
        </div>
        <div class="contedo-helpdesk-clientvalue2">
          <div class="contedo-helpdesk-numero-hamado2">
            <span class="Clientname">{{ text14441 }}</span>
          </div>
          <div class="contedo-helpdesk-motivo05">
            <div class="contedo-helpdesk-motivo06">
              <span class="contedo-helpdesk-text15 Clientemail">
                {{ text1421341 }}
              </span>
            </div>
          </div>
          <div class="contedo-helpdesk-status3">
            <div class="contedo-helpdesk-statusset2">
              <span class="textbutton">{{ text15241 }}</span>
            </div>
          </div>
          <div class="contedo-helpdesk-data-abertura2">
            <span class="contedo-helpdesk-text17 reuniao">
              27/07/2023 às 15h46
            </span>
          </div>
        </div>
        <div class="contedo-helpdesk-clientvalue3">
          <div class="contedo-helpdesk-numero-hamado3">
            <span class="Clientname">{{ text1443 }}</span>
          </div>
          <div class="contedo-helpdesk-motivo07">
            <div class="contedo-helpdesk-motivo08">
              <span class="contedo-helpdesk-text19 Clientemail">
                {{ text142133 }}
              </span>
            </div>
          </div>
          <div class="contedo-helpdesk-status4">
            <div class="contedo-helpdesk-statusset3">
              <span class="textbutton">{{ text1523 }}</span>
            </div>
          </div>
          <div class="contedo-helpdesk-data-abertura3">
            <span class="contedo-helpdesk-text21 reuniao">
              {{ text1311121123 }}
            </span>
          </div>
        </div>
        <div class="contedo-helpdesk-clientvalue4">
          <div class="contedo-helpdesk-numero-hamado4">
            <span class="Clientname">{{ text14432 }}</span>
          </div>
          <div class="contedo-helpdesk-motivo09">
            <div class="contedo-helpdesk-motivo10">
              <span class="contedo-helpdesk-text23 Clientemail">
                {{ text1421332 }}
              </span>
            </div>
          </div>
          <div class="contedo-helpdesk-status5">
            <div class="contedo-helpdesk-statusset4">
              <span class="textbutton">{{ text15232 }}</span>
            </div>
          </div>
          <div class="contedo-helpdesk-data-abertura4">
            <span class="contedo-helpdesk-text25 reuniao">
              {{ text13111211232 }}
            </span>
          </div>
        </div>
        <div class="contedo-helpdesk-clientvalue5">
          <div class="contedo-helpdesk-numero-hamado5">
            <span class="Clientname">{{ text14431 }}</span>
          </div>
          <div class="contedo-helpdesk-motivo11">
            <div class="contedo-helpdesk-motivo12">
              <span class="contedo-helpdesk-text27 Clientemail">
                {{ text1421331 }}
              </span>
            </div>
          </div>
          <div class="contedo-helpdesk-status6">
            <div class="contedo-helpdesk-statusset5">
              <span class="textbutton">{{ text15231 }}</span>
            </div>
          </div>
          <div class="contedo-helpdesk-data-abertura5">
            <span class="contedo-helpdesk-text29 reuniao">
              {{ text13111211231 }}
            </span>
          </div>
        </div>
        <div class="contedo-helpdesk-clientvalue6">
          <div class="contedo-helpdesk-numero-hamado6">
            <span class="Clientname">{{ text144311 }}</span>
          </div>
          <div class="contedo-helpdesk-motivo13">
            <div class="contedo-helpdesk-motivo14">
              <span class="contedo-helpdesk-text31 Clientemail">
                {{ text14213311 }}
              </span>
            </div>
          </div>
          <div class="contedo-helpdesk-status7">
            <div class="contedo-helpdesk-statusset6">
              <span class="textbutton">{{ text152311 }}</span>
            </div>
          </div>
          <div class="contedo-helpdesk-data-abertura6">
            <span class="contedo-helpdesk-text33 reuniao">
              {{ text131112112311 }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContedoHelpdesk',
  props: {
    text1311121122: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    image_alt92111: {
      type: String,
      default: 'image',
    },
    text14213311: {
      type: String,
      default: 'BUG',
    },
    image_src921: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text131112132: {
      type: String,
      default: 'Funil de vendas',
    },
    image_alt9212: {
      type: String,
      default: 'image',
    },
    text1421341: {
      type: String,
      default: 'BUG',
    },
    image_src922: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1421331: {
      type: String,
      default: 'BUG',
    },
    text15241: {
      type: String,
      default: 'Aberto',
    },
    text1311121312: {
      type: String,
      default: 'Funil de vendas',
    },
    text1442: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text13111211231: {
      type: String,
      default: '27/07/2023  às 15h46',
    },
    image_alt922: {
      type: String,
      default: 'image',
    },
    text13112: {
      type: String,
      default: 'Motivo',
    },
    text131112: {
      type: String,
      default: 'Status',
    },
    text1443: {
      type: String,
      default: 'ago_0004-24',
    },
    text15232: {
      type: String,
      default: 'Aberto',
    },
    image_src9211: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text144111: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text14431: {
      type: String,
      default: 'ago_0006-23',
    },
    text1311121123: {
      type: String,
      default: '27/07/2023  às 15h46',
    },
    text13111211232: {
      type: String,
      default: '27/07/2023  às 15h46',
    },
    image_src92111: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1522: {
      type: String,
      default: 'Agendado',
    },
    text1421122: {
      type: String,
      default: '55 11 98765-4321',
    },
    text21: {
      type: String,
      default: 'de 52 resultados',
    },
    text14213: {
      type: String,
      default: 'BUG',
    },
    rootClassName1: String,
    text1: {
      type: String,
      default: '+ Novo chamado',
    },
    text14411: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text142112: {
      type: String,
      default: '55 11 98765-4321',
    },
    text13111213: {
      type: String,
      default: 'Funil de vendas',
    },
    text13111211211: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text13111211241: {
      type: String,
      default: '27/07/2023  às 15h46',
    },
    text131112112111: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    rootClassName: String,
    text1421121: {
      type: String,
      default: '55 11 98765-4321',
    },
    text14231: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text142312: {
      type: String,
      default: 'Hoje às 12h45',
    },
    image_src9212: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_alt921: {
      type: String,
      default: 'image',
    },
    text14211211: {
      type: String,
      default: '55 11 98765-4321',
    },
    text15211: {
      type: String,
      default: 'Agendado',
    },
    text1423: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text152: {
      type: String,
      default: 'Resolvido',
    },
    text152311: {
      type: String,
      default: 'Aberto',
    },
    text14432: {
      type: String,
      default: 'ago_0005-23',
    },
    text1421312: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text131112131: {
      type: String,
      default: 'Funil de vendas',
    },
    text142311: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text14412: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text1521: {
      type: String,
      default: 'Agendado',
    },
    text1441: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text14232: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text15231: {
      type: String,
      default: 'Aberto',
    },
    text142134: {
      type: String,
      default: 'BUG',
    },
    text131112112311: {
      type: String,
      default: '27/07/2023  às 15h46',
    },
    text144311: {
      type: String,
      default: 'ago_0007-23',
    },
    text142112111: {
      type: String,
      default: '55 11 98765-4321',
    },
    text: {
      type: String,
      default: 'Helpdesk',
    },
    text1312: {
      type: String,
      default: 'Número do chamado',
    },
    image_alt92: {
      type: String,
      default: 'image',
    },
    text1311121124: {
      type: String,
      default: '27/07/2023  às 15h46',
    },
    image_alt9211: {
      type: String,
      default: 'image',
    },
    text142131: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text1444: {
      type: String,
      default: 'ago_0002-23',
    },
    text1311112: {
      type: String,
      default: 'Última atualização',
    },
    text1423111: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text1311121121: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text1311121311: {
      type: String,
      default: 'Funil de vendas',
    },
    text13111213111: {
      type: String,
      default: 'Funil de vendas',
    },
    text142133: {
      type: String,
      default: 'BUG',
    },
    text13111111: {
      type: String,
      default: 'Reunião',
    },
    text152111: {
      type: String,
      default: 'Agendado',
    },
    image_src92: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1421311: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text211: {
      type: String,
      default: 'Monstrando',
    },
    text14441: {
      type: String,
      default: 'ago_0003-23',
    },
    text1524: {
      type: String,
      default: 'Aberto',
    },
    text14213111: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text131112112: {
      type: String,
      default: '27/07/2023  às 15h46',
    },
    text13111211212: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text142132: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text15212: {
      type: String,
      default: 'Agendado',
    },
    text1421332: {
      type: String,
      default: 'BUG',
    },
    text144: {
      type: String,
      default: 'ago_0001-23',
    },
    text14211212: {
      type: String,
      default: '55 11 98765-4321',
    },
    text1523: {
      type: String,
      default: 'Aberto',
    },
  },
}
</script>

<style scoped>
.contedo-helpdesk-container {
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
.contedo-helpdesk-container1 {
  width: 100%;
  height: fit-content;
  display: flex;
  padding: 40px 50px;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-helpdesk-header {
  gap: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.contedo-helpdesk-container2 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.contedo-helpdesk-display {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-helpdesk-text {
  color: #dc0f37;
  font-size: 45px;
  font-family: Fivo Sans Medium;
}
.contedo-helpdesk-actions {
  gap: 20px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.contedo-helpdesk-container3 {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  position: relative;
  align-items: center;
  border-color: #FF9F0D;
  border-width: 1.5px;
  border-radius: 10px;
  background-color: #ffffff;
}
.contedo-helpdesk-image {
  width: 30px;
  object-fit: cover;
  padding-left: 5px;
}
.contedo-helpdesk-input {
  color: #f5f5f5;
  padding-top: 0px;
  border-width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}
.contedo-helpdesk-container4 {
  height: 40px;
  display: flex;
  align-self: flex-start;
  align-items: center;
  border-color: #dc0f37;
  border-width: 2px;
  border-radius: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-helpdesk-select {
  padding-left: 10px;
  padding-right: 10px;
}
.contedo-helpdesk-boto {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  align-items: center;
  padding-top: 0px;
  padding-left: 40px;
  border-radius: 10px;
  padding-right: 40px;
  padding-bottom: 0px;
  justify-content: flex-end;
  background-color: #dc0f37;
}
.contedo-helpdesk-text01 {
  font-size: 15px;
}
.contedo-helpdesk-clientmenu {
  width: 100%;
  height: 40%;
  display: flex;
  padding-top: 60px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: space-between;
}
.contedo-helpdesk-clientes {
  width: 25%;
  display: flex;
  align-items: flex-start;
  padding-top: 0px;
  padding-left: 40px;
  border-radius: 10px;
  flex-direction: row;
  padding-bottom: 00px;
  justify-content: flex-start;
}
.contedo-helpdesk-motivo {
  width: 15%;
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-helpdesk-status {
  width: 10%;
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-helpdesk-ultima-atualizao {
  width: 30%;
  display: flex;
  align-items: flex-start;
  padding-left: 40px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-clientlist {
  gap: 15px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-helpdesk-clientvalue {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.contedo-helpdesk-numero-hamado {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-motivo01 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-helpdesk-motivo02 {
  width: 15%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.contedo-helpdesk-text07 {
  padding-left: 0px;
}
.contedo-helpdesk-status1 {
  width: 10%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-statusset {
  flex: 0 0 auto;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: 0DC5FF;
}
.contedo-helpdesk-data-abertura {
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-clientvalue1 {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.contedo-helpdesk-numero-hamado1 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-motivo03 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-helpdesk-motivo04 {
  width: 15%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.contedo-helpdesk-text11 {
  padding-left: 0px;
}
.contedo-helpdesk-status2 {
  width: 10%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-statusset1 {
  flex: 0 0 auto;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: 00A89C;
}
.contedo-helpdesk-data-abertura1 {
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-text13 {
  color: #737373;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-helpdesk-clientvalue2 {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.contedo-helpdesk-numero-hamado2 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-motivo05 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-helpdesk-motivo06 {
  width: 15%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.contedo-helpdesk-text15 {
  padding-left: 0px;
}
.contedo-helpdesk-status3 {
  width: 10%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-statusset2 {
  flex: 0 0 auto;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: 00A89C;
}
.contedo-helpdesk-data-abertura2 {
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-text17 {
  color: #737373;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-helpdesk-clientvalue3 {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.contedo-helpdesk-numero-hamado3 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-motivo07 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-helpdesk-motivo08 {
  width: 15%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.contedo-helpdesk-text19 {
  padding-left: 0px;
}
.contedo-helpdesk-status4 {
  width: 10%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-statusset3 {
  flex: 0 0 auto;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: 00A89C;
}
.contedo-helpdesk-data-abertura3 {
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-text21 {
  color: #737373;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-helpdesk-clientvalue4 {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.contedo-helpdesk-numero-hamado4 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-motivo09 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-helpdesk-motivo10 {
  width: 15%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.contedo-helpdesk-text23 {
  padding-left: 0px;
}
.contedo-helpdesk-status5 {
  width: 10%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-statusset4 {
  flex: 0 0 auto;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: 00A89C;
}
.contedo-helpdesk-data-abertura4 {
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-text25 {
  color: #737373;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-helpdesk-clientvalue5 {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.contedo-helpdesk-numero-hamado5 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-motivo11 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-helpdesk-motivo12 {
  width: 15%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.contedo-helpdesk-text27 {
  padding-left: 0px;
}
.contedo-helpdesk-status6 {
  width: 10%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-statusset5 {
  flex: 0 0 auto;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: 00A89C;
}
.contedo-helpdesk-data-abertura5 {
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-text29 {
  color: #737373;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-helpdesk-clientvalue6 {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.contedo-helpdesk-numero-hamado6 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-motivo13 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-helpdesk-motivo14 {
  width: 15%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.contedo-helpdesk-text31 {
  padding-left: 0px;
}
.contedo-helpdesk-status7 {
  width: 10%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-statusset6 {
  flex: 0 0 auto;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: 00A89C;
}
.contedo-helpdesk-data-abertura6 {
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-helpdesk-text33 {
  color: #737373;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}

</style>
