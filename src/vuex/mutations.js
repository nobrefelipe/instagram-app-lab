let  mutations = {

    UPDATE_ACTIVE_USER( state, user){

        state.currentUser = user;

    },


    UPDATE_HEADER_TITLE( state, title){

        state.currentViewName = title;

    },


    CHANGE_APP_TRANSITION( state, data){

        //console.log('[MUTATION][CHANGE_APP_TRANSITION] -> ' + data)

        state.currentTransition = data.name;
        state.transitionMode = data.mode;

    },


    SEARCH_INPUT( state, input){

        state.searchInput = input;

    },

};

export default mutations;