const Sequelize = require("sequelize")
const connection = new Sequelize('blogpress', 'root', '18031988',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    timezone: '-03:00'
})

module.exports = connection
