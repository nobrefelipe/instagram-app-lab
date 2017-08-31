import Vue from 'vue'
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {

        currentUser: '', // the current user is not the logged in user but the current user being viewed
        currentViewName: '',
        currentTransition: 'fade',
        transitionMode: 'out-in',

        searchInput: ''

    },

    mutations,

    actions

});