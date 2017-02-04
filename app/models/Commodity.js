export default (sequelize, DataTypes) => {
    let Commodity = sequelize.define('Commodity', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        category: {
            type: DataTypes.STRING,
            field: 'category'
        },
        summary: {
            type: DataTypes.STRING,
            field: 'summary'
        },
        picture: {
            type: DataTypes.STRING,
            field: 'picture'
        },
        productDemo: {
            type: DataTypes.STRING,
            field: 'product_demo'
        },
        order: {
            type: DataTypes.INTEGER,
            field: 'order'
        },
        productDesc: {
            type: DataTypes.STRING,
            field: 'product_desc'
        },
        productInfo: {
            type: DataTypes.STRING,
            field: 'product_info'
        },
        homePage: {
            type: DataTypes.STRING,
            field: 'home_page'
        }
    }, {
        tableName: "commodity",
        timestamps: false
    })
    return Commodity
}
