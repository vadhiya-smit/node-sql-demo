const httpStatus = require("http-status");
const { Error } = require("sequelize");
const { Users } = require("../modals");
const ApiError = require("../utils/apiError");

const createUser = async (user) => {
    try {
        return await Users.create(user)   
    } catch (error) {
        if(error instanceof Error){
            throw new ApiError(httpStatus.BAD_REQUEST, error.errors.map(x => x.message).join(","))
        };
    }
}

const getUserbyId = async (id) => {
    const user = await Users.findByPk(id)
    if (!user) throw new ApiError(httpStatus.BAD_REQUEST, "User not exist")
    return user
}


const getAllUsers = async () => {
    const data = await Users.findAll({
        attributes: {
            exclude: ["password"]
        }
    })
    return data
}

const updateUser = async (id, data) => {
    const user = await getUserbyId(id)
    await user.set({ ...data })
    return await user.save()
}

const deleteUser = async (id) => {
    const user = await getUserbyId(id)
    await user.destroy()
}

module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
    getUserbyId
}