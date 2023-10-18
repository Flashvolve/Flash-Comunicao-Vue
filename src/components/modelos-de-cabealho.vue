<template>
  <div
    class="modelos-de-cabealho-modelos-de-cabealho"
    v-bind:class="rootClassName"
  >
    <header data-role="Header" class="modelos-de-cabealho-header1">
      <img :alt="image_alt" :src="image_src" class="modelos-de-cabealho-image" />
      <div class="modelos-de-cabealho-nav">
        <nav class="modelos-de-cabealho-nav1">
          <span class="modelos-de-cabealho-text">{{ text }}</span>
          <span class="modelos-de-cabealho-text1">{{ text1 }}</span>
          <span class="modelos-de-cabealho-text2">{{ text2 }}</span>
        </nav>
      </div>
      <div class="modelos-de-cabealho-btn-group">
        <button class="modelos-de-cabealho-login button">{{ Login }}</button>
      </div>
      <div data-role="BurgerMenu" class="modelos-de-cabealho-burger-menu">
        <img
          :alt="image_alt3"
          :src="image_src3"
          class="modelos-de-cabealho-image1"
        />
      </div>
      <div data-role="MobileMenu" class="modelos-de-cabealho-mobile-menu">
        <div class="modelos-de-cabealho-nav2">
          <div class="modelos-de-cabealho-container">
            <img
              :alt="image_alt6"
              :src="image_src6"
              class="modelos-de-cabealho-image2"
            />
            <div
              data-role="CloseMobileMenu"
              class="modelos-de-cabealho-menu-close"
            >
              <svg viewBox="0 0 1024 1024" class="modelos-de-cabealho-icon">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <navigation-links rootClassName="rootClassName11"></navigation-links>
        </div>
        <div>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            class="modelos-de-cabealho-icon02"
          >
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
            ></path></svg
          ><svg
            viewBox="0 0 877.7142857142857 1024"
            class="modelos-de-cabealho-icon04"
          >
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg
          ><svg
            viewBox="0 0 602.2582857142856 1024"
            class="modelos-de-cabealho-icon06"
          >
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
    <header data-role="Header" class="modelos-de-cabealho-header2">
      <img
        :alt="image_alt1"
        :src="image_src1"
        class="modelos-de-cabealho-image3"
      />
      <div class="modelos-de-cabealho-nav3">
        <nav class="modelos-de-cabealho-nav4">
          <span class="modelos-de-cabealho-text3">{{ text3 }}</span>
          <span class="modelos-de-cabealho-text4">{{ text4 }}</span>
          <span class="modelos-de-cabealho-text5">{{ text5 }}</span>
        </nav>
      </div>
      <div class="modelos-de-cabealho-btn-group1">
        <button class="modelos-de-cabealho-login1 button">{{ Login1 }}</button>
      </div>
      <div data-role="BurgerMenu" class="modelos-de-cabealho-burger-menu1">
        <img
          :alt="image_alt4"
          :src="image_src4"
          class="modelos-de-cabealho-image4"
        />
      </div>
      <div data-role="MobileMenu" class="modelos-de-cabealho-mobile-menu1">
        <div class="modelos-de-cabealho-nav5">
          <div class="modelos-de-cabealho-container1">
            <img
              :alt="image_alt7"
              :src="image_src7"
              class="modelos-de-cabealho-image5"
            />
            <div
              data-role="CloseMobileMenu"
              class="modelos-de-cabealho-menu-close1"
            >
              <svg viewBox="0 0 1024 1024" class="modelos-de-cabealho-icon08">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <navigation-links rootClassName="rootClassName8"></navigation-links>
        </div>
        <div>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            class="modelos-de-cabealho-icon10"
          >
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
            ></path></svg
          ><svg
            viewBox="0 0 877.7142857142857 1024"
            class="modelos-de-cabealho-icon12"
          >
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg
          ><svg
            viewBox="0 0 602.2582857142856 1024"
            class="modelos-de-cabealho-icon14"
          >
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
    <header data-role="Header" class="modelos-de-cabealho-header3">
      <img
        :alt="image_alt2"
        :src="image_src2"
        class="modelos-de-cabealho-image6"
      />
      <div class="modelos-de-cabealho-nav6">
        <nav class="modelos-de-cabealho-nav7">
          <span class="modelos-de-cabealho-text6">{{ text6 }}</span>
          <span class="modelos-de-cabealho-text7">{{ text7 }}</span>
          <span class="modelos-de-cabealho-text8">{{ text8 }}</span>
        </nav>
      </div>
      <div class="modelos-de-cabealho-btn-group2">
        <button class="modelos-de-cabealho-login2 button">{{ Login2 }}</button>
      </div>
      <div data-role="BurgerMenu" class="modelos-de-cabealho-burger-menu2">
        <img
          :alt="image_alt5"
          :src="image_src5"
          class="modelos-de-cabealho-image7"
        />
      </div>
      <div data-role="MobileMenu" class="modelos-de-cabealho-mobile-menu2">
        <div class="modelos-de-cabealho-nav8">
          <div class="modelos-de-cabealho-container2">
            <img
              :alt="image_alt8"
              :src="image_src8"
              class="modelos-de-cabealho-image8"
            />
            <div
              data-role="CloseMobileMenu"
              class="modelos-de-cabealho-menu-close2"
            >
              <svg viewBox="0 0 1024 1024" class="modelos-de-cabealho-icon16">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <navigation-links rootClassName="rootClassName9"></navigation-links>
        </div>
        <div>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            class="modelos-de-cabealho-icon18"
          >
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
            ></path></svg
          ><svg
            viewBox="0 0 877.7142857142857 1024"
            class="modelos-de-cabealho-icon20"
          >
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg
          ><svg
            viewBox="0 0 602.2582857142856 1024"
            class="modelos-de-cabealho-icon22"
          >
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import NavigationLinks from './navigation-links'

