import { ApolloServer } from 'apollo-server';
import { typeDefs as incidentTypeDefs } from './incidents/schema';
import { resolvers as incidentResolvers } from './incidents/resolvers';

// Initializing the Apollo Server
const server = new ApolloServer({
  typeDefs: {
    ...incidentTypeDefs
  },
  resolvers: {
    ...incidentResolvers
  },
});

// Running the server
server.listen(4000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
