import Sequelize from 'sequelize'
import config from '../config/db'

console.log('init sequelize...')

const sequelize = new Sequelize({
    dialect: config.dialect,
    storage: config.storage
})

sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function(err) {
        console.log('Unable to connect to the database:', err);
    })

export default sequelize
