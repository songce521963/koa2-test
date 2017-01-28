export default (sequelize, DataTypes) => {
	let User = sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		userName: {
			type: DataTypes.STRING,
			field: 'user_name' // Will result in an attribute that is firstName when user facing but first_name in the database
		}
	}, {
		tableName: 'user' // Model 对应的表名将与model名相同
	})
	return User
}