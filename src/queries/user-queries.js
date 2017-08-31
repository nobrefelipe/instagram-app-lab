/* GraphQL -> GET COMPLETE USER POSTS DATA */
const userQueryPostsFull = `
  query getUser($id: ID!){
    User(id: $id) {
     name
     bio
     posts{
        id
        content
        imageURL
        location
        likes{
          id
        }
        author{
          name
        }
        comments{
          content
          user{
            name
            id
          }
        }
        tags{
          name
        }
     }
     following{
        id
      }
      followers{
        id
      }
    }
  }`;

/* GraphQL -> GET SIMPLE USER POSTS DATA */
const userQueryPostsSimple = `
  query getUser($id: ID!){
    User(id: $id) {
     name
     bio
     posts{
        id
        imageURL
     }
     following{
        id
      }
      followers{
        id
      }
    }
  }`;



/* GraphQL -> GET USER DATA */
const userQuery = `
  query getUser($id: ID!){
    User(id: $id) {
     name
     bio
     posts{
       id
     }
     following{
        id
      }
      followers{
        id
      }
    }
  }`;

export {userQuery, userQueryPostsFull, userQueryPostsSimple};
