import fs from 'fs'
import path from 'path'
import sequelize from '../sequelize/sqlite.js'

const basename  = path.basename(module.filename)
const db = {}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  })

sequelize.sync()

db.sequelize = sequelize

export default db