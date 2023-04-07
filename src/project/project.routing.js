var express = require('express');
var router = express.Router();
const projectController = require('./project.controller')

/* GET users listing. */
router.post('/login', projectController.getLogin);



module.exports = router;