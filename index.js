const {createPool} = require('mysql2/promise');

async function main(){
    const conn = await createPool({
        database: 'developmentdb',
        user: '1wqa4wrzhf91',
        host: '16dibzfy353e.us-east-3.psdb.cloud',
        password: 'pscale_pw_TeqBw4Ukt0IsUudb-G5rQ7GhT0hmuHz12fXa9KpEf2s',
        ssl: {
            rejectUnauthorized: false
        }
    });

    conn.query('CREATE TABLE users(name VARCHAR(1000))');

    console.log('Connected to database');
}

main();

