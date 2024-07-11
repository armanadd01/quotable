/* eslint-disable no-console */
import mongoose from 'mongoose'

const MONGODB_URI    = process.env.MONGODB_URI
console.log( "this is uri 01",MONGODB_URI)

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@geniouscarmechanics.uz2bo.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)

// console.log( "this is uri",uri)
const defaults = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  connectTimeoutMS: 5000,
}
/**
 * Database client used in the Jests tests.
 */
export default class MongoClient {
  constructor(options) {
    this.connection = null
    this.settings = { ...defaults, ...options }
  }

  async connect() {
    this.connection = await mongoose.connect(MONGODB_URI, this.settings);
  }

  async disconnect() {
    if (this.connection) {
      this.connection.disconnect()
    }
  }
}
