<template>
  <div class="profile-templates-profile" v-bind:class="rootClassName">
    <div class="profile-templates-foto">
      <img
        alt="image"
        src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695044084/jsnns64kvxwhtb4hhzq3.png"
        class="profile-templates-image"
      />
    </div>
    <div class="profile-templates-user">
      <span class="profile-templates-nome">{{ text }}</span>
      <span class="profile-templates-email">{{ text1 }}</span>
    </div>
    <div class="profile-templates-icon">
      <img
        alt="image"
        src="https://api.iconify.design/ci/log-out.svg?color=%23fccf00"
        class="profile-templates-image1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileTemplates',
  props: {
    text1: {
      type: String,
      default: 'bsantos@flashvolve.com',
    },
    text: {
      type: String,
      default: 'Bruno Santos',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.profile-templates-profile {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  position: relative;
  align-self: flex-end;
  align-items: center;
}
.profile-templates-foto {
  flex: 0 0 auto;
  width: 15%;
  display: flex;
  align-items: flex-start;
}
.profile-templates-image {
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.profile-templates-user {
  width: 65%;
  display: flex;
  flex-direction: column;
}
.profile-templates-nome {
  color: #ffffff;
  font-size: 18px;
  text-align: left;
  font-family: Fivo Sans Medium;
  margin-left: 10px;
}
.profile-templates-email {
  color: var(--dl-color-gray-white);
  font-size: 14px;
  text-align: left;
  font-family: Fivo Sans Medium;
  margin-left: 10px;
}
.profile-templates-icon {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.profile-templates-image1 {
  width: 80%;
  align-self: flex-end;
  object-fit: cover;
}

</style>
