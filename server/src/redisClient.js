import { createClient } from 'redis';
import 'dotenv/config'

const client = createClient({
  url: process.env.REDIS_HOST,
  });


export default client