import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import {
 faTwitter,
 faLinkedin,
 faGithub
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faGlobeAmericas,
  faTwitter,
  faLinkedin,
  faGithub
),

Vue.component("font-awesome-icon", FontAwesomeIcon);
