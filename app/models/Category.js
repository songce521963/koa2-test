export default (sequelize, DataTypes) => {
    let Category = sequelize.define('Category', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        order: {
            type: DataTypes.INTEGER,
            field: 'order'
        },
        picture: {
            type: DataTypes.STRING,
            field: 'picture'
        }
    }, {
        tableName: "category",
        timestamps: false
    })
    return Category
}
