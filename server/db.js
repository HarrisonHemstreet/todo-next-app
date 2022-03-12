const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//     USER: process.env.USER,
//     PASSWORD: process.env.PASSWORD,
//     DATABASE: process.env.DATABASE,
//     HOST: process.env.HOST,
//     PORT: process.env.PORT
// });

const pool = new Pool();

module.exports = {
    query: async (text, params = []) => {
        try {
            return await pool.query(text, params);
        } catch (err) {
            return err.stack;
        }
        // if (params.length > 0) {
        //     try {
        //         await pool.query(text, params);
        //     }
        //     catch (e) {
        //         console.error(e);
        //     }
        // }
        // else {
        //     try {
        //         console.log('in query else try');
        //         await pool.query(text);
        //     }
        //     catch (e) {
        //         console.error(e);
        //     }
        // }
    },
}