export default {
  name: 'ModelosDeCabealho',
  props: {
    rootClassName: String,
    image_src7: {
      type: String,
      default:
        'https://presentation-website-assets.teleporthq.io/logos/logo.png',
    },
    image_src3: {
      type: String,
      default: 'https://api.iconify.design/ic/round-menu.svg?color=%23fccf00',
    },
    image_alt4: {
      type: String,
      default: 'image',
    },
    image_src5: {
      type: String,
      default: 'https://api.iconify.design/ic/round-menu.svg?color=black',
    },
    image_alt6: {
      type: String,
      default: 'image',
    },
    Login2: {
      type: String,
      default: 'Login',
    },
    text5: {
      type: String,
      default: 'Fale conosco',
    },
    Login1: {
      type: String,
      default: 'Login',
    },
    image_alt3: {
      type: String,
      default: 'image',
    },
    text4: {
      type: String,
      default: 'Sobre nós',
    },
    image_alt2: {
      type: String,
      default: 'logo',
    },
    text: {
      type: String,
      default: 'Soluções',
    },
    image_alt8: {
      type: String,
      default: 'image',
    },
    image_alt1: {
      type: String,
      default: 'logo',
    },
    image_src8: {
      type: String,
      default:
        'https://presentation-website-assets.teleporthq.io/logos/logo.png',
    },
    text2: {
      type: String,
      default: 'Fale conosco',
    },
    Login: {
      type: String,
      default: 'Login',
    },
    image_src2: {
      type: String,
      default:
        'https://res.cloudinary.com/dd9puomgu/image/upload/v1696512993/rqgf2ndrdifaity9hes2.png',
    },
    image_src6: {
      type: String,
      default:
        'https://presentation-website-assets.teleporthq.io/logos/logo.png',
    },
    image_alt5: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default:
        'https://res.cloudinary.com/dd9puomgu/image/upload/v1696512252/lvpkjmbx0a9xapjxt3hr.png',
    },
    text8: {
      type: String,
      default: 'Fale conosco',
    },
    image_src: {
      type: String,
      default:
        'https://res.cloudinary.com/dd9puomgu/image/upload/v1696513070/psdmqyxsdq5rnoedznco.png',
    },
    text1: {
      type: String,
      default: 'Sobre nós',
    },
    text7: {
      type: String,
      default: 'Sobre nós',
    },
    image_src4: {
      type: String,
      default: 'https://api.iconify.design/ic/round-menu.svg?color=black',
    },
    text3: {
      type: String,
      default: 'Soluções',
    },
    image_alt: {
      type: String,
      default: 'logo',
    },
    image_alt7: {
      type: String,
      default: 'image',
    },
    text6: {
      type: String,
      default: 'Soluções',
    },
  },
  components: {
    NavigationLinks,
  },
}
</script>

