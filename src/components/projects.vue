<script setup lang='ts'>
import { onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import handelObserver from '@/handelObserver';

defineProps({
  dark:{type:Boolean}
})
onMounted(() => {
  let card = document.getElementById("projects")
  if (card)
    card.onmousemove = e => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      };
    }
})


// onMounted(()=>{
//   handelObserver('projects', '/#projects', 'projects')
// })
</script>
<template>
  <div id="projects" class=" pglr sec" :class="{'border':!dark}">
    <h1 class="title">
      <font-awesome-icon :icon="['fas', 'screwdriver-wrench']" />
      Past Projects 
    </h1>


    <a href="https://github.com/phantom-kas/road_monitoring.git" class="card">
      <div class="card-border"></div>

      <div class="card-content">
        <div class="Icc ">
          <a>
            <FontAwesomeIcon size="4x" :icon="['fab', 'github']" />
          </a>
        </div>
        <h2>Road Status Detection With Yolo</h2>
        <span class="mt2">Languages / Tech Used:</span>
        <p><span>[</span>Typescripte, Javascript, Python, Flask, Websockets, WebRTC,Yolov8<span>]</span>
        </p>
      </div>
    </a>






    <a href="https://github.com/phantom-kas/road_monitoring_api.git" class="card">
      <div class="card-border"></div>
      <div class="card-content">
        <div class="Icc ">
          <a>
            <FontAwesomeIcon size="4x" :icon="['fab', 'github']" />
          </a>
        </div>
        <h2>Road Status Detection With Yolo Backend</h2>
        <span class="mt2">Languages / Tech Used:</span>
        <p><span>[</span>Php, Pusher, Mysql, Apache<span>]</span>
        </p>
      </div>
    </a>


    <a href="https://github.com/phantom-kas/botHospitalFrontEnd.git" class="card">
      <div class="card-border"></div>
      <div class="card-content">
        <div class="Icc ">
          <a>
            <FontAwesomeIcon size="4x" :icon="['fab', 'github']" />
          </a>
        </div>
        <h2>Book Store </h2>
        <span class="mt2">Languages / Tech Used:</span>
        <p><span>[</span>Java Spring boot, HTML, Css, SQL <span>]</span>
        </p>
      </div>
    </a>


    <a href="https://github.com/phantom-kas/botHospitalFrontEnd.git" class="card">
      <div class="card-border"></div>
      <div class="card-content z10">
        <div class="Icc z10">
          <a class="z10">
            <FontAwesomeIcon size="4x" :icon="['fab', 'github']" />
          </a>
        </div>
        <h2>Simple Hospital Management Frontend</h2>
        <span class="mt2">Languages / Tech Used:</span>
        <p><span>[</span> Vuejs, HTML, CSS, Typescript <span>]</span></p>
      </div>
    </a>



    <a href="https://github.com/phantom-kas/botHospitalRestApi.git" class="card">
      <div class="card-border"></div>
      <div class="card-content z10">
        <div class="Icc z10">
          <a class="z10">
            <FontAwesomeIcon size="4x" :icon="['fab', 'github']" />
          </a>
        </div>
        <h2>Simple Hospital Management Backend</h2>
        <span class="mt2">Languages / Tech Used:</span>
        <p><span>[</span> MySQL, Php, Apache<span>]</span></p>
      </div>
    </a>



    <a href="https://github.com/phantom-kas/android_todo_app.git" class="card">
      <div class="card-border"></div>
      <div class="card-content">
        <div class="Icc ">
          <a>
            <FontAwesomeIcon size="4x" :icon="['fab', 'github']" />

          </a>
        </div>

        <h2>Adroid Todo app</h2>

        <span class="mt2">Languages / Tech Used:</span>
        <p><span>[</span>Java, Android SDK, SQLite, Android Studio <span>]</span></p>
      </div>
    </a>



    <a href ="https://github.com/phantom-kas/chat_room.git" class="card">
      <div class="card-border"></div>
      <div class="card-content">
        <div class="Icc ">
          <a>
            <FontAwesomeIcon size="4x" :icon="['fab', 'github']" />

          </a>
        </div>

        <h2>Chat Room</h2>

        <span class="mt2">Languages / Tech Used:</span>
        <p><span>[</span>Javascript, Php, MYSQL, Websocket, Nodejs, Expressjs, HTML, CSS<span>]</span></p>
      </div>
    </a>



    <a href="https://github.com/phantom-kas/Thesis-Intelligent-Q-A-System.git" class="card">
      <div class="card-border"></div>
      <div class="card-content">
        <div class="Icc ">
          <a>
            <FontAwesomeIcon size="4x" :icon="['fab', 'github']" />

          </a>
        </div>

        <h2>Question and answer app</h2>

        <span class="mt2">Languages / Tech Used:</span>
        <p><span>[</span>Javascript, Php, MYSQL, HTML, CSS<span>]</span></p>
      </div>
    </a>


    <a href="https://github.com/phantom-kas/portfolio.git" class="card">
      <div class="card-border"></div>
      <div class="card-content">
        <div class="Icc ">
          <a>
            <FontAwesomeIcon size="4x" :icon="['fab', 'github']" />

          </a>
        </div>

        <h2>Portfolio Site (This site)        </h2>

        <span class="mt2">Languages / Tech Used:</span>
        <p><span>[</span>Typescript, Vuejs, HTML, CSS<span>]</span></p>
      </div>
    </a>

  
  </div>

