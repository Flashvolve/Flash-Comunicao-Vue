<template>
  <div class="profile-profile" v-bind:class="rootClassName">
    <div class="profile-foto">
      <img
        alt="image"
        src="https://res.cloudinary.com/dd9puomgu/image/upload/v1695044084/jsnns64kvxwhtb4hhzq3.png"
        class="profile-image"
      />
    </div>
    <div class="profile-user">
      <span class="profile-nome">{{ text }}</span>
      <span class="profile-nome1">{{ text1 }}</span>
    </div>
    <div class="profile-icon">
      <img
        alt="image"
        src="https://api.iconify.design/ci/log-out.svg?color=white"
        class="profile-image1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    text1: {
      type: String,
      default: 'bsantos@flashvolve.com',
    },
    rootClassName: String,
    text: {
      type: String,
      default: 'Bruno Santos',
    },
  },
}
</script>

<style scoped>
.profile-profile {
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  position: relative;
  align-self: flex-end;
  align-items: center;
}
.profile-foto {
  flex: 0 0 auto;
  width: 15%;
  display: flex;
  align-items: flex-start;
}
.profile-image {
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.profile-user {
  width: 65%;
  display: flex;
  flex-direction: column;
}
.profile-nome {
  color: #ffffff;
  font-size: 18px;
  text-align: left;
  font-family: Fivo Sans Medium;
  margin-left: 10px;
}
.profile-nome1 {
  color: #ffffff;
  font-size: 14px;
  text-align: left;
  font-family: Fivo Sans Medium;
  margin-left: 10px;
}
.profile-icon {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.profile-image1 {
  width: 80%;
  align-self: flex-end;
  object-fit: cover;
}
.profile-root-class-name {
  height: auto;
  margin-top: 0px;
}
</style>
