const { ApolloServer } = require("apollo-server");
import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import { resolvers } from "@generated/type-graphql";
import { context } from "./context";

const PORT = process.env.PORT || 4000;

const schema = buildSchemaSync({
  resolvers,
  validate: false,
});

const server = new ApolloServer({ schema, context });

// The `listen` method launches a web server.
server.listen(PORT).then(async ({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
