const Pool = require('pg').Pool

const pool = new Pool({
    user: 'sima_p',
    password: '163452456',
    database: 'sima_p',
    host: '185.158.113.29',
    port: 5432,
})

module.exports = pool;