const { userServices } = require("../services")
const catchAsync = require("../utils/catchAsync")

const addUser = catchAsync(async (req,res) => {
    const data = await userServices.createUser(req.body)
    res.send(data)
})

const getAllUsers = catchAsync(async (req,res) => {
    const data = await userServices.getAllUsers()
    res.send(data)
})

const getUserById = catchAsync(async (req,res) => {
    const data = await userServices.getUserbyId(req.params.id)
    res.send(data)
}) 

const updateUserById = catchAsync(async (req,res) => {
    const data = await userServices.updateUser(req.params.id, req.body)
    res.send(data)
})

const removeUserById = catchAsync(async (req,res) => {
    const data = await userServices.deleteUser(req.params.id)
    res.send({
        id : req.params.id,
        deleted : true
    })
})

module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    updateUserById,
    removeUserById
}