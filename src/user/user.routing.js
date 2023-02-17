var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function (req, res, next) {
    res.send('respond with user');
});

router.get('/:id', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.delete('/:id', function (req, res, next) {
    res.send('respond with a resource');
});
router.patch('/:id', function (req, res, next) {
    res.send('respond with a resource');
});


module.exports = router;
