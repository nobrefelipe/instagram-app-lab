const getLikesQuery = `
    query getLikesQuery($userId: [ID!]!, $postId: ID!){
      Post(
        id: $postId
      ){
        likes(
          filter:{
            id_in: $userId
          }
        ){
          id
          name
        }
      }
    }
  `;

const likeQuery = `
  mutation like($userId: ID!, $postId: ID!){
    addToPostOnUser(
      likesUserId: $userId,
      likesPostId: $postId
    ) {
      likesUser{
        id
      }
    }
  }`;


const dislikeQuery = `
  mutation dislike($userId: ID!, $postId: ID!){
    removeFromPostOnUser(
      likesUserId: $userId,
      likesPostId: $postId
    ) {
      likesUser{
        id
      }
    }
  }`;

export {getLikesQuery, likeQuery, dislikeQuery};