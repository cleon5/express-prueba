import dotenv from 'dotenv'
dotenv.config()

export const MongoURI = process.env.MongoDBURI 
export const port = process.env.PORT    
