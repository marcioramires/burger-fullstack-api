module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'dev-burguer',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}
