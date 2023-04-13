const bcrypt = require('bcrypt');

const projectModel = require('./project.model');

const jwt = require('jsonwebtoken');

const secretKey = 'mysecretkey';

class projectController {
    getLogin = async (request, response) => {
        const { username, pasword } = request.body;
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
                    message: 'Passwords do not match, try again'
                });
        } else {
            response.status(404).json({
                message: 'there is no name'
            })
        }
    }
}

module.exports = new projectController();