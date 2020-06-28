import { config } from 'dotenv'
import ApolloClient from 'apollo-boost'

config()

const port = process.env.PORT || 8081
console.log({ port })
export const client = new ApolloClient({
  uri: `http://localhost:${port}`,
})
