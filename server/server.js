import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  class Query {
    greeting: String
  }
`;

console.log(typeDefs);

// const resolvers = {
//     Query: {
//         greeting: () => 'Hello world!',
//     },
// };

// const server = new ApolloServer({})