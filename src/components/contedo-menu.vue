<template>
  <div class="contedo-menu-contedo" v-bind:class="rootClassName">
    <div id="teste123" class="contedo-menu-container hover-menu-button">
      <button type="button" class="contedo-menu-botao-menu">
        <img :alt="image_alt2" :src="image_src2" class="contedo-menu-image" />
        <span class="contedo-menu-text MenuBarra">{{ text2 }}</span>
      </button>
    </div>
    <div id="teste123" class="contedo-menu-container1 hover-menu-button">
      <button type="button" class="contedo-menu-botao-menu1">
        <img :alt="image_alt3" :src="image_src3" class="contedo-menu-image1" />
        <span class="MenuBarra">{{ text3 }}</span>
      </button>
    </div>
    <div id="teste123" class="contedo-menu-container2 hover-menu-button">
      <button type="button" class="contedo-menu-botao-menu2">
        <img
          :alt="image_alt31"
          src="https://api.iconify.design/icon-park-outline/market-analysis.svg?color=white"
          class="contedo-menu-image2"
        />
        <span class="MenuBarra">{{ text31 }}</span>
      </button>
    </div>
    <div id="teste123" class="contedo-menu-container3 hover-menu-button">
      <button type="button" class="contedo-menu-botao-menu3">
        <img :alt="image_alt4" :src="image_src4" class="contedo-menu-image3" />
        <span class="MenuBarra">{{ text4 }}</span>
      </button>
    </div>
    <div id="teste123" class="contedo-menu-container4 hover-menu-button">
      <button type="button" class="contedo-menu-botao-menu4">
        <img :alt="image_alt5" :src="image_src5" class="contedo-menu-image4" />
        <span class="MenuBarra">{{ text5 }}</span>
      </button>
    </div>
    <div id="teste123" class="contedo-menu-container5 hover-menu-button">
      <button type="button" class="contedo-menu-botao-menu5">
        <img :alt="image_alt6" :src="image_src6" class="contedo-menu-image5" />
        <span class="MenuBarra">{{ text6 }}</span>
      </button>
    </div>
    <div id="teste123" class="contedo-menu-container6 hover-menu-button">
      <button type="button" class="contedo-menu-botao-menu6">
        <img :alt="image_alt7" :src="image_src7" class="contedo-menu-image6" />
        <span class="MenuBarra">{{ text7 }}</span>
      </button>
    </div>
    <div id="teste123" class="contedo-menu-container7 hover-menu-button">
      <button type="button" class="contedo-menu-botao-menu7">
        <img :alt="image_alt8" :src="image_src8" class="contedo-menu-image7" />
        <span class="MenuBarra">{{ text8 }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContedoMenu',
  props: {
    rootClassName4: String,
    image_alt6: {
      type: String,
      default: 'image',
    },
    rootClassName3: String,
    text6: {
      type: String,
      default: 'Conversas',
    },
    text4: {
      type: String,
      default: 'Segmentação',
    },
    text: {
      type: String,
      default: 'Segmentação',
    },
    image_alt3: {
      type: String,
      default: 'image',
    },
    text3: {
      type: String,
      default: 'Colaboradores',
    },
    image_src3: {
      type: String,
      default: '/Novos ícones/colaboradores-200h.png',
    },
    rootClassName8: String,
    image_src8: {
      type: String,
      default: '/Novos ícones/helpdesk-200h.png',
    },
    rootClassName41: String,
    image_src6: {
      type: String,
      default: '/Novos ícones/chat-200h.png',
    },
    image_alt31: {
      type: String,
      default: 'image',
    },
    text31: {
      type: String,
      default: 'Campanhas',
    },
    rootClassName9: String,
    rootClassName: String,
    image_src1: {
      type: String,
      default: '732bffa7-4955-40e8-a8e2-b60f99dd387d',
    },
    image_alt8: {
      type: String,
      default: 'image',
    },
    text5: {
      type: String,
      default: 'Disparos',
    },
    image_src2: {
      type: String,
      default: '/Novos ícones/dashboard-200h.png',
    },
    image_src: {
      type: String,
      default: 'dd97e8e5-a3d2-41f9-be75-66d6bdc5ab4c',
    },
    text2: {
      type: String,
      default: 'Dashboard',
    },
    rootClassName1: String,
    text7: {
      type: String,
      default: 'Integrações',
    },
    text1: {
      type: String,
      default: 'Disparos',
    },
    image_src4: {
      type: String,
      default: '/Novos ícones/segmentacao-200h.png',
    },
    rootClassName6: String,
    rootClassName7: String,
    rootClassName5: String,
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_alt5: {
      type: String,
      default: 'image',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    text8: {
      type: String,
      default: 'Helpdesk',
    },
    image_alt2: {
      type: String,
      default: 'image',
    },
    rootClassName2: String,
    image_src31: {
      type: String,
      default: 'edf8a28c-c6c7-47f9-8796-c7fe24826088',
    },
    image_src5: {
      type: String,
      default: '/Novos ícones/disparos-200h.png',
    },
    image_alt7: {
      type: String,
      default: 'image',
    },
    image_src7: {
      type: String,
      default: '/Novos ícones/integracoes-200h.png',
    },
    image_alt4: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.contedo-menu-contedo {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.contedo-menu-container {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
}
.contedo-menu-botao-menu {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.contedo-menu-image {
  width: 35px;
  object-fit: cover;
}
.contedo-menu-text {
  font-family: "Fivo Sans Medium";
}
.contedo-menu-container1 {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
}
.contedo-menu-botao-menu1 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.contedo-menu-image1 {
  width: 35px;
  object-fit: cover;
}
.contedo-menu-container2 {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
  padding-left: 10px;
}
.contedo-menu-botao-menu2 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.contedo-menu-image2 {
  width: 30px;
  object-fit: cover;
  margin-left: 4px;
  margin-right: 1px;
}
.contedo-menu-container3 {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
}
.contedo-menu-botao-menu3 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.contedo-menu-image3 {
  width: 35px;
  object-fit: cover;
}
.contedo-menu-container4 {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
}
.contedo-menu-botao-menu4 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.contedo-menu-image4 {
  width: 35px;
  object-fit: cover;
}
.contedo-menu-container5 {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
}
.contedo-menu-botao-menu5 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.contedo-menu-image5 {
  width: 35px;
  object-fit: cover;
}
.contedo-menu-container6 {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
  padding-left: 10px;
}
.contedo-menu-botao-menu6 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.contedo-menu-image6 {
  width: 35px;
  object-fit: cover;
}
.contedo-menu-container7 {
  width: 100%;
  border: none;
  display: flex;
  padding: 10px;
  position: relative;
}
.contedo-menu-botao-menu7 {
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0);
}
.contedo-menu-image7 {
  width: 35px;
  object-fit: cover;
}
</style>
