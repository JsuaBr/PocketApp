import { Sequelize } from "sequelize";

const sequelize = new Sequelize('pocketapp', 'root', '1234', {
    host: 'localhost',
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