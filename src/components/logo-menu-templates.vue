<template>
  <div class="logo-menu-templates-logo" v-bind:class="rootClassName">
    <img
      :alt="image_alt"
      src="https://res.cloudinary.com/dd9puomgu/image/upload/v1696423695/ccsvrsjp14lwsz0e8don.png"
      class="logo-menu-templates-image"
    />
  </div>
</template>

<script>
export default {
  name: 'LogoMenuTemplates',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    image_src: {
      type: String,
      default: '3e8475b4-c786-4069-bdc8-cabac908f3e4',
    },
  },
}
</script>

<style scoped>
.logo-menu-templates-logo {
  top: 0px;
  left: 0px;
  width: calc(100% - 10px);
  padding: 15px 0px;
  z-index: 9999;
  position: absolute;
  background-color: var(--dl-color-gray-black);
}
.logo-menu-templates-image {
  width: 100%;
  height: auto;
  padding: 0px 25px;
}

</style>
