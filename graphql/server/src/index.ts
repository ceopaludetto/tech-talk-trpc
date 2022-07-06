import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import fetch from "node-fetch";

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

const typeDefs = `
  type StarWarsPerson {
    name: String!
    height: String!
    mass: String!
    hair_color: String!
    skin_color: String!
    eye_color: String!
    birth_year: String!
    gender: String!
  }

  type Query {
    starWars: [StarWarsPerson!]!
  }
`;

const resolvers = {
  Query: {
    async starWars() {
      const res = await fetch("https://swapi.dev/api/people/");
      const people = await res.json();

      return (people as any).results;
    },
  },
};

startApolloServer(typeDefs, resolvers);
