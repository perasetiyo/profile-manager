import knex from 'knex';

const client = knex({
        client: 'pg',
        connection: {
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASS,
            database: process.env.DATABASE_DB
        }
    });

client.on('query', data => {
    if (process.env.NODE_DEBUG && process.env.DATABASE_DEBUG) {
        console.log('Query', JSON.stringify(data));
    }
});

export default client;
