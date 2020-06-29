import { config } from 'dotenv'
import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { context } from './context'

config()
const port = process.env.PORT || 8081
const playground = {
  codeTheme: {
    editorBackground: '#31679',
  },
  shareEnabled: true,
} as any
new ApolloServer({
  context,
  introspection: true,
  playground,
  schema,
})
  .listen(port)
  .then(({ url }) => {
    console.log(`Listening at ${url}`)
  })
  .catch((err) => {
    console.log(err)
  })