<style scoped>
.modelos-de-cabealho-modelos-de-cabealho {
  gap: 50px;
  flex: 0 0 auto;
  width: calc(100% - 300px);
  height: 100vh;
  display: flex;
  padding: 40px;
  position: relative;
  align-items: flex-start;
  margin-left: 300px;
  flex-direction: column;
}
.modelos-de-cabealho-header1 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.10);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
  background-color: var(--dl-color-gray-black);
}
.modelos-de-cabealho-image {
  height: 22px;
}
.modelos-de-cabealho-nav {
  display: flex;
}
.modelos-de-cabealho-nav1 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.modelos-de-cabealho-text {
  color: var(--dl-color-gray-white);
  transition: 0.3s;
  font-family: "Fivo Sans Medium";
}
.modelos-de-cabealho-text:hover {
  color: #ffcf00;
}
.modelos-de-cabealho-text1 {
  color: var(--dl-color-gray-white);
  transition: 0.3s;
  font-family: "Fivo Sans Medium";
  margin-left: var(--dl-space-space-twounits);
}
.modelos-de-cabealho-text1:hover {
  color: #fccf00;
}
.modelos-de-cabealho-text2 {
  color: var(--dl-color-gray-white);
  transition: 0.3s;
  font-family: "Fivo Sans Medium";
  margin-left: var(--dl-space-space-twounits);
}
.modelos-de-cabealho-text2:hover {
  color: #fccf00;
}
.modelos-de-cabealho-btn-group {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.modelos-de-cabealho-login {
  transition: 0.3s;
  font-family: "Fivo Sans Medium";
  border-width: 0px;
  background-color: #fccf00;
}
.modelos-de-cabealho-login:hover {
  background-color: var(--dl-color-gray-white);
}
.modelos-de-cabealho-burger-menu {
  display: none;
}
.modelos-de-cabealho-image1 {
  width: 25px;
  height: 25px;
}
.modelos-de-cabealho-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.modelos-de-cabealho-nav2 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.modelos-de-cabealho-container {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.modelos-de-cabealho-image2 {
  height: 2rem;
}
.modelos-de-cabealho-menu-close {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modelos-de-cabealho-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.modelos-de-cabealho-icon02 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.modelos-de-cabealho-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.modelos-de-cabealho-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.modelos-de-cabealho-header2 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.10);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
  background-color: #fccf00;
}
.modelos-de-cabealho-image3 {
  height: 26px;
}
.modelos-de-cabealho-nav3 {
  display: flex;
}
.modelos-de-cabealho-nav4 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.modelos-de-cabealho-text3 {
  color: var(--dl-color-gray-black);
  transition: 0.3s;
  font-family: "Fivo Sans Medium";
}
.modelos-de-cabealho-text3:hover {
  color: var(--dl-color-gray-white);
}
.modelos-de-cabealho-text4 {
  color: var(--dl-color-gray-black);
  transition: 0.3s;
  font-family: "Fivo Sans Medium";
  margin-left: var(--dl-space-space-twounits);
}
.modelos-de-cabealho-text4:hover {
  color: var(--dl-color-gray-white);
}
.modelos-de-cabealho-text5 {
  color: var(--dl-color-gray-black);
  transition: 0.3s;
  font-family: "Fivo Sans Medium";
  margin-left: var(--dl-space-space-twounits);
}
.modelos-de-cabealho-text5:hover {
  color: var(--dl-color-gray-white);
}
.modelos-de-cabealho-btn-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.modelos-de-cabealho-login1 {
  color: var(--dl-color-gray-white);
  transition: 0.3s;
  font-family: "Fivo Sans Medium";
  border-width: 0px;
  background-color: var(--dl-color-gray-black);
}
.modelos-de-cabealho-login1:hover {
  color: var(--dl-color-gray-black);
  background-color: var(--dl-color-gray-white);
}
.modelos-de-cabealho-burger-menu1 {
  display: none;
}
.modelos-de-cabealho-image4 {
  width: 25px;
  height: 25px;
}
.modelos-de-cabealho-mobile-menu1 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.modelos-de-cabealho-nav5 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.modelos-de-cabealho-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.modelos-de-cabealho-image5 {
  height: 2rem;
}
.modelos-de-cabealho-menu-close1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modelos-de-cabealho-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.modelos-de-cabealho-icon10 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.modelos-de-cabealho-icon12 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.modelos-de-cabealho-icon14 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.modelos-de-cabealho-header3 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.10);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}
.modelos-de-cabealho-image6 {
  height: 26px;
}
.modelos-de-cabealho-nav6 {
  display: flex;
}
.modelos-de-cabealho-nav7 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.modelos-de-cabealho-text6 {
  color: var(--dl-color-gray-black);
  transition: 0.3s;
  font-family: "Fivo Sans Medium";
}
.modelos-de-cabealho-text6:hover {
  color: #fccf00;
}
.modelos-de-cabealho-text7 {
  color: var(--dl-color-gray-black);
  transition: 0.3s;
  font-family: "Fivo Sans Medium";
  margin-left: var(--dl-space-space-twounits);
}
.modelos-de-cabealho-text7:hover {
  color: #fccf00;
}
.modelos-de-cabealho-text8 {
  color: var(--dl-color-gray-black);
  transition: 0.3s;
  font-family: "Fivo Sans Medium";
  margin-left: var(--dl-space-space-twounits);
}
.modelos-de-cabealho-text8:hover {
  color: #fccf00;
}
.modelos-de-cabealho-btn-group2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.modelos-de-cabealho-login2 {
  color: var(--dl-color-gray-black);
  transition: 0.3s;
  font-family: "Fivo Sans Medium";
  border-width: 0px;
  background-color: #fccf00;
}
.modelos-de-cabealho-login2:hover {
  color: #fccf00;
  background-color: var(--dl-color-gray-black);
}
.modelos-de-cabealho-burger-menu2 {
  display: none;
}
.modelos-de-cabealho-image7 {
  width: 25px;
  height: 25px;
}
.modelos-de-cabealho-mobile-menu2 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.modelos-de-cabealho-nav8 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.modelos-de-cabealho-container2 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.modelos-de-cabealho-image8 {
  height: 2rem;
}
.modelos-de-cabealho-menu-close2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modelos-de-cabealho-icon16 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.modelos-de-cabealho-icon18 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.modelos-de-cabealho-icon20 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.modelos-de-cabealho-icon22 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}

