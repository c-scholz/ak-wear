import 'bootstrap';

import Vue from 'vue'

import store from './OrderStore'

import router from './Router'

import App from './Shared/App'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faEllipsisV, 
    faLink, 
    faChevronRight,
    faChevronLeft,
    faReply,
    faShare,
    faCheck,
    faTimes,
    faTint,
    faExclamation,
    faGripVertical,
    faArrowsAlt,
    faCopy
} from '@fortawesome/free-solid-svg-icons'
import {
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
// add fontawesome icons
library.add(faEllipsisV, 
    faLink, 
    faChevronRight, 
    faChevronLeft,
    faReply,
    faShare,
    faCheck,
    faTimes,
    faTint,
    faExclamation,
    faGripVertical,
    faArrowsAlt,
    faWhatsapp,
    faCopy)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const app = new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App),
}).$mount(document.getElementById('app'));

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});