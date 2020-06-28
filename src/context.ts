import { config } from 'dotenv'
import { mongoConnect } from 'ts-mongo-codegen'
import { mongoCollectionFactory } from './types.generated'

config()

const uri = process.env.MONGO_URI || ''
const name = process.env.MONGO_NAME || ''

if (!uri) throw new Error('Mongo connection string not found, add MONGO_URI to .env')
if (!name) throw new Error('Mongo name string not found, add MONGO_NAME to .env')

const mongoConnection = mongoConnect(uri)

export const context = async () => {
  // Executed every request
  const db = (await mongoConnection).db(name)
  return mongoCollectionFactory(db)
}

export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T
export type IContext = ThenArg<ReturnType<typeof context>>
