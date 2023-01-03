import Sequelize from 'sequelize'

import Product from '../app/models/Product.js'
import User from '../app/models/User.js'
import configDatabase from '../config/database'
import Category from '../app/models/Category.js'

const models = [User, Product, Category]
class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(configDatabase)
        models.map( model => model.init(this.connection))
    }
}

export default new Database()