<template>

  <section class="pictures-component list">

    <pictures-component v-for="post in posts" :post="post"  :layout="'list'"></pictures-component>

  </section>

</template>


<script>

import client from '../../../client';
import SinglePostQuery from '../../../queries/post-queries.js';

export default {

  name: 'post-single',

  data(){
    return{

      posts: null,
      postId: this.$route.params.postid

    }
  },

   mounted(){

      client.request(SinglePostQuery, {id: this.postId}).then( (res) => {

        this.posts = res

      });

    console.log('PHOTO');
      //update the header title
      this.$store.dispatch('update_header_title', 'Photo');


  }

}

</script>

<style scoped lang="scss">



</style>
