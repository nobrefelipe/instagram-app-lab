import Vue from 'vue';

let actions = {


    update_active_user( {commit}, user ){

        commit('UPDATE_ACTIVE_USER', user);

    },


    update_header_title( {commit}, title ){

        commit('UPDATE_HEADER_TITLE', title);

    },

    change_app_transition( {commit}, data ){

        //console.log('[ACTION][change_app_transition] -> ' + data)

        commit('CHANGE_APP_TRANSITION', data);

    },

    search_input( {commit}, data ){

        commit('SEARCH_INPUT', data);

    }


};

export default actions;