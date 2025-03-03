<script setup lang='ts'>
// import handelObserver from '@/handelObserver';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { onMounted } from 'vue';

onMounted(()=>{
  // handelObserver('education', '/#education', 'education')
})
</script>
<template>
  <div id="education" class="jobs pglr sec">
    <h1 class="title">
      <font-awesome-icon :icon="['fas', 'graduation-cap']" />
      Education
    </h1>

    <div class="jobc">
      <div>
        <h1>
          Dalian Polytechnic University<br/>
          Computer Science And Engineering
        </h1>
        <span>
          2020 - 2024
        </span>
      </div>


      <div>
        <h1>
          Openlabs<br />
          Web Development
        </h1>
        <span>
          2021-2022
        </span>
      </div>

      <div>
        <h1>
          Presbyterian Boys' Senior High School
        </h1>
        <span>
          2016 - 2019
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.jobs {
  margin-top: 6rem;
  width: min(1200px, 100%);
}

.jobc,
.jobc {
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
}


.jobc {
  gap: 2rem;
}

.jobc>div {
  border: 2px solid var(--color-text);
  padding: 2rem;
  width: min(700px, 100%);
  border-radius: 10px;

}

.jobc>div>h1 {
  color: var(--color-text2);
  line-height: 1;
  margin-bottom: 0.7rem;
  font-size: 1.7rem;
}
</style>