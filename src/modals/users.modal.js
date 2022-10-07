module.exports = (sequalize,Sequelize) => {
    const User = sequalize.define("users",{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email : {
            type : Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        fullName : {
            type : Sequelize.STRING,
            allowNull: false,
        },
        password : {
            type : Sequelize.STRING,
            allowNull: false,
        },
    })
    return User
}