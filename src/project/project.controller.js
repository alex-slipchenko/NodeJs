// const { response } = require("express")

// class userController {
//     getOneUser = async (request, response) => {
//         const { id } = request.params;
//         const user = await userModel.find(id);
//         // const user = { name: 'alex' }

//         response.send(user);
//     }
//     createUser = async (request, response) => {
//         const body = request.body;
//         const user = await userModel.createUser(body);
//         // const user = { name: 'alex' }
//         response.send(user);
//     }
//     deleteUser = async (request, response) => {
//         const { id } = request.params;
//         // const user = await userModel.findIdUser(id);
//         const user = { name: 'alex' }
//         response.send(user);
//     }
//     updateUser = async (request, response) => {
//         const body = request.body;
//         const { id } = request.params;
//         const user = await userModel.findIdUseAndUpdate(id, body);
//         // const user = { name: 'alex' }
//         response.send(user);
//     }

// }

// module.exports = new userController();