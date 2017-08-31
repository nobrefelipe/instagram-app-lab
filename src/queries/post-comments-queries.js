
// GET ALL COMMENTS
const postCommentsQuery = `
  query get($postId: ID!){
    allComments(
      filter:{
        post:{
          id: $postId
        }
      }
    ){
      content
      user{
        id
        name
      }
    }
  }`;


// GET FIRST COMMENT ONLY
const postFirstCommentsQuery = `
  query get($postId: ID!){
    allComments(
      first: 1,
      filter:{
        post:{
          id: $postId
        }
      }
    ){
      content
      user{
        id
        name
      }
    }
  }`;


export {postFirstCommentsQuery, postCommentsQuery};
