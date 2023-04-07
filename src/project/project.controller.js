const bcrypt = require('bcrypt');

const projectModel = require('./project.model');

const jwt = require('jsonwebtoken');

const secretKey = 'mysecretkey';

class projectController {
    getLogin = async (request, response) => {
        // const myRequest = JSON.parse(request.body);

        const { username, pasword } = request.body;
        console.log(request.body);
        const user = await projectModel.getInfo();

        if (username === user.name) {

            const saltRounds = 10;
            const hash = bcrypt.hashSync(user.pasword, saltRounds);
            const paswordRezult = bcrypt.compareSync(pasword, hash);

            const token = jwt.sign(user, secretKey, { expiresIn: 60 * 60 });

            paswordRezult ? response.status(200).json({
                token: `Bearer ${token}`
            }) :
                response.status(401).json({
                    message: 'Паролі не сходяться,спробуйте знову'
                });
        } else {
            response.status(404).json({
                message: 'такого имени нету'
            })
        }
    }
}

module.exports = new projectController();