@media(max-width: 767px) {
  .modelos-de-cabealho-header1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .modelos-de-cabealho-nav {
    display: none;
  }
  .modelos-de-cabealho-nav1 {
    align-items: flex-start;
    flex-direction: column;
  }
  .modelos-de-cabealho-text {
    margin-bottom: var(--dl-space-space-unit);
  }
  .modelos-de-cabealho-text1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .modelos-de-cabealho-text2 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .modelos-de-cabealho-btn-group {
    display: none;
  }
  .modelos-de-cabealho-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modelos-de-cabealho-header2 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .modelos-de-cabealho-nav3 {
    display: none;
  }
  .modelos-de-cabealho-nav4 {
    align-items: flex-start;
    flex-direction: column;
  }
  .modelos-de-cabealho-text3 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .modelos-de-cabealho-text4 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .modelos-de-cabealho-text5 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .modelos-de-cabealho-btn-group1 {
    display: none;
  }
  .modelos-de-cabealho-burger-menu1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modelos-de-cabealho-header3 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .modelos-de-cabealho-nav6 {
    display: none;
  }
  .modelos-de-cabealho-nav7 {
    align-items: flex-start;
    flex-direction: column;
  }
  .modelos-de-cabealho-text6 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .modelos-de-cabealho-text7 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .modelos-de-cabealho-text8 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .modelos-de-cabealho-btn-group2 {
    display: none;
  }
  .modelos-de-cabealho-burger-menu2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media(max-width: 479px) {
  .modelos-de-cabealho-header1 {
    padding: var(--dl-space-space-unit);
  }
  .modelos-de-cabealho-mobile-menu {
    padding: 16px;
  }
  .modelos-de-cabealho-header2 {
    padding: var(--dl-space-space-unit);
  }
  .modelos-de-cabealho-mobile-menu1 {
    padding: 16px;
  }
  .modelos-de-cabealho-header3 {
    padding: var(--dl-space-space-unit);
  }
  .modelos-de-cabealho-mobile-menu2 {
    padding: 16px;
  }
}
</style>
