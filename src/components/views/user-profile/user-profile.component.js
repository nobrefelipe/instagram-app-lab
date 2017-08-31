import client from '../../../client';
import { userQueryPostsFull, userQueryPostsSimple, userQuery } from '../../../queries/user-queries';


export default  {

  name: 'user-profile',

  data() {
    return {

      layout: 'grid',
      userID: this.$route.params.id,
      userData: {},
      userPosts: {}

    }
  },

  methods:{

    switchPostsLayout(layout){

      this.getUserPosts(layout);

      this.layout = layout;

    },


    getUserPosts(layout){


      if(layout == 'list'){

        client.request(userQueryPostsFull, {id: this.userID}).then(data =>{

          this.userPosts = data.User.posts;

        });

      }

      else{

        client.request(userQueryPostsSimple, {id: this.userID}).then(data =>{

          this.userPosts = data.User.posts;

        });

      }

    }


  },

  mounted(){

    this.getUserPosts(this.layout);

    client.request(userQuery, {id: this.userID}).then(data =>{

      this.userData = data.User;

      //update the active user
      this.$store.dispatch('update_active_user', data.User.name);

      //update the header title
      this.$store.dispatch('update_header_title', data.User.name);


    });


  },

}

