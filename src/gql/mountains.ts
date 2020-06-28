import gql from 'graphql-tag'

export const mountainSchema = gql`
  type Mountain @collection(name: "mountains", crud: true) {
    id: ObjectId
    name: String @insert @set @filter
    meters: Float @insert @set @filter
    feet: Float @insert @set @filter
    location: String @insert @set @filter
  }

  type Query {
    empty: String
  }

  type Mutation {
    empty: String
  }
`
