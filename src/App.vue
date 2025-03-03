<script setup lang='ts'>
import navbar from '@/components/navbar.vue'
import hero from '@/components/hero.vue'
import projects from './components/projects.vue';
import past_experience from './components/past_experience.vue';
import education from './components/education.vue';
import contacts from './components/contacts.vue';
import { onMounted, ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import handelObserver from './handelObserver';

const isDark= useLocalStorage('isDark',true)

onMounted(()=>{
  handelObserver()
})
</script>
<template>
  <section  class="mm main_sec" :class="{'dark':isDark}">
    <navbar :dark="isDark"  @dark="e=>isDark=e"/>
    <hero :dark="isDark"/>
    <!-- {{ isDark }} -->
    <projects :dark="isDark"/>
    <past_experience/>
    <education/>
    <contacts :dark="isDark" :key="isDark?'1':'0'"/>
  </section>


</template>
<style scoped>
.main_sec.dark {}
.mm{
  padding-bottom: 10rem;
}

.main_sec {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  height: 100%;
}
</style>