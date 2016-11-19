import { createClient } from 'then-redis';

const client = createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
});

export default client;
