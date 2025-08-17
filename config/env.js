
// import { config } from "dotenv";

// config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

// export const {
//      PORT, NODE_ENV,
//      DB_URI,
//      JWT_SECRET, JWT_EXPIRES_IN,
//      ARCJET_ENV, ARCJET_KEY,
//      QSTASH_TOKEN, QSTASH_URL
// } = process.env;


import { config } from "dotenv";

// Load env file according to NODE_ENV
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {
  PORT,
  NODE_ENV,
  DB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  ARCJET_ENV,
  ARCJET_KEY,
  QSTASH_TOKEN,
  QSTASH_URL,
  SERVER_URL,
  EMAIL_PASSWORD  
} = process.env;
