import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLightbulb,faEnvelope, faMoon ,faSun, faComments, faCalendar} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faTiktok,
  faGithub,
  faWhatsapp,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons/faScrewdriverWrench";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faGraduationCap, faHouse } from "@fortawesome/free-solid-svg-icons";
library.add(faLightbulb,faGithub,faWhatsapp,faEnvelope,faPhone,faMoon,faSun,faScrewdriverWrench,faGraduationCap,faComments,faHouse,faCalendar,faLinkedin);
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
