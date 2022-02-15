const { Sequelize } = require("sequelize");

const filmModel = require('../models/films');

const sequelize = new Sequelize('clients', 'sa', 'Guillermo10!', {
    host: "localhost",
    dialect: "mysql"
});

const Film = filmModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(() => {
        console.log('tablas sincronizadas')
    } );

module.export = {
    Film
}

