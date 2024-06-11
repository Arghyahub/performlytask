import { ApolloServer } from "@apollo/server";
import typeDefs from "./schemas/typedef";
import resolvers from "./resolvers/resolver";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function main() {
  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`🚀 Server ready at ${url}`);
  } catch (error) {
    console.log(error);
  }
}

main();
