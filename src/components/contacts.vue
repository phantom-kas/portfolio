<script setup lang='ts'>
// import handelObserver from '@/handelObserver';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { onMounted, ref } from 'vue';

// onMounted(() => {
//   handelObserver('contact', '/#contact', 'contact')
// })
const props = defineProps({
  dark: { type: Boolean }
})
const isDark = ref(props.dark)
</script>
<template>
  <div id="contact" class="contact pglr sec">

    <h1 class="title">
      <font-awesome-icon :icon="['far', 'comments']" />

      Contact me
    </h1>

    <a :class="{'dark':!isDark}" href="https://wa.me/233552284289?" class="cont_btn">
      <font-awesome-icon size="1x" :icon="['fab', 'whatsapp']" />
      <span>0552284289</span>
    </a>
    <a class="cont_btn" :class="{'dark':!isDark}" href="mailto:kannyirisafana@outlook.com">
      <font-awesome-icon size="1x" :icon="['far', 'envelope']" />
      <span>kannyirisafana@outlook.com</span>
    </a>
    <a class="cont_btn" :class="{'dark':!isDark}"  href="tel:0552284289">
      <font-awesome-icon :icon="['fas', 'phone']" size="1x" />
      <span>0552284289</span>
    </a>
    <a class="cont_btn" :class="{'dark':!isDark}"  href="www.linkedin.com/in/kannyiri-safana-4a3060231">
      <font-awesome-icon :icon="['fab', 'linkedin']" size="1x" />
      <span>kannyiri Safana</span>
    </a>
  </div>
</template>
<style scoped>
.title {
  margin-bottom: 2rem;
}

a {
  text-decoration: none;
  cursor: pointer;
}

.contact {
  width: min(1200px, 100%);
  font-size: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 7rem;
  column-gap: 4rem;
  row-gap: 1rem;
}

.contact>a {
  border: 1px solid var(--color-text2);
  border-radius: 70px;
  padding: 0.5rem 1rem;
  color: var(--color-text2);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact>a>span {
  color: var(--color-text);
}

@media screen and (max-width:366px) {
  .contact {
    font-size: 1rem;
  }
}



@media screen and (max-width:407px) {
  .hero {
    font-size: calc(0.5vw + 2.5rem);
  }
}


.cont_btn {
  /* align-items: center;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;   */

  gap: 5px;
  left: 10px;
  /* padding: 10px 20px; */
 
  text-decoration: none;

}

a.cont_btn.dark {
  color: white;
  background-color: rgb(0, 0, 0);
}


a.cont_btn.dark>span{
  color: white;
}
.cont_btn.dark:hover span{
  color: black;

}
.cont_btn.dark:hover {
  color: black;
  border: 1px solid rgba(0, 100, 0, 0.5);
  background-color: rgba(0, 100, 0, 0.1);
}
.cont_btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
