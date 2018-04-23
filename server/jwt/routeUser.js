var express = require('express');
var router = express.Router();


router.get('/profile', function(req, res, next) {
    res.send({firstName: 'Артём', lastName: 'Самофалов', secret: 'Секрет'});
});

module.exports = router;
