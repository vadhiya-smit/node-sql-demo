const { Router } = require('express');
const { userController } = require('../controller');


const routes = new Router();

routes.get("/:id",userController.getUserById)

routes.get("/",userController.getAllUsers)

routes.post("/", userController.addUser)
routes.put("/:id", userController.updateUserById)
routes.delete("/:id", userController.removeUserById)

module.exports = routes;
