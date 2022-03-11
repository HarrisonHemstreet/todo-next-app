const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE,
    HOST: process.env.HOST,
    PORT: process.env.PORT
});

module.exports = {
    query: async (text, params = []) => {
        if (params.length > 0) {
            try {
                await pool.query(text, params);
            }
            catch (e) {
                console.error(e);
            }
        }
        else {
            try {
                await pool.query(text);
            }
            catch (e) {
                console.error(e);
            }
        }
    },
}
