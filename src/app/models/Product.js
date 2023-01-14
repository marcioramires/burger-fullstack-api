import Sequelize, { Model } from 'sequelize'

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                price: Sequelize.INTEGER,
                brand: Sequelize.STRING,
                tax: Sequelize.DECIMAL,
                stock: Sequelize.INTEGER,
                features: Sequelize.STRING,
                path: Sequelize.STRING,
                offer: Sequelize.BOOLEAN,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `/product-file/${this.path}`
                    },
                },
            },
            {
                sequelize,
            }
        )
        return this
    }

    static associate(models) {
        this.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category'
        })
    }
}

export default Product