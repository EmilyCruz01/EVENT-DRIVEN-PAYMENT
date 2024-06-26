import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import { Signale } from 'signale';

dotenv.config();
const signale = new Signale();

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
}

const pool = mysql.createPool(config);

export async function query(sql: string, params: any[]){
    try{
        const conn = await pool.getConnection();
        signale.success("Conexion existosa a la BD");
        const result =  await conn.execute(sql, params);
        conn.release();
        return result;
    } catch(error){
        signale.error(error);
        console.log('Se ha producdio un error')
        return null;
    }
}