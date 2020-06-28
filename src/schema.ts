import { makeExecutableSchema } from '@graphql-tools/schema'
import { addResolveFunctionsToSchema } from 'apollo-server'
import { graphqlTypeDate, graphqlTypeObjectId, makeAugmentedSchema, mongoTypeDefs } from 'ts-mongo-codegen'
import { mountainMutationResolvers, mountainQueryResolvers, mountainResolvers } from './types.generated'
import { mountainSchema } from './gql/mountains'

// Make an executable schema with the mongo types and our custom mountain schema type
const executableSchema = makeExecutableSchema({
  typeDefs: [mongoTypeDefs, mountainSchema],
})

// Add CRUD operations to the Mountain type by augmenting the schema
export const schema = makeAugmentedSchema(executableSchema)

// The mountainResolvers, mountainMutationResolvers, and mountainQueryResolvers are generated types
// Run `yarn generate` to update types or add more
const resolvers = {
  Date: graphqlTypeDate,
  Mountain: mountainResolvers,
  Mutation: {
    ...mountainMutationResolvers,
  },
  ObjectId: graphqlTypeObjectId,
  Query: {
    ...mountainQueryResolvers,
  },
}

// Finally we add our generated resolvers to the schema
addResolveFunctionsToSchema({
  resolvers,
  schema,
})
