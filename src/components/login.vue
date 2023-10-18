<template>
  <div class="login-container" v-bind:class="rootClassName">
    <div class="login-logo">
      <img :alt="image_alt" :src="image_src" class="login-image" />
    </div>
    <div class="login-sectionname">
      <span class="login-text">{{ text }}</span>
    </div>
    <div class="login-email">
      <span class="login-text1">{{ text1 }}</span>
      <input
        type="text"
        :placeholder="textinput_placeholder"
        class="login-textinput input"
      />
    </div>
    <div class="login-senha">
      <span class="login-text2">{{ text2 }}</span>
      <input
        type="text"
        :placeholder="textinput_placeholder1"
        class="login-textinput1 input"
      />
    </div>
    <div class="login-logininfo">
      <div class="login-senhainfo">
        <div class="login-manterconectado">
          <input type="checkbox" class="login-checkbox" />
          <span class="login-text3">{{ text3 }}</span>
        </div>
        <div class="login-alterarsenha">
          <span class="login-text4">{{ text4 }}</span>
        </div>
      </div>
    </div>
    <div class="login-botao">
      <div class="login-botaoaction">
        <span class="login-text5">{{ Text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    textinput_placeholder1: {
      type: String,
      default: 'Senha',
    },
    text1: {
      type: String,
      default: 'E-mail',
    },
    text: {
      type: String,
      default: 'Login',
    },
    textinput_placeholder: {
      type: String,
      default: 'E-email',
    },
    text2: {
      type: String,
      default: 'Senha',
    },
    text3: {
      type: String,
      default: 'Manter conectado',
    },
    text4: {
      type: String,
      default: 'Alterar senha',
    },
    image_src: {
      type: String,
      default:
        'https://res.cloudinary.com/dd9puomgu/image/upload/v1695736645/dzhofokf4nj4kbtplv3x.svg',
    },
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'image',
    },
    Text: {
      type: String,
      default: 'Entrar',
    },
  },
}
</script>

<style scoped>
.login-container {
  gap: 10px;
  width: 100%;
  display: flex;
  padding: 40px;
  position: relative;
  max-width: 450px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.10);
  align-items: flex-start;
  border-radius: 12px;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.login-logo {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.login-image {
  width: 100%;
  object-fit: cover;
  margin-left: -10px;
}
.login-sectionname {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: 30px;
  align-items: flex-start;
  flex-direction: column;
}
.login-text {
  color: var(--dl-color-gray-black);
  font-size: 30px;
  font-family: Fivo Sans Heavy;
}
.login-email {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
  flex-direction: column;
}
.login-text1 {
  color: #dc0f37;
  font-size: 16px;
  font-family: Fivo Sans Heavy;
}
.login-textinput {
  width: 100%;
  border-color: #737373;
}
.login-senha {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.login-text2 {
  color: #dc0f37;
  font-family: Fivo Sans Heavy;
}
.login-textinput1 {
  width: 100%;
  border-color: #737373;
}
.login-logininfo {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.login-senhainfo {
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
}
.login-manterconectado {
  display: flex;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
  justify-content: space-between;
}
.login-checkbox {
  width: 18px;
  height: 18px;
}
.login-text3 {
  color: #dc0f37;
  font-size: 16px;
  font-family: Fivo Sans Heavy;
  margin-left: 10px;
}
.login-alterarsenha {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.login-text4 {
  color: #737373;
  font-size: 16px;
  font-family: Fivo Sans Heavy;
  margin-right: 10px;
}
.login-botao {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
}
.login-botaoaction {
  flex: 0 0 auto;
  width: 100%;
  height: 50px;
  display: flex;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: #dc0f37;
}
.login-text5 {
  color: var(--dl-color-gray-white);
  font-size: 18px;
  align-self: center;
  text-align: center;
  font-family: Fivo Sans Medium;
}

@media(max-width: 479px) {
  .login-container {
    padding: 20px;
  }
  .login-sectionname {
    margin-top: 20px;
  }
  .login-text {
    font-size: 20px;
  }
  .login-text3 {
    font-size: 12px;
  }
  .login-text4 {
    font-size: 12px;
  }
}
</style>
