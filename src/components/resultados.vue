<template>
  <div class="resultados-resultados">
    <div class="resultados-economia">
      <div class="resultados-numeros">
        <span class="dashlead">Você economizou até o momento</span>
        <span class="resultados-text1">{{ text31 }}</span>
        <div class="resultados-container">
          <img
            alt="image"
            src="https://api.iconify.design/icon-park-solid/up-one.svg?color=%2300a89c"
            class="resultados-image"
          />
          <span class="resultados-text2">{{ text312 }}</span>
        </div>
        <div class="resultados-container1">
          <span class="resultados-text3 subtitulo">
            Atualizado hoje, às 10h56
          </span>
        </div>
      </div>
      <div class="resultados-grafico">
        <img
          alt="image"
          src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695067451/kfnw8qw8iuorqruwhwnv.svg"
          class="resultados-image1"
        />
      </div>
    </div>
    <div class="resultados-linha"></div>
    <div class="resultados-status">
      <img
        alt="image"
        src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695141867/d1caokjvqllbn3uweqim.svg"
        class="resultados-image2"
      />
      <div class="resultados-texto-status">
        <span class="resultados-text4 dashlead">
          O seu resultado até o momento comparado a empresas do mesmo segmento
          está: Acima da meta
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resultados',
  props: {
    text312: {
      type: String,
      default: '36,12%',
    },
    rootClassName1: String,
    text31: {
      type: String,
      default: 'R$ 41.654,78',
    },
  },
}
</script>

<style scoped>
.resultados-resultados {
  flex: 0 0 auto;
  width: 60%;
  height: 400px;
  display: flex;
  padding: 40px;
  position: relative;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  align-items: flex-start;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.resultados-economia {
  gap: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.resultados-numeros {
  width: 65%;
  display: flex;
  align-items: flex-start;
  padding-top: 0px;
  padding-right: 0px;
  flex-direction: column;
  padding-bottom: 0px;
  justify-content: flex-end;
}
.resultados-text1 {
  color: #737373;
  width: 100%;
  font-size: 50px;
  align-self: flex-end;
  text-align: right;
  font-family: Russo One;
  padding-top: 10px;
}
.resultados-container {
  width: 100%;
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.resultados-image {
  width: 35px;
  object-fit: cover;
}
.resultados-text2 {
  color: #00A89C;
  font-size: 25px;
  align-self: center;
  text-align: right;
  font-family: Russo One;
}
.resultados-container1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: flex-end;
  align-items: center;
  padding-top: 10px;
  justify-content: flex-end;
}
.resultados-text3 {
  color: #737373;
  font-size: 18px;
  font-family: Fivo Sans Medium;
}
.resultados-grafico {
  width: 35%;
  height: 100%;
  display: flex;
}
.resultados-image1 {
  width: 100%;
  max-width: 200px;
  justify-content: center;
}
.resultados-linha {
  width: 100%;
  height: 2px;
  display: flex;
  background: #dc0f37;
  margin-top: 20px;
  align-items: flex-start;
}
.resultados-status {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px;
  justify-content: flex-end;
}
.resultados-image2 {
  width: 75px;
  object-fit: cover;
}
.resultados-texto-status {
  display: flex;
  position: relative;
}
.resultados-text4 {
  color: #737373;
  font-size: 20px;
  text-align: left;
  font-family: Fivo Sans Medium;
  padding-left: 20px;
}
@media(max-width: 1220px) {
  .resultados-text1 {
    font-size: 35px;
  }
  .resultados-text2 {
    font-size: 20px;
  }
  .resultados-text3 {
    font-size: 14px;
  }
  .resultados-texto-status {
    font-size: 16px;
  }
  .resultados-text4 {
    color: #737373;
    font-size: 18px;
    font-family: Fivo Sans Medium;
    padding-left: 20px;
  }
}
@media(max-width: 957px) {
  .resultados-resultados {
    width: 100%;
    height: fit-content;
    justify-content: flex-start;
  }
}
@media(max-width: 767px) {
  .resultados-text4 {
    font-size: 16px;
  }
}
@media(max-width: 479px) {
  .resultados-economia {
    gap: 15px;
  }
  .resultados-numeros {
    width: 60%;
  }
  .resultados-text1 {
    font-size: 25px;
  }
  .resultados-grafico {
    width: 40%;
  }
}
</style>
