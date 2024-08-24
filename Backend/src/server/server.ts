import { Sequelize } from "sequelize";

const sequelize = new Sequelize('pocketapp', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    await sequelize.authenticate();
    console.log('uccessful connection')
} catch (error) {
    console.error('Unable to connect to database: ', error);
}