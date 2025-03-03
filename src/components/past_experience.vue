<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>
<template>
  <div id="experience" class="jobs pglr sec">
    <h1 class="title">
      <font-awesome-icon :icon="['far', 'calendar']" /> Past Experience
    </h1>

    <div class="jobc">
      <div>
        <h1>
          Freelance
        </h1>
        <span>
          2020 - present
        </span>
      </div>


      <div>
        <h1>
          Fullstack Developer at Boxnreaker Global
        </h1>
        <span>
          2022 - present
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