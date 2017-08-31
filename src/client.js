import { GraphQLClient } from 'graphql-request';

const token = localStorage.getItem('token');

const client = new GraphQLClient('https://api.graph.cool/simple/v1/cj516h4eaiy4601759x6t3lso', {
    headers: {
        Authorization:  token ? `Bearer ${token}` : null
    },
});

export default client;