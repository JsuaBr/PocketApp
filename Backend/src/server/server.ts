import { Sequelize } from "sequelize";
import 'dotenv/config';

const sequelize = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASSWORD as string, {
    host: process.env.HOST as string,
    dialect: 'mysql'
});

export async function connection(){
    try {
        await sequelize.authenticate();
        console.log('Successful connection')
    } catch (error) {
        console.error('Unable to connect to database: ', error);
    }
}

connection();