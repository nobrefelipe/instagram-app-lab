
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import store from './vuex/store';
import InstantSearch from 'vue-instantsearch';


Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(InstantSearch);


/*
  GLOBAL COMPONENTS
  Register a component globally
  so it can be used without importing locally
*/

//Profile Picture
Vue.component('user-profile-picture', require('@/components/shared/user-profile-picture.vue'));

//Header
Vue.component('header-component', require('@/components/shared/header-component.vue'));

//Pictures
Vue.component('pictures-component', require('@/components/shared/pictures-component.vue'));

//Comments
Vue.component('post-comments', require('@/components/shared/post-comments.vue'));

//Like
Vue.component('like-component', require('@/components/shared/like-component.vue'));

//Search
Vue.component('search-component', require('@/components/views/search/index.vue'));



new Vue({

  el: '#app',

  router,

  store,

  template: '<App/>',

  components: { App }

});
