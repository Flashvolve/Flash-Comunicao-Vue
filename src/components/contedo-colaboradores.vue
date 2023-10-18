<template>
  <div class="contedo-colaboradores-container" v-bind:class="rootClassName">
    <div class="contedo-colaboradores-group">
      <div class="contedo-colaboradores-header">
        <div class="contedo-colaboradores-title">
          <div class="contedo-colaboradores-display">
            <span class="contedo-colaboradores-text titulo">{{ text }}</span>
          </div>
          <div class="contedo-colaboradores-actions">
            <span class="contedo-colaboradores-text01">{{ text211 }}</span>
            <div class="contedo-colaboradores-drop">
              <div class="contedo-colaboradores-drop-menu">
                <span class="contedo-colaboradores-text02">{{ text2111 }}</span>
              </div>
            </div>
            <span class="contedo-colaboradores-text03">{{ text21 }}</span>
            <div class="contedo-colaboradores-boto"><app-boto></app-boto></div>
          </div>
        </div>
        <div class="contedo-colaboradores-pesquisa">
          <div class="contedo-colaboradores-input">
            <img
              alt="image"
              src="https://api.iconify.design/radix-icons/magnifying-glass.svg?color=%23FF9F0D"
              class="contedo-colaboradores-image"
            />
            <input
              type="text"
              placeholder="Pesquisar clientes"
              class="contedo-colaboradores-textinput input"
            />
          </div>
        </div>
      </div>
      <div class="contedo-colaboradores-clientmenu">
        <div class="contedo-colaboradores-checkbox">
          <input type="checkbox" class="contedo-colaboradores-checkbox01" />
        </div>
        <div class="contedo-colaboradores-clientes">
          <span class="menu_itens">{{ text1312 }}</span>
        </div>
        <div class="contedo-colaboradores-contatos">
          <span class="menu_itens">{{ text13112 }}</span>
        </div>
        <div class="contedo-colaboradores-origem">
          <span class="menu_itens">{{ text131112 }}</span>
        </div>
        <div class="contedo-colaboradores-status">
          <span class="menu_itens">{{ text1311112 }}</span>
        </div>
        <div class="contedo-colaboradores-reunio">
          <span class="menu_itens">{{ text13111111 }}</span>
        </div>
      </div>
      <div class="contedo-colaboradores-clientlist">
        <div class="contedo-colaboradores-clientvalue">
          <div class="contedo-colaboradores-checkbox02">
            <input type="checkbox" class="contedo-colaboradores-checkbox03" />
          </div>
          <div class="contedo-colaboradores-cliente">
            <div class="contedo-colaboradores-foto">
              <img
                :alt="image_alt92"
                :src="image_src92"
                class="contedo-colaboradores-image01"
              />
            </div>
            <div class="contedo-colaboradores-user">
              <div class="contedo-colaboradores-name">
                <span class="Clientname">{{ text144 }}</span>
              </div>
              <div class="contedo-colaboradores-acesso">
                <span class="contedo-colaboradores-text10 Clientacess">
                  {{ text1423 }}
                </span>
              </div>
            </div>
          </div>
          <div class="contedo-colaboradores-contato">
            <div class="contedo-colaboradores-email">
              <img
                alt="image"
                src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                class="contedo-colaboradores-image02"
              />
              <span class="Clientemail">{{ text14213 }}</span>
            </div>
            <div class="contedo-colaboradores-telefone">
              <img
                alt="image"
                src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                class="contedo-colaboradores-image03"
              />
              <span class="Clientnumber">{{ text142112 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-situao">
            <span class="contedo-colaboradores-text13">{{ text13111213 }}</span>
          </div>
          <div class="contedo-colaboradores-tipo">
            <div class="contedo-colaboradores-statusset">
              <span class="textbutton">{{ text152 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-ultimo-acesso">
            <img
              alt="image"
              src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
              class="contedo-colaboradores-image04"
            />
            <span class="contedo-colaboradores-text15">{{ text131112112 }}</span>
          </div>
        </div>
        <div class="contedo-colaboradores-clientvalue1">
          <div class="contedo-colaboradores-checkbox04">
            <input type="checkbox" class="contedo-colaboradores-checkbox05" />
          </div>
          <div class="contedo-colaboradores-cliente1">
            <div class="contedo-colaboradores-foto1">
              <img
                :alt="image_alt927"
                :src="image_src927"
                class="contedo-colaboradores-image05"
              />
            </div>
            <div class="contedo-colaboradores-user1">
              <div class="contedo-colaboradores-name1">
                <span class="Clientname">{{ text1447 }}</span>
              </div>
              <div class="contedo-colaboradores-acesso1">
                <span class="contedo-colaboradores-text17 Clientacess">
                  {{ text14239 }}
                </span>
              </div>
            </div>
          </div>
          <div class="contedo-colaboradores-contato1">
            <div class="contedo-colaboradores-email1">
              <img
                alt="image"
                src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                class="contedo-colaboradores-image06"
              />
              <span class="Clientemail">{{ text142137 }}</span>
            </div>
            <div class="contedo-colaboradores-telefone1">
              <img
                alt="image"
                src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                class="contedo-colaboradores-image07"
              />
              <span class="Clientnumber">{{ text1421127 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-situao1">
            <span class="contedo-colaboradores-text20">{{ text131112137 }}</span>
          </div>
          <div class="contedo-colaboradores-tipo1">
            <div class="contedo-colaboradores-statusset1">
              <span class="textbutton">{{ text1527 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-ultimo-acesso1">
            <img
              alt="image"
              src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
              class="contedo-colaboradores-image08"
            />
            <span class="contedo-colaboradores-text22">{{ text1311121129 }}</span>
          </div>
        </div>
        <div class="contedo-colaboradores-clientvalue2">
          <div class="contedo-colaboradores-checkbox06">
            <input type="checkbox" class="contedo-colaboradores-checkbox07" />
          </div>
          <div class="contedo-colaboradores-cliente2">
            <div class="contedo-colaboradores-foto2">
              <img
                :alt="image_alt926"
                :src="image_src926"
                class="contedo-colaboradores-image09"
              />
            </div>
            <div class="contedo-colaboradores-user2">
              <div class="contedo-colaboradores-name2">
                <span class="Clientname">{{ text1446 }}</span>
              </div>
              <div class="contedo-colaboradores-acesso2">
                <span class="contedo-colaboradores-text24 Clientacess">
                  {{ text14238 }}
                </span>
              </div>
            </div>
          </div>
          <div class="contedo-colaboradores-contato2">
            <div class="contedo-colaboradores-email2">
              <img
                alt="image"
                src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                class="contedo-colaboradores-image10"
              />
              <span class="Clientemail">{{ text142136 }}</span>
            </div>
            <div class="contedo-colaboradores-telefone2">
              <img
                alt="image"
                src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                class="contedo-colaboradores-image11"
              />
              <span class="Clientnumber">{{ text1421126 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-situao2">
            <span class="contedo-colaboradores-text27">{{ text131112136 }}</span>
          </div>
          <div class="contedo-colaboradores-tipo2">
            <div class="contedo-colaboradores-statusset2">
              <span class="textbutton">{{ text1526 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-ultimo-acesso2">
            <img
              alt="image"
              src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
              class="contedo-colaboradores-image12"
            />
            <span class="contedo-colaboradores-text29">{{ text1311121128 }}</span>
          </div>
        </div>
        <div class="contedo-colaboradores-clientvalue3">
          <div class="contedo-colaboradores-checkbox08">
            <input type="checkbox" class="contedo-colaboradores-checkbox09" />
          </div>
          <div class="contedo-colaboradores-cliente3">
            <div class="contedo-colaboradores-foto3">
              <img
                :alt="image_alt925"
                :src="image_src925"
                class="contedo-colaboradores-image13"
              />
            </div>
            <div class="contedo-colaboradores-user3">
              <div class="contedo-colaboradores-name3">
                <span class="Clientname">{{ text1445 }}</span>
              </div>
              <div class="contedo-colaboradores-acesso3">
                <span class="contedo-colaboradores-text31 Clientacess">
                  {{ text14236 }}
                </span>
              </div>
            </div>
          </div>
          <div class="contedo-colaboradores-contato3">
            <div class="contedo-colaboradores-email3">
              <img
                alt="image"
                src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                class="contedo-colaboradores-image14"
              />
              <span class="Clientemail">{{ text142135 }}</span>
            </div>
            <div class="contedo-colaboradores-telefone3">
              <img
                alt="image"
                src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                class="contedo-colaboradores-image15"
              />
              <span class="Clientnumber">{{ text1421125 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-situao3">
            <span class="contedo-colaboradores-text34">{{ text131112135 }}</span>
          </div>
          <div class="contedo-colaboradores-tipo3">
            <div class="contedo-colaboradores-statusset3">
              <span class="textbutton">{{ text1525 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-ultimo-acesso3">
            <img
              alt="image"
              src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
              class="contedo-colaboradores-image16"
            />
            <span class="contedo-colaboradores-text36">{{ text1311121126 }}</span>
          </div>
        </div>
        <div class="contedo-colaboradores-clientvalue4">
          <div class="contedo-colaboradores-checkbox10">
            <input type="checkbox" class="contedo-colaboradores-checkbox11" />
          </div>
          <div class="contedo-colaboradores-cliente4">
            <div class="contedo-colaboradores-foto4">
              <img
                :alt="image_alt9251"
                :src="image_src9251"
                class="contedo-colaboradores-image17"
              />
            </div>
            <div class="contedo-colaboradores-user4">
              <div class="contedo-colaboradores-name4">
                <span class="Clientname">{{ text14451 }}</span>
              </div>
              <div class="contedo-colaboradores-acesso4">
                <span class="contedo-colaboradores-text38 Clientacess">
                  {{ text142361 }}
                </span>
              </div>
            </div>
          </div>
          <div class="contedo-colaboradores-contato4">
            <div class="contedo-colaboradores-email4">
              <img
                alt="image"
                src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                class="contedo-colaboradores-image18"
              />
              <span class="Clientemail">{{ text1421351 }}</span>
            </div>
            <div class="contedo-colaboradores-telefone4">
              <img
                alt="image"
                src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                class="contedo-colaboradores-image19"
              />
              <span class="Clientnumber">{{ text14211251 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-situao4">
            <span class="contedo-colaboradores-text41">{{ text1311121351 }}</span>
          </div>
          <div class="contedo-colaboradores-tipo4">
            <div class="contedo-colaboradores-statusset4">
              <span class="textbutton">{{ text15251 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-ultimo-acesso4">
            <img
              alt="image"
              src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
              class="contedo-colaboradores-image20"
            />
            <span class="contedo-colaboradores-text43">
              {{ text13111211261 }}
            </span>
          </div>
        </div>
        <div class="contedo-colaboradores-clientvalue5">
          <div class="contedo-colaboradores-checkbox12">
            <input type="checkbox" class="contedo-colaboradores-checkbox13" />
          </div>
          <div class="contedo-colaboradores-cliente5">
            <div class="contedo-colaboradores-foto5">
              <img
                :alt="image_alt92511"
                :src="image_src92511"
                class="contedo-colaboradores-image21"
              />
            </div>
            <div class="contedo-colaboradores-user5">
              <div class="contedo-colaboradores-name5">
                <span class="Clientname">{{ text144511 }}</span>
              </div>
              <div class="contedo-colaboradores-acesso5">
                <span class="contedo-colaboradores-text45 Clientacess">
                  {{ text1423611 }}
                </span>
              </div>
            </div>
          </div>
          <div class="contedo-colaboradores-contato5">
            <div class="contedo-colaboradores-email5">
              <img
                alt="image"
                src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                class="contedo-colaboradores-image22"
              />
              <span class="Clientemail">{{ text14213511 }}</span>
            </div>
            <div class="contedo-colaboradores-telefone5">
              <img
                alt="image"
                src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                class="contedo-colaboradores-image23"
              />
              <span class="Clientnumber">{{ text142112511 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-situao5">
            <span class="contedo-colaboradores-text48">
              {{ text13111213511 }}
            </span>
          </div>
          <div class="contedo-colaboradores-tipo5">
            <div class="contedo-colaboradores-statusset5">
              <span class="textbutton">{{ text152511 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-ultimo-acesso5">
            <img
              alt="image"
              src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
              class="contedo-colaboradores-image24"
            />
            <span class="contedo-colaboradores-text50">
              {{ text131112112611 }}
            </span>
          </div>
        </div>
        <div class="contedo-colaboradores-clientvalue6">
          <div class="contedo-colaboradores-checkbox14">
            <input type="checkbox" class="contedo-colaboradores-checkbox15" />
          </div>
          <div class="contedo-colaboradores-cliente6">
            <div class="contedo-colaboradores-foto6">
              <img
                :alt="image_alt924"
                :src="image_src924"
                class="contedo-colaboradores-image25"
              />
            </div>
            <div class="contedo-colaboradores-user6">
              <div class="contedo-colaboradores-name6">
                <span class="Clientname">{{ text1444 }}</span>
              </div>
              <div class="contedo-colaboradores-acesso6">
                <span class="contedo-colaboradores-text52 Clientacess">
                  {{ text14237 }}
                </span>
              </div>
            </div>
          </div>
          <div class="contedo-colaboradores-contato6">
            <div class="contedo-colaboradores-email6">
              <img
                alt="image"
                src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                class="contedo-colaboradores-image26"
              />
              <span class="Clientemail">{{ text142134 }}</span>
            </div>
            <div class="contedo-colaboradores-telefone6">
              <img
                alt="image"
                src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                class="contedo-colaboradores-image27"
              />
              <span class="Clientnumber">{{ text1421124 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-situao6">
            <span class="contedo-colaboradores-text55">{{ text131112134 }}</span>
          </div>
          <div class="contedo-colaboradores-tipo6">
            <div class="contedo-colaboradores-statusset6">
              <span class="textbutton">{{ text1524 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-ultimo-acesso6">
            <img
              alt="image"
              src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
              class="contedo-colaboradores-image28"
            />
            <span class="contedo-colaboradores-text57">{{ text1311121127 }}</span>
          </div>
        </div>
        <div class="contedo-colaboradores-clientvalue7">
          <div class="contedo-colaboradores-checkbox16">
            <input type="checkbox" class="contedo-colaboradores-checkbox17" />
          </div>
          <div class="contedo-colaboradores-cliente7">
            <div class="contedo-colaboradores-foto7">
              <img
                :alt="image_alt9242"
                :src="image_src9242"
                class="contedo-colaboradores-image29"
              />
            </div>
            <div class="contedo-colaboradores-user7">
              <div class="contedo-colaboradores-name7">
                <span class="Clientname">{{ text14442 }}</span>
              </div>
              <div class="contedo-colaboradores-acesso7">
                <span class="contedo-colaboradores-text59 Clientacess">
                  {{ text142371 }}
                </span>
              </div>
            </div>
          </div>
          <div class="contedo-colaboradores-contato7">
            <div class="contedo-colaboradores-email7">
              <img
                alt="image"
                src="https://api.iconify.design/ci/mail.svg?color=%23737373"
                class="contedo-colaboradores-image30"
              />
              <span class="Clientemail">{{ text1421342 }}</span>
            </div>
            <div class="contedo-colaboradores-telefone7">
              <img
                alt="image"
                src="https://api.iconify.design/mingcute/phone-call-line.svg?color=%23737373"
                class="contedo-colaboradores-image31"
              />
              <span class="Clientnumber">{{ text14211242 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-situao7">
            <span class="contedo-colaboradores-text62">{{ text1311121342 }}</span>
          </div>
          <div class="contedo-colaboradores-tipo7">
            <div class="contedo-colaboradores-statusset7">
              <span class="textbutton">{{ text15242 }}</span>
            </div>
          </div>
          <div class="contedo-colaboradores-ultimo-acesso7">
            <img
              alt="image"
              src="https://api.iconify.design/material-symbols/nest-clock-farsight-analog-outline.svg?color=%23737373"
              class="contedo-colaboradores-image32"
            />
            <span class="contedo-colaboradores-text64">
              {{ text13111211271 }}
            </span>
          </div>
        </div>
      </div>
      <div class="contedo-colaboradores-container1">
        <nav-pages rootClassName="nav-pages-root-class-name"></nav-pages>
        <nav-pages2 rootClassName="nav-pages2-root-class-name"></nav-pages2>
      </div>
    </div>
  </div>
</template>

<script>
import AppBoto from './boto'
import NavPages from './nav-pages'
import NavPages2 from './nav-pages2'

export default {
  name: 'ContedoColaboradores',
  props: {
    text14213311: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text1421332: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text131112121: {
      type: String,
      default: 'Funil de vendas',
    },
    text14213111: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text13111211271: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    image_alt923: {
      type: String,
      default: 'image',
    },
    text131111: {
      type: String,
      default: 'Status',
    },
    text95: {
      type: String,
      default: '9,2%',
    },
    image_src96: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text146: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text1421342: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text1: {
      type: String,
      default: 'Quinta feira, 03 de agosto de 2023',
    },
    text15242: {
      type: String,
      default: 'Diretoria',
    },
    image_src10: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text131112135: {
      type: String,
      default: 'Período de férias',
    },
    text1311112: {
      type: String,
      default: 'Tipo',
    },
    text1311121312: {
      type: String,
      default: 'Funil de vendas',
    },
    image_src11: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text14441: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    image_src2: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1431: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text14237: {
      type: String,
      default: '{cargo_funcao}',
    },
    image_alt9242: {
      type: String,
      default: 'image',
    },
    text1426: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text131112: {
      type: String,
      default: 'Situação',
    },
    text93: {
      type: String,
      default: '2,1%',
    },
    text1421122: {
      type: String,
      default: '55 11 98765-4321',
    },
    text142332: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text1421124: {
      type: String,
      default: '55 11 98765-4321',
    },
    text1441: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text14211241: {
      type: String,
      default: '55 11 98765-4321',
    },
    text82: {
      type: String,
      default: 'Reunião Ultrafarma',
    },
    text21: {
      type: String,
      default: 'de {total de col}',
    },
    text1446: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text113: {
      type: String,
      default: 'Agendamentos',
    },
    text7: {
      type: String,
      default: 'Próximas reuniões',
    },
    image_alt92311: {
      type: String,
      default: 'image',
    },
    text152111: {
      type: String,
      default: 'Agendado',
    },
    text142122: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text3121: {
      type: String,
      default: '36,12%',
    },
    text1311121113: {
      type: String,
      default: 'Ter - 22/08 | 12h45',
    },
    image_src91: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text15232: {
      type: String,
      default: 'Agendado',
    },
    text1525: {
      type: String,
      default: 'Colaborador',
    },
    text1442: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text13111217: {
      type: String,
      default: 'Funil de vendas',
    },
    image_alt4: {
      type: String,
      default: 'image',
    },
    text13111212: {
      type: String,
      default: 'Funil de vendas',
    },
    text142312: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text13111211232: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text15241: {
      type: String,
      default: 'Agendado',
    },
    text142124: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    image_alt10: {
      type: String,
      default: 'image',
    },
    image_alt96: {
      type: String,
      default: 'image',
    },
    text1427: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text1511: {
      type: String,
      default: 'Agendado',
    },
    image_src923: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text152: {
      type: String,
      default: 'Líder',
    },
    image_alt92111: {
      type: String,
      default: 'image',
    },
    image_src922: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_src9231: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1421125: {
      type: String,
      default: '55 11 98765-4321',
    },
    image_alt92511: {
      type: String,
      default: 'image',
    },
    image_src92: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_src927: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_alt6: {
      type: String,
      default: 'image',
    },
    image_src912: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text14224: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text1421123: {
      type: String,
      default: '55 11 98765-4321',
    },
    text144: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text131111111: {
      type: String,
      default: 'Reunião',
    },
    text131112134: {
      type: String,
      default: 'Contrato rescindido',
    },
    text13111: {
      type: String,
      default: 'Origem',
    },
    text13111213: {
      type: String,
      default: 'Contrato ativo',
    },
    text1512: {
      type: String,
      default: 'Agendado',
    },
    text13111211212: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text1513: {
      type: String,
      default: 'Agendado',
    },
    text13111216: {
      type: String,
      default: 'Funil de vendas',
    },
    text1524: {
      type: String,
      default: 'Diretoria',
    },
    text1311121126: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text912: {
      type: String,
      default: 'Bounce',
    },
    text147: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text311: {
      type: String,
      default: 'R$ 41.654,78',
    },
    text14233: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text13111213511: {
      type: String,
      default: 'Período de férias',
    },
    text61: {
      type: String,
      default: 'de',
    },
    text144111: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text13111214: {
      type: String,
      default: 'Funil de vendas',
    },
    text1311111: {
      type: String,
      default: 'Reunião',
    },
    text13112: {
      type: String,
      default: 'Contatos',
    },
    text1432: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text14232: {
      type: String,
      default: 'Hoje às 12h45',
    },
    image_src9242: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1311121125: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text131112111: {
      type: String,
      default: 'Ter - 22/08 | 12h45',
    },
    image_alt924: {
      type: String,
      default: 'image',
    },
    text1311121127: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text1311121122: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    image_src92311: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text13111121: {
      type: String,
      default: 'Status',
    },
    image_alt2: {
      type: String,
      default: 'image',
    },
    text142112: {
      type: String,
      default: '55 11 98765-4321',
    },
    image_src4: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_src92111: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_alt911: {
      type: String,
      default: 'image',
    },
    text142: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text131112114: {
      type: String,
      default: 'Ter - 22/08 | 12h45',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    text1311121128: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text1421111: {
      type: String,
      default: '55 11 98765-4321',
    },
    text142341: {
      type: String,
      default: 'Hoje às 12h45',
    },
    image_src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text112: {
      type: String,
      default: 'Atualizado hoje, às 10h56',
    },
    image_alt8: {
      type: String,
      default: 'image',
    },
    text1312: {
      type: String,
      default: 'Clientes',
    },
    image_alt9212: {
      type: String,
      default: 'image',
    },
    text1411: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text14214: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    textinput_placeholder: {
      type: String,
      default: 'placeholder',
    },
    text151: {
      type: String,
      default: 'Agendado',
    },
    image_alt927: {
      type: String,
      default: 'image',
    },
    text1423111: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text14211242: {
      type: String,
      default: '55 11 98765-4321',
    },
    text96: {
      type: String,
      default: '1,7%',
    },
    text31: {
      type: String,
      default: 'R$ 41.654,78',
    },
    text142115: {
      type: String,
      default: '55 11 98765-4321',
    },
    text1311121332: {
      type: String,
      default: 'Funil de vendas',
    },
    text15231: {
      type: String,
      default: 'Agendado',
    },
    text153: {
      type: String,
      default: 'Agendado',
    },
    text1434: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    image_src914: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text152511: {
      type: String,
      default: 'Colaborador',
    },
    image_alt921: {
      type: String,
      default: 'image',
    },
    text8: {
      type: String,
      default: 'Reunião Libbs',
    },
    text13111211261: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    image_src7: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_alt922: {
      type: String,
      default: 'image',
    },
    image_alt914: {
      type: String,
      default: 'image',
    },
    image_src3: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text9: {
      type: String,
      default: '2836',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    text152311: {
      type: String,
      default: 'Agendado',
    },
    text913: {
      type: String,
      default: 'Abertos',
    },
    text14238: {
      type: String,
      default: '{cargo_funcao}',
    },
    text: {
      type: String,
      default: 'Colaboradores',
    },
    text131112124: {
      type: String,
      default: 'Funil de vendas',
    },
    text1311121121: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text131112115: {
      type: String,
      default: 'Ter - 22/08 | 12h45',
    },
    text611: {
      type: String,
      default: '40',
    },
    text14442: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text142134: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text1311121129: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text1527: {
      type: String,
      default: 'Líder',
    },
    text1423611: {
      type: String,
      default: '{cargo_funcao}',
    },
    image_alt9231: {
      type: String,
      default: 'image',
    },
    image_alt93: {
      type: String,
      default: 'image',
    },
    button: {
      type: String,
      default: 'Button',
    },
    text13111215: {
      type: String,
      default: 'Funil de vendas',
    },
    text1423: {
      type: String,
      default: '{cargo_funcao}',
    },
    text14211231: {
      type: String,
      default: '55 11 98765-4321',
    },
    text915: {
      type: String,
      default: 'Réplicas',
    },
    text1311121124: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text114: {
      type: String,
      default: 'Atualizado hoje, às 10h56',
    },
    text144311: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text1447: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text6: {
      type: String,
      default: '10',
    },
    image_src9232: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1421112: {
      type: String,
      default: '55 11 98765-4321',
    },
    text1425: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text1311121311: {
      type: String,
      default: 'Funil de vendas',
    },
    image_alt92: {
      type: String,
      default: 'image',
    },
    text1311: {
      type: String,
      default: 'Contatos',
    },
    text142121: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text1311121123: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text1421341: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    image_alt5: {
      type: String,
      default: 'image',
    },
    text3: {
      type: String,
      default: 'Você economizou até o momento',
    },
    text1522: {
      type: String,
      default: 'Agendado',
    },
    text131112136: {
      type: String,
      default: 'Contrato ativo',
    },
    text1521: {
      type: String,
      default: 'Agendado',
    },
    text142113: {
      type: String,
      default: '55 11 98765-4321',
    },
    text14412: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text14217: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text14211: {
      type: String,
      default: '55 11 98765-4321',
    },
    text142116: {
      type: String,
      default: '55 11 98765-4321',
    },
    text142123: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text1422: {
      type: String,
      default: 'Hoje às 12h45',
    },
    image_alt9232: {
      type: String,
      default: 'image',
    },
    text1421331: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text1311121111: {
      type: String,
      default: 'Ter - 22/08 | 12h45',
    },
    text1311121: {
      type: String,
      default: 'Funil de vendas',
    },
    text131112122: {
      type: String,
      default: 'Funil de vendas',
    },
    text1421351: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    image_src9: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text15211: {
      type: String,
      default: 'Agendado',
    },
    image_alt9241: {
      type: String,
      default: 'image',
    },
    image_alt94: {
      type: String,
      default: 'image',
    },
    text14211251: {
      type: String,
      default: '55 11 98765-4321',
    },
    text131112132: {
      type: String,
      default: 'Funil de vendas',
    },
    text1421: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text14239: {
      type: String,
      default: '{cargo_funcao}',
    },
    image_src913: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_src5: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1421311: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text142361: {
      type: String,
      default: '{cargo_funcao}',
    },
    text13111211231: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text14236: {
      type: String,
      default: '{cargo_funcao}',
    },
    text312: {
      type: String,
      default: '36,12%',
    },
    image_alt925: {
      type: String,
      default: 'image',
    },
    text1443: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text911: {
      type: String,
      default: 'Entregues',
    },
    text142111: {
      type: String,
      default: '55 11 98765-4321',
    },
    text14231: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text14222: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text131: {
      type: String,
      default: 'Clientes',
    },
    text2: {
      type: String,
      default: '6',
    },
    text14: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text142112311: {
      type: String,
      default: '55 11 98765-4321',
    },
    text145: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text13: {
      type: String,
      default: 'Text',
    },
    image_alt9211: {
      type: String,
      default: 'image',
    },
    text5: {
      type: String,
      default:
        'O seu resultado até o momento  comparado a empresas do mesmo segmento está: Acima da meta',
    },
    text1311121342: {
      type: String,
      default: 'Contrato rescindido',
    },
    image_src6: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1421113: {
      type: String,
      default: '55 11 98765-4321',
    },
    image_alt95: {
      type: String,
      default: 'image',
    },
    text81: {
      type: String,
      default: '09/08/2023 | Das 9h às 10h | online',
    },
    text91: {
      type: String,
      default: 'Enviados',
    },
    text13111111: {
      type: String,
      default: 'Último acesso',
    },
    text142331: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text2111: {
      type: String,
      default: '8',
    },
    text131112131: {
      type: String,
      default: 'Funil de vendas',
    },
    text13111211211: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text143: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text131112112: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text1311121341: {
      type: String,
      default: 'Funil de vendas',
    },
    text1433: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text142112111: {
      type: String,
      default: '55 11 98765-4321',
    },
    image_src95: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_src924: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text11: {
      type: String,
      default: 'Atualizado hoje, às 10h56',
    },
    text1421126: {
      type: String,
      default: '55 11 98765-4321',
    },
    text1444: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text13121: {
      type: String,
      default: 'Clientes',
    },
    text14211211: {
      type: String,
      default: '55 11 98765-4321',
    },
    text154: {
      type: String,
      default: 'Agendado',
    },
    text1421127: {
      type: String,
      default: '55 11 98765-4321',
    },
    text313: {
      type: String,
      default: 'R$ 41.654,78',
    },
    image_alt9251: {
      type: String,
      default: 'image',
    },
    text144511: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    image_alt3: {
      type: String,
      default: 'image',
    },
    image_src926: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text141: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text142136: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text94: {
      type: String,
      default: '39,3%',
    },
    text13111211241: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text131112123: {
      type: String,
      default: 'Funil de vendas',
    },
    text14451: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text1423311: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text14212: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text15: {
      type: String,
      default: 'Agendado',
    },
    text14431: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text1311121331: {
      type: String,
      default: 'Funil de vendas',
    },
    text14235: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text14432: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text15251: {
      type: String,
      default: 'Colaborador',
    },
    text14234: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text15212: {
      type: String,
      default: 'Agendado',
    },
    text156: {
      type: String,
      default: 'Agendado',
    },
    text14411: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text1445: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text142311: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text14215: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text155: {
      type: String,
      default: 'Agendado',
    },
    text142132: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    image_src911: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1526: {
      type: String,
      default: 'Líder',
    },
    image_alt926: {
      type: String,
      default: 'image',
    },
    text16: {
      type: String,
      default: 'Text',
    },
    image_alt913: {
      type: String,
      default: 'image',
    },
    image_src9211: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_src94: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_src9251: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text14211232: {
      type: String,
      default: '55 11 98765-4321',
    },
    image_src9212: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text10: {
      type: String,
      default: 'Pesquisar cliente',
    },
    text14211212: {
      type: String,
      default: '55 11 98765-4321',
    },
    text32: {
      type: String,
      default: 'Métricas',
    },
    text13111211: {
      type: String,
      default: 'Ter - 22/08 | 12h45',
    },
    text1421121: {
      type: String,
      default: '55 11 98765-4321',
    },
    image_alt7: {
      type: String,
      default: 'image',
    },
    text131121: {
      type: String,
      default: 'Contatos',
    },
    text14213511: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text1514: {
      type: String,
      default: 'Agendado',
    },
    image_src925: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1523: {
      type: String,
      default: 'Agendado',
    },
    text1421114: {
      type: String,
      default: '55 11 98765-4321',
    },
    text811: {
      type: String,
      default: '10/08/2023 | Das 9h às 12h | online',
    },
    text131112112311: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text142131: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text914: {
      type: String,
      default: 'Clicados',
    },
    text142135: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text148: {
      type: String,
      default: 'Nome e Sobrenome',
    },
    text131112133: {
      type: String,
      default: 'Funil de vendas',
    },
    text131112137: {
      type: String,
      default: 'Contrato ativo',
    },
    rootClassName: String,
    text14213: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text142371: {
      type: String,
      default: '{cargo_funcao}',
    },
    text131112113: {
      type: String,
      default: 'Ter - 22/08 | 12h45',
    },
    image_src93: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text211: {
      type: String,
      default: 'Monstrando',
    },
    text142137: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text131112112611: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text13111213111: {
      type: String,
      default: 'Funil de vendas',
    },
    text13111213311: {
      type: String,
      default: 'Funil de vendas',
    },
    text14216: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    text142114: {
      type: String,
      default: '55 11 98765-4321',
    },
    image_alt11: {
      type: String,
      default: 'image',
    },
    text14223: {
      type: String,
      default: 'Hoje às 12h45',
    },
    text142133: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    image_alt91: {
      type: String,
      default: 'image',
    },
    text1421312: {
      type: String,
      default: 'exemplo@exemplo.com.br',
    },
    image_src8: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1311121351: {
      type: String,
      default: 'Período de férias',
    },
    text131112116: {
      type: String,
      default: 'Ter - 22/08 | 12h45',
    },
    image_src921: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1424: {
      type: String,
      default: 'Hoje às 12h45',
    },
    image_alt912: {
      type: String,
      default: 'image',
    },
    text4: {
      type: String,
      default: 'Text',
    },
    text92: {
      type: String,
      default: '97,8%',
    },
    text111: {
      type: String,
      default:
        'O seu resultado até o momento  comparado a empresas do mesmo segmento está:',
    },
    text131112112111: {
      type: String,
      default: 'Terça - 22/08 | 12h45',
    },
    text142112511: {
      type: String,
      default: '55 11 98765-4321',
    },
    text12: {
      type: String,
      default: 'Ver assinatura',
    },
    text1311121114: {
      type: String,
      default: 'Ter - 22/08 | 12h45',
    },
    image_src92511: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1311121112: {
      type: String,
      default: 'Ter - 22/08 | 12h45',
    },
    image_src1: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_src9241: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_alt9: {
      type: String,
      default: 'image',
    },
    text14221: {
      type: String,
      default: 'Hoje às 12h45',
    },
  },
  components: {
    AppBoto,
    NavPages,
    NavPages2,
  },
}
</script>

<style scoped>
.contedo-colaboradores-container {
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
.contedo-colaboradores-group {
  width: 100%;
  height: fit-content;
  display: flex;
  padding: 40px 50px;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-colaboradores-header {
  gap: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.contedo-colaboradores-title {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.contedo-colaboradores-display {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-colaboradores-text {
  color: #FF9F0D;
  font-size: 45px;
  font-family: Fivo Sans Medium;
}
.contedo-colaboradores-actions {
  gap: 10px;
  flex: 0 0 auto;
  display: flex;
  max-width: 525px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.contedo-colaboradores-text01 {
  color: #737373;
  font-size: 16px;
  align-self: center;
  margin-top: 2px;
  margin-left: 15PX;
}
.contedo-colaboradores-drop {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.contedo-colaboradores-drop-menu {
  height: 40px;
  display: flex;
  max-width: 525pxpx;
  align-self: flex-start;
  align-items: center;
  border-color: #FF9F0D;
  border-width: 1.5px;
  border-radius: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-colaboradores-text02 {
  color: #737373;
  font-size: 16px;
  align-self: center;
  margin-top: 2px;
  margin-left: 15PX;
  margin-right: 15px;
}
.contedo-colaboradores-text03 {
  color: #737373;
  font-size: 16px;
  align-self: center;
  margin-top: 2px;
  margin-left: =5PX;
}
.contedo-colaboradores-boto {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.contedo-colaboradores-pesquisa {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.contedo-colaboradores-input {
  flex: 0 0 auto;
  width: 20%;
  height: 35;
  display: flex;
  align-items: center;
  border-color: #FF9F0D;
  border-width: 1.5;
  border-radius: 10px;
  background-color: #ffffff;
}
.contedo-colaboradores-image {
  width: 30px;
  object-fit: cover;
  padding-left: 5px;
}
.contedo-colaboradores-textinput {
  color: #D9D9D9;
  font-family: Fivo Sans Heavy;
  padding-top: 0px;
  border-width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}
.contedo-colaboradores-clientmenu {
  width: 100%;
  height: 40%;
  display: flex;
  padding-top: 40px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
}
.contedo-colaboradores-checkbox {
  width: 5%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-right: 10px;
  flex-direction: row;
  justify-content: flex-end;
}
.contedo-colaboradores-checkbox01 {
  width: 18px;
  height: 18px;
}
.contedo-colaboradores-clientes {
  width: 25%;
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-contatos {
  width: 20%;
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-origem {
  width: 15%;
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-status {
  width: 15%;
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-reunio {
  width: 20%;
  display: flex;
  align-items: flex-start;
  padding-left: 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-clientlist {
  gap: 20px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-colaboradores-clientvalue {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-colaboradores-checkbox02 {
  width: 5%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-right: 10px;
  flex-direction: row;
  justify-content: flex-end;
}
.contedo-colaboradores-checkbox03 {
  width: 18px;
  height: 18px;
}
.contedo-colaboradores-cliente {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-foto {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
}
.contedo-colaboradores-image01 {
  width: 45px;
  object-fit: cover;
  border-radius: 100%;
}
.contedo-colaboradores-user {
  width: calc(100% - 45px);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-colaboradores-name {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  flex-direction: column;
}
.contedo-colaboradores-acesso {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
}
.contedo-colaboradores-text10 {
  color: #737373;
  font-size: 14px;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-contato {
  width: 20%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-colaboradores-email {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image02 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-telefone {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image03 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-situao {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-text13 {
  color: #737373;
  font-family: Fivo Sans Heavy;
}
.contedo-colaboradores-tipo {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-statusset {
  flex: 0 0 auto;
  width: 70%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: 0DC5FF;
}
.contedo-colaboradores-ultimo-acesso {
  width: 20%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-image04 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-text15 {
  color: #737373;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-clientvalue1 {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-colaboradores-checkbox04 {
  width: 5%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-right: 10px;
  flex-direction: row;
  justify-content: flex-end;
}
.contedo-colaboradores-checkbox05 {
  width: 18px;
  height: 18px;
}
.contedo-colaboradores-cliente1 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-foto1 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
}
.contedo-colaboradores-image05 {
  width: 45px;
  object-fit: cover;
  border-radius: 100%;
}
.contedo-colaboradores-user1 {
  width: calc(100% - 45px);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-colaboradores-name1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  flex-direction: column;
}
.contedo-colaboradores-acesso1 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
}
.contedo-colaboradores-text17 {
  color: #737373;
  font-size: 14px;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-contato1 {
  width: 20%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-colaboradores-email1 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image06 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-telefone1 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image07 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-situao1 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-text20 {
  color: #737373;
  font-family: Fivo Sans Heavy;
}
.contedo-colaboradores-tipo1 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-statusset1 {
  flex: 0 0 auto;
  width: 70%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: 0DC5FF;
}
.contedo-colaboradores-ultimo-acesso1 {
  width: 20%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-image08 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-text22 {
  color: #737373;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-clientvalue2 {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-colaboradores-checkbox06 {
  width: 5%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-right: 10px;
  flex-direction: row;
  justify-content: flex-end;
}
.contedo-colaboradores-checkbox07 {
  width: 18px;
  height: 18px;
}
.contedo-colaboradores-cliente2 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-foto2 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
}
.contedo-colaboradores-image09 {
  width: 45px;
  object-fit: cover;
  border-radius: 100%;
}
.contedo-colaboradores-user2 {
  width: calc(100% - 45px);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-colaboradores-name2 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  flex-direction: column;
}
.contedo-colaboradores-acesso2 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
}
.contedo-colaboradores-text24 {
  color: #737373;
  font-size: 14px;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-contato2 {
  width: 20%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-colaboradores-email2 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image10 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-telefone2 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image11 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-situao2 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-text27 {
  color: #737373;
  font-family: Fivo Sans Heavy;
}
.contedo-colaboradores-tipo2 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-statusset2 {
  flex: 0 0 auto;
  width: 70%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: 0DC5FF;
}
.contedo-colaboradores-ultimo-acesso2 {
  width: 20%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-image12 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-text29 {
  color: #737373;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-clientvalue3 {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-colaboradores-checkbox08 {
  width: 5%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-right: 10px;
  flex-direction: row;
  justify-content: flex-end;
}
.contedo-colaboradores-checkbox09 {
  width: 18px;
  height: 18px;
}
.contedo-colaboradores-cliente3 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-foto3 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
}
.contedo-colaboradores-image13 {
  width: 45px;
  object-fit: cover;
  border-radius: 100%;
}
.contedo-colaboradores-user3 {
  width: calc(100% - 45px);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-colaboradores-name3 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  flex-direction: column;
}
.contedo-colaboradores-acesso3 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
}
.contedo-colaboradores-text31 {
  color: #737373;
  font-size: 14px;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-contato3 {
  width: 20%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-colaboradores-email3 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image14 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-telefone3 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image15 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-situao3 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-text34 {
  color: #737373;
  font-family: Fivo Sans Heavy;
}
.contedo-colaboradores-tipo3 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-statusset3 {
  flex: 0 0 auto;
  width: 70%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: 00A89C;
}
.contedo-colaboradores-ultimo-acesso3 {
  width: 20%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-image16 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-text36 {
  color: #737373;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-clientvalue4 {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-colaboradores-checkbox10 {
  width: 5%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-right: 10px;
  flex-direction: row;
  justify-content: flex-end;
}
.contedo-colaboradores-checkbox11 {
  width: 18px;
  height: 18px;
}
.contedo-colaboradores-cliente4 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-foto4 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
}
.contedo-colaboradores-image17 {
  width: 45px;
  object-fit: cover;
  border-radius: 100%;
}
.contedo-colaboradores-user4 {
  width: calc(100% - 45px);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-colaboradores-name4 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  flex-direction: column;
}
.contedo-colaboradores-acesso4 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
}
.contedo-colaboradores-text38 {
  color: #737373;
  font-size: 14px;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-contato4 {
  width: 20%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-colaboradores-email4 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image18 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-telefone4 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image19 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-situao4 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-text41 {
  color: #737373;
  font-family: Fivo Sans Heavy;
}
.contedo-colaboradores-tipo4 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-statusset4 {
  flex: 0 0 auto;
  width: 70%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: 00A89C;
}
.contedo-colaboradores-ultimo-acesso4 {
  width: 20%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-image20 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-text43 {
  color: #737373;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-clientvalue5 {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-colaboradores-checkbox12 {
  width: 5%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-right: 10px;
  flex-direction: row;
  justify-content: flex-end;
}
.contedo-colaboradores-checkbox13 {
  width: 18px;
  height: 18px;
}
.contedo-colaboradores-cliente5 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-foto5 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
}
.contedo-colaboradores-image21 {
  width: 45px;
  object-fit: cover;
  border-radius: 100%;
}
.contedo-colaboradores-user5 {
  width: calc(100% - 45px);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-colaboradores-name5 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  flex-direction: column;
}
.contedo-colaboradores-acesso5 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
}
.contedo-colaboradores-text45 {
  color: #737373;
  font-size: 14px;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-contato5 {
  width: 20%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-colaboradores-email5 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image22 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-telefone5 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image23 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-situao5 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-text48 {
  color: #737373;
  font-family: Fivo Sans Heavy;
}
.contedo-colaboradores-tipo5 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-statusset5 {
  flex: 0 0 auto;
  width: 70%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: 00A89C;
}
.contedo-colaboradores-ultimo-acesso5 {
  width: 20%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-image24 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-text50 {
  color: #737373;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-clientvalue6 {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-colaboradores-checkbox14 {
  width: 5%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-right: 10px;
  flex-direction: row;
  justify-content: flex-end;
}
.contedo-colaboradores-checkbox15 {
  width: 18px;
  height: 18px;
}
.contedo-colaboradores-cliente6 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-foto6 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
}
.contedo-colaboradores-image25 {
  width: 45px;
  object-fit: cover;
  border-radius: 100%;
}
.contedo-colaboradores-user6 {
  width: calc(100% - 45px);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-colaboradores-name6 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  flex-direction: column;
}
.contedo-colaboradores-acesso6 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
}
.contedo-colaboradores-text52 {
  color: #737373;
  font-size: 14px;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-contato6 {
  width: 20%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-colaboradores-email6 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image26 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-telefone6 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image27 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-situao6 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-text55 {
  color: #737373;
  font-family: Fivo Sans Heavy;
}
.contedo-colaboradores-tipo6 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-statusset6 {
  flex: 0 0 auto;
  width: 70%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: FF9F0D;
}
.contedo-colaboradores-ultimo-acesso6 {
  width: 20%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-image28 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-text57 {
  color: #737373;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-clientvalue7 {
  width: 100%;
  height: 40%;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  padding-top: 10px;
  border-radius: 15px;
  flex-direction: row;
  padding-bottom: 10px;
  background-color: var(--dl-color-gray-white);
}
.contedo-colaboradores-checkbox16 {
  width: 5%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-right: 10px;
  flex-direction: row;
  justify-content: flex-end;
}
.contedo-colaboradores-checkbox17 {
  width: 18px;
  height: 18px;
}
.contedo-colaboradores-cliente7 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-foto7 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
}
.contedo-colaboradores-image29 {
  width: 45px;
  object-fit: cover;
  border-radius: 100%;
}
.contedo-colaboradores-user7 {
  width: calc(100% - 45px);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contedo-colaboradores-name7 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  flex-direction: column;
}
.contedo-colaboradores-acesso7 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
}
.contedo-colaboradores-text59 {
  color: #737373;
  font-size: 14px;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-contato7 {
  width: 20%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
}
.contedo-colaboradores-email7 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image30 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-telefone7 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.contedo-colaboradores-image31 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-situao7 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-text62 {
  color: #737373;
  font-family: Fivo Sans Heavy;
}
.contedo-colaboradores-tipo7 {
  width: 15%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.contedo-colaboradores-statusset7 {
  flex: 0 0 auto;
  width: 70%;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background-color: FF9F0D;
}
.contedo-colaboradores-ultimo-acesso7 {
  width: 20%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
}
.contedo-colaboradores-image32 {
  width: 20px;
  object-fit: cover;
}
.contedo-colaboradores-text64 {
  color: #737373;
  font-family: Fivo Sans Heavy;
  padding-left: 5px;
}
.contedo-colaboradores-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contedo-colaboradores-root-class-name1 {
  top: 0px;
  right: 0px;
  height: 100%;
  position: static;
  align-self: flex-start;
  max-height: 100%;
  min-height: 100%;
  background-color: #f5f5f5;
}
@media(max-width: 1220px) {
  .contedo-colaboradores-text01 {
    font-size: 14px;
  }
  .contedo-colaboradores-text02 {
    font-size: 14px;
  }
  .contedo-colaboradores-text03 {
    font-size: 14px;
  }
}
</style>
