<template>

  <transition mode="out-in" :name="'fade'">
    <div class="user-profile-picture" :style="{width: width, height: height}">

      <img :src="userPicture">

    </div>
  </transition>

</template>

<script>


import client from '../../client';

/*
  GraphQL -> GET user
*/
const userQuery = `
  query getUser($id: ID!){
    User(id: $id) {
     pictureUrl
    }
  }`;



export default {

  name: 'user-profile-picture',

  props:['userId','width', 'height'],

  data(){
    return{

      userPic: ''

    }
  },

  computed:{

    userPicture(){

      return this.userPic;

    }

  },

   mounted(){

    // check is a userId is passes as prop
    // if so, use it [meaning that the current view is not a own-profile]
    // if not, use the id saved in local storage [meaning that the current view is the own-profile]
    var userID =  this.userId ? this.userId : localStorage.getItem("userID");

    client.request(userQuery, {id: userID}).then(data =>{

      this.userPic = data.User.pictureUrl;

    });

  },


}

</script>

<style scoped lang="scss">

  .user-profile-picture{

    float: left;

    border-radius: 50%;

    background: #D8D8D8;

    overflow: hidden;

    border: 1px solid rgba(#D8D8D8, 1);

    img{

      width: 100%;

    }

  }


</style>
