const sql = require("mssql");
const { dbConfig } = require("@/db/config");

let poolPromise = null; // store the connection promise so it's only created once

const getPool = async() => {
    try {
        if(!poolPromise) {
            poolPromise = await sql.connect(dbConfig);
        }
        return poolPromise;
    } catch (error) {
        throw new Error(error.message || error);
    }
}

const queryDB = async(query,params={}) => {
    try {
        const pool = await getPool(); // ensure we have a connected pool
        const request = pool.request();
        for (const key in params) {
            request.input(key, params[key]); // add parameters if provided
        };
        const result = await request.query(query); // execute the query
        return result.recordset;
    } catch (error) {
        throw new Error(error.message || error);
    }
}

module.exports = {queryDB};