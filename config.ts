import { registerAs } from '@nestjs/config'

export default registerAs('config',()=>{
return {
  database : {
        name: process.env.DATABASE_NAME,
        port: process.env.DATABASE_PORT,
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
    },
    apiKey : process.env.API_KEY
    }
});