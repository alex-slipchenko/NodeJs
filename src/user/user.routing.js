var userController = require('./user.controller');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with user');
});

router.get('/:id', userController.getOneUser);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);
router.patch('/:id', userController.updateUser);
// ==================================================

module.exports = router;
