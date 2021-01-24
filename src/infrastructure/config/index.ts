import * as dotenv from 'dotenv';
//import dotenv from 'dotenv';


const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const isProduction = process.env.DDD_FORUM_IS_PRODUCTION === "true";


export default {
  
  isProduction,

  
    /**
     * Server listening port
     */
      port: parseInt(<string>process.env.PORT, 10) || 3000,

    /**
     * That long string from mlab
     */
    databaseMongoDBURL: 'mongodb://' + process.env.MONGODB_HOST + ':' + process.env.MONGODB_PORT + '/' + process.env.MONGODB_DATABASE,
    databasePostgresDBURL: 'postgresql://' + process.env.PGDB_USER + ':' + process.env.PGDB_PASSWORD + '@' + process.env.PGDB_HOST + ':' + process.env.PGDB_PORT + '/' + process.env.PGDB_DATABASE,
    mongodb_uri: <string>process.env.MONGODB_URI,

    /**
     * Used by winston logger
     */
    logs: {
      level: process.env.LOG_LEVEL || 'silly',
    },
  
   
  };