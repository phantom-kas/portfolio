<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';

const props = defineProps({
  dark: { type: Boolean }
})
const isDark = ref(props.dark)
const emit = defineEmits(['dark'])
</script>
<template>

  <nav class=" nav pglr ">
    <ul class="max1500 pglr SMN_effect-15">
      <li>
        <a id="home_nav" class="icc" href="/#home">
          <span>
            <font-awesome-icon :icon="['fas', 'house']" />
          </span>
          Home</a>
      </li>

      <li>

        <a id="projects_nav" class="icc" href="/#projects">
          <span>
            <font-awesome-icon :icon="['fas', 'screwdriver-wrench']" />

          </span>
          Projects</a>
      </li>

      <li>
        <a id="education_nav" class="icc" href="/#education">
          <span>
            <font-awesome-icon :icon="['fas', 'graduation-cap']" />
          </span>
          Education</a>
      </li>


      <li>
        <a id="contact_nav" class="icc" href="/#contact">
          <span>
            <font-awesome-icon :icon="['far', 'comments']" />
          </span>
          Contact</a>
      </li>
      <li>
        <div class="icc" @click="isDark = !isDark, emit('dark', isDark)" href="">

          <span>
            <TransitionGroup name="list">

              <font-awesome-icon v-if="!isDark" :icon="['far', 'sun']" />

              <font-awesome-icon v-else :icon="['far', 'moon']" />

            </TransitionGroup>
          </span>


          Theme
        </div>

      </li>
    </ul>
  </nav>
</template>
<style></style>
<style scoped>
a.active {
  color: rgb(10, 151, 0);
}

.icc>span {

  width: 2rem;
  /* background-color: red; */
}

.nav {
  height: var(--nav-height);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(3px);
  background-color: rgba(10, 36, 1, 0.1);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

  width: 100%;
  position: fixed;
  z-index: 10;
  /* font-family: "Rubik", sans-serif; */
}

.nav>ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-block: 1rem;
  margin-top: 0.4rem;
  width: min(1200px, 100%);

  gap: 4rem;
  font-size: 1.3rem;
  font-weight: 600;
  /* background-color: red;  */
}

.nav>ul>li {
  display: flex;
  cursor: pointer;
  flex-direction: row;
  gap: 1rem;
}

.nav>ul>li>* {
  display: flex;
  /* gap: 1rem; */
}
</style>


<style scoped>
a {
  color: unset;
  text-decoration: none;
}

@media screen and (hover:hover) {

  .SMN_effect-15 a:before,
  .SMN_effect-15 a:after {
    display: inline-block;
    opacity: 0;
    -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
    -moz-transition: -moz-transform 0.3s, opacity 0.2s;
    transition: transform 0.3s, opacity 0.2s;
  }

  .SMN_effect-15 a:before {
    margin-right: 10px;
    content: '[';
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    transform: translateX(20px);
  }

  .SMN_effect-15 a:after {
    margin-left: 10px;
    content: ']';
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  .SMN_effect-15 a:hover:before,
  .SMN_effect-15 a:hover:after,
  .SMN_effect-15 a:focus:before,
  .SMN_effect-15 a:focus:after,


  .SMN_effect-15 a.active:before,
  .SMN_effect-15 a.active:after,
  .SMN_effect-15 a.active:before,
  .SMN_effect-15 a.active:after {
    opacity: 1;
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    transform: translateX(0px);
  }
}

@media screen and (max-width:999px) {
  .nav>ul {
    gap: 2rem;
  }

}

@media screen and (max-width:880px) {
  .nav>ul {
    gap: 2rem;
  }
}

@media screen and (max-width:870px) {
  .nav>ul {
    gap: 2rem;
  }


  .nav>ul {
    /* width: 100%; */
    justify-content: space-between;
    align-items: center;
  }

  .nav>ul>li>* {
    flex-direction: column;
    font-size: 0.7rem;
  }

  a.icc>span,
  div.icc>span {
    display: flex;
    width: 100%;
    margin-bottom: 0.3rem;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }

  .SMN_effect-15 {
    padding-inline: 0px;
  }
}


@media screen and (max-width:425px) {

  a.icc>span,
  div.icc>span {
    font-size: 1rem;
  }

  .nav {
    padding-inline: 0.5rem;
  }

  .nav>ul {
    gap: 1rem;
  }

  .nav>ul>li>* {
    font-size: 0.5rem;
  }
}
</style>
<style>
@media screen and (max-width:870px) {
  .main_sec {
    --nav-height: 5rem;
  }
}

@media screen and (max-width:425px) {
  .main_sec {
    --nav-height: 3rem;
  }
}




.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  position: absolute;
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>