const { Router } = require('express')
const usersRoutes = require("./user.route")
    
const routes = new Router();

routes.use("/users",usersRoutes)

module.exports = routes;
