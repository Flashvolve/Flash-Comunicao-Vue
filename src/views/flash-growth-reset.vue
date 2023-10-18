<template>
  <div class="flash-growth-reset-container">
    <div class="flash-growth-reset-content-left">
      <div class="flash-growth-reset-container1">
        <img
          alt="image"
          src="https://res.cloudinary.com/dd9puomgu/image/upload/v1694793656/l9mubmkcl3gb4g66m9cb.svg"
          class="flash-growth-reset-image"
        />
      </div>
    </div>
    <div class="flash-growth-reset-content-right">
      <div class="flash-growth-reset-container2">
        <recuperar-senha></recuperar-senha>
      </div>
    </div>
  </div>
</template>

<script>
import RecuperarSenha from '../components/recuperar-senha'

export default {
  name: 'FlashGrowthReset',
  components: {
    RecuperarSenha,
  },
  metaInfo: {
    title: 'Flash-Growth-Reset - Flash - Comunicação',
    meta: [
      {
        property: 'og:title',
        content: 'Flash-Growth-Reset - Flash - Comunicação',
      },
    ],
  },
}
</script>

<style scoped>
.flash-growth-reset-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: row;
  background-color: F5F5F5;
}
.flash-growth-reset-content-left {
  flex: 0 0 auto;
  width: 50%;
  height: 100vh;
  display: flex;
  padding: 100px;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: F5F5F5;
}
.flash-growth-reset-container1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.flash-growth-reset-image {
  margin-top: -50px;
  object-fit: cover;
}
.flash-growth-reset-content-right {
  flex: 0 0 auto;
  width: 50%;
  height: 100vh;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #dc0f37;
}
.flash-growth-reset-container2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: 150px;
  align-items: flex-start;
}
</style>
