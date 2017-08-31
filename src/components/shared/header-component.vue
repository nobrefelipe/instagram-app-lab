<template>

  <header class="header" v-if="$route.name != 'Search' ">


    <div class="is-flexy is-middle is-between is-full">

      <transition :name="'fade'" mode="out-in">

        <div @click="back" class="icon" id="back" v-if="showBackIcon">
          <svg role="img"><use xlink:href="/static/svg/svgstore.svg#back-arrow-icon"/></svg>
        </div>

        <span class="icon" id="upload" v-if="showCameraIcon">
        <svg role="img"><use xlink:href="/static/svg/svgstore.svg#camera-icon"/></svg>
      </span>

      </transition>

      <span class="header--title user-name" id="current-view-name">{{ $store.state.currentViewName }}</span>

      <span class="icon">
      <svg role="img"><use xlink:href="/static/svg/svgstore.svg#settings-icon"/></svg>
    </span>

    </div>


  </header>

</template>

<script>
import router from '@/router';

export default {

  name: 'header-component',

  props:['user-name'],

  data(){
    return{

      showBack: false,
      showCamera: true,
      backTo: '/'

    }
  },


  watch: {
    '$route' (to, from, next) {

        if(to.name == 'UserProfile'){

           // show the back arrow
           this.showBack = true;

           // hide the camera icon
           this.showCamera = false;

           //this.backTo = '/'

        }


        if(to.name == 'PostComments'){

           // show the back arrow
           this.showBack = true;

           // hide the camera icon
           this.showCamera = false;

           // back button will lead to Home
           //this.backTo = from.path

        }


        if(to.name == 'PostComments' && from.name == 'Home'){

           // show the back arrow
           this.showBack = true;

           // hide the camera icon
           this.showCamera = false;

           // back button will lead to Home
           //this.backTo = from.path

        }


        if(to.name == 'Home'){

           // hide the back arrow
           this.showBack = false;

           // show the camera icon
           this.showCamera = true;

        }

    }

  },



  computed:{

    backToLink(){
      return this.backTo;
    },

    showCameraIcon(){
      return this.showCamera;
    },

    showBackIcon(){
      return this.showBack;
    }

  },

  methods:{

    back(){

      this.$router.go(-1)

    }

  },

  mounted(){

    // on reload, if route is not Home
    if(this.$route.name != 'Home'){
       // show the back arrow
       this.showBack = true;

       // hide the camera icon
       this.showCamera = false;
    }

  }

}

</script>
