<template>
  <div class="logo-menu-logo">
    <img
      alt="image"
      src="https://res.cloudinary.com/dd9puomgu/image/upload/v1697057274/wgicw4hdtiqcsatxbdr9.svg"
      class="logo-menu-image"
    />
  </div>
</template>

<script>
export default {
  name: 'LogoMenu',
  props: {
    image_src: {
      type: String,
      default: '3e8475b4-c786-4069-bdc8-cabac908f3e4',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.logo-menu-logo {
  top: 0px;
  left: 0px;
  width: calc(100% - 10px);
  padding: 30px 0px;
  position: absolute;
  background: #FF9F0D;
}
.logo-menu-image {
  width: 100%;
  height: auto;
  padding: 0px 25px;
  background-color: #FF9F0D;
}
</style>
