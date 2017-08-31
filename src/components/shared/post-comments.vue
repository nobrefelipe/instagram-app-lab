<template>

  <section class="picture-all-comments">

    <span v-for="comment in allComments" class="post-comment">

      <user-profile-picture :userId="comment.user.id" :width="'20px'" :height="'20px'"></user-profile-picture>

      <strong>{{ comment.user.name }}</strong> {{ comment.content }}

    </span>

  </section>

</template>

<script>

import client from '../../client';
import { postCommentsQuery, postFirstCommentsQuery } from '../../queries/post-comments-queries';

export default {

  name: 'post-comments',


  data(){

    return{

      postId: this.$route.params.postid,
      allComments: null,


    }

  },


  mounted(){

      // VARS
      let vm = this;
      let back = document.getElementById("back");


      // Send request -> get all comments within the post
      client.request(postCommentsQuery, {postId: this.postId}).then(data =>{

        // store the result
        this.allComments = data.allComments


        // Update the header data
        this.$store.dispatch('update_header_title', 'Comments');


      }).then( () => {

        // ON CLICK BACK
        back.addEventListener('click', function(e){


          // Reset local
          vm.allComments = null;


           //update the active user
            vm.$store.dispatch('update_active_user', vm.$store.state.currentUser);

            //update the header title
            vm.$store.dispatch('update_header_title', vm.$store.state.currentUser);

        })

      });

  }


}

</script>


<style scoped lang="scss">

  .picture-all-comments{

    position: fixed;
    top: 50px;
    left: 0;
    z-index: 9999;

    width: 100%;
    height: calc(100vh - 50px);

    background: #fff;

    .post-comment{

      float: left;
      width: 100%;
      padding: 15px 20px;

      border-bottom: 1px solid rgba(#999, 0.2);

      display: flex;
      align-items: center;


      font-size: 12px;


      //username
      strong{
        margin-right: 6px;
      }

      //user image
      .user-profile-picture{
        margin-right: 6px;
      }

    }

  }

</style>