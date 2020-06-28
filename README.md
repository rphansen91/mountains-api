# Mountains API

Mountains API was created by [TS Mongo Codegen](https://elevatejs.com/blog/ts-mongo-codegen).

### Secrets

Create an .env file and populate the following

```.env
MONGO_URI={Your mongo uri}
MONGO_NAME={Your mongo db name}
```

### Install

`yarn`

### Start

`yarn start`

### Playground

Visit Playground at `http://localhost:8081`

### Schema

```graphql
type Mountain @collection(name: "mountains", crud: true) {
  id: ObjectId
  name: String @insert @set @filter
  meters: Float @insert @set @filter
  feet: Float @insert @set @filter
  location: String @insert @set @filter
}

type Query {
  # Used as a base to build off
  empty: String
}

type Mutation {
  # Used as a base to build off
  empty: String
}
```

### Generate

`yarn generate`

Generate resolvers and typings based on schema

### Scrape

`yarn scrape`

Scrape wikipedia mountains using `cheerio` and insert into our mongo db using ApolloClient.
