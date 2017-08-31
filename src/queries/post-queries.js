const SinglePostQuery = `
  query getPost($id: ID!){
    Post(id: $id) {
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
  }`;

export default  SinglePostQuery;