<template>
  <div class="step-by-step-growth-container">
    <pop-upintro rootClassName="pop-upintro-root-class-name"></pop-upintro>
    <pop-up01 rootClassName="pop-up01-root-class-name"></pop-up01>
    <pop-up02 rootClassName="pop-up02-root-class-name"></pop-up02>
    <pop-up03 rootClassName="pop-up03-root-class-name"></pop-up03>
    <pop-up04 rootClassName="pop-up04-root-class-name"></pop-up04>
    <pop-up05 rootClassName="pop-up05-root-class-name"></pop-up05>
    <pop-up06 rootClassName="pop-up06-root-class-name"></pop-up06>
  </div>
</template>

<script>
import PopUpintro from '../components/pop-upintro'
import PopUp01 from '../components/pop-up01'
import PopUp02 from '../components/pop-up02'
import PopUp03 from '../components/pop-up03'
import PopUp04 from '../components/pop-up04'
import PopUp05 from '../components/pop-up05'
import PopUp06 from '../components/pop-up06'

export default {
  name: 'StepByStepGrowth',
  components: {
    PopUpintro,
    PopUp01,
    PopUp02,
    PopUp03,
    PopUp04,
    PopUp05,
    PopUp06,
  },
  metaInfo: {
    title: 'Step-by-Step-Growth - Flash - Comunicação',
    meta: [
      {
        property: 'og:title',
        content: 'Step-by-Step-Growth - Flash - Comunicação',
      },
    ],
  },
}
</script>

<style scoped>
.step-by-step-growth-container {
  display: flex;
  padding: 40px;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-900);
}
</style>
