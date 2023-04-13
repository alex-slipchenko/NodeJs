const productsModel = require('./products.model');


class productsController {

    getAllProducts = async (request, response) => {

        const products = await productsModel.dowland();

        response.send(products);
    }

    getOneProducts = async (request, response) => {
        const { id } = request.params;
        const user = await productsModel.find(id);
        response.send(user);
    }



    createProducts = async (request, response) => {
        const body = request.body;
        const user = await productsModel.createUser(body);

        response.send(user);
    }

    deleteProducts = async (request, response) => {
        const { id } = request.params;
        const user = await productsModel.deleteIdUser(id);

        response.send(user);
    }

    updateProducts = async (request, response) => {
        const body = request.body;
        const { id } = request.params;
        const user = await productsModel.findIdUseAndUpdate(id, body);

        response.send(user);
    }

}

module.exports = new productsController();