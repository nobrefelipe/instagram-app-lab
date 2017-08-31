<template>

    <!--Post-->
    <div @click="openSingle(post.id, layout)" class="post">

      <!--Post Head-->
      <div v-if="layout == 'list'" class="post-head">

        <!--Profile Picture-->
        <user-profile-picture :width="'32px'" :height="'32px'"></user-profile-picture>

        <!--Name and Location-->
        <div class="is-flexy is-column">

          <span class="post-who">{{ post.author.name }}</span>
          <span class="post-location">{{ post.location }}</span>

        </div>

        <!--More actions icon-->
        <span class="icon is-stick__right">
          <svg role="img"><use xlink:href="/static/svg/svgstore.svg#dots-icon"/></svg>
        </span>

      </div>

      <!--Post Picture-->
      <picture><img :src="post.imageURL" :alt="post.content"></picture>

      <!--Post Main-->
      <div v-if="layout == 'list'" class="post-main">

        <!--Post Actions-->
        <div class="post-action">

          <!--Like icon-->
          <span class="is-stick__right">
            <like-component :postId="post.id"></like-component>
          </span>

          <!--Comment icon-->
          <span class="icon is-stick__right" @click="getComments(post.id, 'push-from-right')">
            <svg role="img"><use xlink:href="/static/svg/svgstore.svg#comment-icon"/></svg>
          </span>

          <!--Share icon-->
          <span class="icon is-stick__right">
            <svg role="img"><use xlink:href="/static/svg/svgstore.svg#share-arrow-icon"/></svg>
          </span>

        </div>

        <!--Posts Likes-->
        <div class="post-likes">{{ post.likes.length }} likes</div>

        <div class="post-description"><strong>{{ post.author.name }}</strong>{{ post.content }} </div>

        <div class="post-comments">

          <span v-for="(comment, index) in post.comments" v-if="(index + 1) <= 1" class="post-comment">
            <strong>{{ comment.user.name }}</strong> {{ comment.content }}
          </span>

          <span v-if="post.comments.length" @click="getComments(post.id, 'push-from-right')" class="post-comments--view-all" >View all {{ post.comments.length }} comments</span>

        </div>

      </div>

    </div>


</template>

<script>

import client from '../../client';
import { postCommentsQuery, postFirstCommentsQuery } from '../../queries/post-comments-queries';

export default {

  name: 'pictures-component',

  props:['post', 'layout'],

  data(){

    return{

        allComments: null,
        showComments: false

    }

  },


  computed:{

    postData(){

       return this.data

    }

  },

  methods:{

    // will open the post as a SinglePost component if the user clicks on it on Grid mode
    openSingle(postId,layout){

      if(layout == 'grid'){

         this.$router.push({ name: 'PostSingle', params: { postid: postId }})

      }

    },


    getComments(postId, name){

     //this.$store.dispatch('change_app_transition', {name: name, mode: ''});

      this.$router.push({ name: 'PostComments', params: { postid: postId }})

    }

  }


}

</script>


<style lang="scss">


  .pictures-component{

    float: left;

    width: 100vw;

    display: flex;

    flex-wrap: wrap;

    picture{

      float: left;

      width: 100%;

      background: #D8D8D8;

      overflow: hidden;

      img{
        width: 100%;
        margin: 0;
        display: block;
      }

    }


    &.grid{

      .post{

        width: calc( (100vw - 2px) / 3 );
        height: calc( (100vw - 2px) / 3 );

        margin-bottom: 1px;
        margin-right: 1px;
        padding-bottom: 0;

        picture{

          position: relative;

          height: 100%;

          img{

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);

            width: auto;
            max-width: 220px;
            min-height: 100%;

          }

        }

      }

    }


    &.list{

      .post{

        width: 100%;
        padding-bottom: 15px;


      }

    }

    .post-main{

      float: left;

      width: 100%;

      padding: 0 12px;

    }


    .post-action{

      float: left;

      width: 100%;

      .icon{
        margin-right: 12px;
      }

    }


    .post-head{

      float: left;

      width: 100%;

      padding: 11px;

      font-weight: 400;

      display: flex;

      align-items: center;


      .user-profile-picture{
        margin-right: 11px;
      }


      .post-who{
        font-size: 14px;
      }

      .post-location{
        font-size: 12px;
      }

    }


    .post-likes{

      float: left;

      width: 100%;

      font-size: 14px;

      padding: 0 0 10px 0;

    }


    .post-description{

      float: left;
      width: 100%;
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 12px;

      strong{
        margin-right: 5px;
      }

    }


    .post-comments{

      float: left;

      width: 100%;

      &--view-all{

        float: left;

        width: 100%;

        font-size: 14px;

        font-weight: 300;

        color: #999;

      }

      .post-comment{

        float: left;

        width: 100%;

        font-size: 14px;

      }

    }





  }

</style>