<template>

  <transition mode="out-in" :name="'fade'">
    <span class="icon">
      <svg role="img"><use :xlink:href="'/static/svg/svgstore.svg#' + icon"/></svg>
    </span>
  </transition>

</template>

<script>
export default {

  name: 'user-profile-picture',

  props:['width', 'height', 'icon'],

}

</script>

<style scoped lang="scss">

  .icon{

    width: 22px;
    height: 22px;

    &.profile-icon{

      width: 30px;
      height: 30px;

    }


    svg{
      width: 100%;
      height: 100%;
    }


    &.router-link-exact-active{

      svg{

        path{

          stroke: $blue

        }

      }

    }

  }


</style>
