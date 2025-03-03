<script setup lang='ts'>
// import handelObserver from '@/handelObserver';
import { onMounted } from 'vue';

defineProps({
  dark:{type:Boolean}
})

// onMounted(()=>{
//   handelObserver('home', '/#home', 'home')
// })
</script>
<template>
  <div id="home" class="hero sec">
    <h1>Hi I'm</h1>
    <h2 class="pglr">Kannyiri Abdulai Safana</h2>
    <h3>Full Stack Developer.</h3>

    <a :class="{'dark':!dark}" class="cont_btn" href="/#contact">Contact Me</a>
  </div>
</template>
<style scoped>
.hero {
  margin-top: var(--nav-height);
  height: min(calc(100vh - 5rem), 700px);
  /* background-color: red; */
  line-height: 1;
  font-weight: 600;
  font-size: calc(0.7vw + 3rem);
  /* font-family: "Rubik", sans-serif; */
}

.hero h1 {}

.hero h2 {
  margin-top: 1.5rem;
}

.hero h3 {
  margin-top: 1rem;
  font-size: calc(0.5vw + 1.8rem);
  ;
}

.hero {
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.cont_btn {
  padding: 1rem 2rem;
  color: unset;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.7rem;
  margin-top: 4rem;
  background-color: black;
  color: white;
  transition: all 0.2s;
}

/* .cont_btn:hover{
  color: black;
  
  background-color: greenyellow;
} */


@media screen and (max-width:407px) {
  .hero {
    font-size: calc(0.5vw + 2.5rem);
  }
}


.cont_btn {
  align-items: center;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;  

  gap: 5px;
  left: 10px;
  /* padding: 10px 20px; */
 
  text-decoration: none;

}
.cont_btn.dark {
  background-color: rgb(0, 0, 0);
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
