<template>
  <div id="app">

    <header-component :user-name="$store.state.currentUser"></header-component>

    <div class="app-shell" id="app-shell">

      <transition :name="transitionName"> <!--:mode="transitionMode"-->

        <router-view></router-view>

      </transition>

    </div>

    <section class="app-navigation">

      <router-link to="/" class="icon"><svg role="img"><use xlink:href="/static/svg/svgstore.svg#home-icon"/></svg></router-link>

      <router-link to="/search" class="icon"><svg role="img"><use xlink:href="/static/svg/svgstore.svg#search-icon"/></svg></router-link>

      <router-link to="/upload" class="icon"><svg role="img"><use xlink:href="/static/svg/svgstore.svg#camera-icon"/></svg></router-link>

      <router-link :to="'/profile/' + loggedUser" class="icon profile-icon"><user-profile-picture :width="'30px'" :height="'30px'"></user-profile-picture></router-link>

    </section>

  </div>
</template>

<script>
export default {
  name: 'app',

  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;

      if(to.name == "PostComments"){

        this.transitionName = "push-from-right";

      }else if(to.name == "UserProfile" && from.name == "PostComments"){

        this.transitionName = "push-from-left";

      }else{

        this.transitionName = "fade";

      }

      //this.transitionName = toDepth < fromDepth ? 'push-from-left' : 'push-from-right';


    }
  },

  data(){
    return{
      transitionName: '',
      loggedUser: localStorage.getItem('userID')


    }
  },

  computed:{

    currentTransition(){
      return this.$store.state.currentTransition
    },

    transitionMode(){
      return this.$store.state.transitionMode
    }
  }

}
</script>

