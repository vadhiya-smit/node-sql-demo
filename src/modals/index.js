
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'test',
 'root',
 'tops12345',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Users = require("./users.modal")(sequelize,Sequelize)

module.exports = db