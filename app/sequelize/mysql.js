import Sequelize from 'sequelize'

export default new Sequelize('test', 'root', 'x5', { dialect: 'mysql'})