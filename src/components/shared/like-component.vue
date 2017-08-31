<template>

  <span class="icon heart" :class="{'active' : active}" @click="onClickLike">
    <svg role="img"><use xlink:href="/static/svg/svgstore.svg#heart-icon"/></svg>
  </span>

</template>

<script>


import client from '../../client';
import {getLikesQuery, likeQuery, dislikeQuery} from '../../queries/likes-query.js';

export default {

  name: 'like-component',

  props:['postId'],

  data(){
    return{

      userId: localStorage.getItem('userID'),
      active: false

    }
  },

  methods:{

    onClickLike(){

      let params= {
        userId: this.userId,
        postId: this.postId
      };

      // if heart is active, means the user liked the post
      if(this.active){

        // dislike the post
        client.request(dislikeQuery, params);
        this.active = false;

      }else{

        // like the post
        client.request(likeQuery, params);
        this.active = true;

      }


    }

  },



   mounted(){

      let params= {
        userId: localStorage.getItem('userID'),
        postId: this.postId
      };


       client.request(getLikesQuery, params).then(data =>{

        if(data.Post.likes.length) {
          this.active = true;
        }


       });


   }


}

</script>

<style scoped lang="scss">




</style>
