import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from '../config/DBConfig.json'

const basename  = path.basename(module.filename)
const db = {}

const sequelize = new Sequelize('test', 'root', 'x5', { dialect: 'mysql'})

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  })

/*Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})*/
sequelize.sync()

db.sequelize = sequelize

export default db