</template>
<style scoped>
a{
  /* text-decoration:none; */
  color:inherit;
  text-decoration: none;
}
.border >.card{
  border: 2px solid var(--color-text);
}
.z10 {
  z-index: 10;
  position: relative;
}

.Icc {
  margin-bottom: auto;
  flex-wrap: wrap;

  gap: 2rem;
}

.Icc>a,
.Icc {
  display: flex;
  align-items: center;
  justify-content: start;
}

.Icc>a:hover {
  
  z-index: 10;
  position: relative;
}

.Icc>a>span {
  color: var(--color-text);
  line-height: 0.7;
}

/* .Icc >a{
  gap: 0.5rem;
  font-size: 0.7rem;
  border:2px solid white;
  padding:0.5rem 0.8rem;
  border-radius: 40px;
}  */


:root {
  --bg-color: rgb(20, 20, 20);
  --card-color: rgb(23, 23, 23);
}

#projects {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: min(1200px, 100%);
  /* width: calc(100% - 20px); */
  align-items: center;
  justify-content: start;
}

#projects:hover>.card::after {
  opacity: 1;
}

.card {
  background-color: rgba(255, 255, 295, 0.05);
  /* border:1px solid rgba(255, 255, 255, 0.1); */
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 250px;
  flex-direction: column;
  position: relative;
  width: min(300px, 100%);
  position: relative;
  flex-grow: 1;
  line-height: 1.1;
}

.card:hover>.card-border,
.card:hover::before {
  opacity: 1;
}

.card::before,
.card::after {
  border-radius: inherit;
  content: "";
  height: 100%;
  left: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  transition: opacity 500ms;
  width: 100%;
}

.card>.card-border,
.card::before {
  background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%);
  z-index: 3;
}

.card>.card-border {
  background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%);
  z-index: 1;

}

.card::after {
  background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.07),
      transparent 40%);
  z-index: 1;
}

.card>.card-content {
  background-color: var(--card-color);
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-grow: 1;
  inset: 1px;
  padding: 1.3rem 1.5rem;
  position: relative;
  z-index: 2;
  margin: 1px;
  height: calc(100% - 2px);
  width: calc(100% - 2px);
}

/* -- ↓ ↓ ↓ extra card content styles ↓ ↓ ↓ -- */


h2,
h3,
h4,
span {
  color: var(--color-text2);
  /* font-family: "Rubik", sans-serif; */
  /* font-weight: 400; */
  font-size: 1.1rem;
  margin: 0px;
}

span {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;

}

p {
  font-size: 1rem;
}

.mt2 {
  margin-top: 1rem;
}








/* -- ↓ ↓ ↓ some responsiveness ↓ ↓ ↓ -- */

@media(max-width: 500px) {

  .card {
    flex-shrink: 1;
    /* width: calc(50% - 4px); */
    height: 300px;
  }
}

@media(max-width: 500px) {
  /* .card {
    height: 180px;
  } */

}

@media(max-width: 320px) {
  .card {
    width: 100%;
  }
}

/* -- ↓ ↓ ↓ YouTube link styles ↓ ↓ ↓ -- */
</style>