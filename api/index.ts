const { ApolloServer } = require("apollo-server");
import { PrismaClient } from "@prisma/client";
import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import { resolvers } from "./prisma/generated/type-graphql";

const PORT = process.env.PORT || 4000;

const schema = buildSchemaSync({
  resolvers,
  validate: false,
});

const prisma = new PrismaClient();

const server = new ApolloServer({ schema, context: () => ({ prisma }) });

// The `listen` method launches a web server.
server.listen(PORT).then(async ({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
