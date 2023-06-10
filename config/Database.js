import {Sequelize} from "sequelize";

const db = new Sequelize('aws','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;