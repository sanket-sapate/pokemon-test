import "dotenv/config.js";
const config = {
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    FRONTEND_URL : process.env.FRONTEND_URL,
    DB_CONNECTION_URL: process.env.MONGODB_ATLAS_VECTOR_URI,
}
export default config;

export const JWT_SECRET_KEY= process.env.JWT_SECRET_KEY
export const RECAPTCHA_KEY= process.env.RECAPTCHA_KEY
export const FRONTEND_URL= process.env.FRONTEND_URL
export const DB_CONNECTION_URL= process.env.MONGODB_ATLAS_VECTOR_URI