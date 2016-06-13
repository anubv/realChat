var express = require('express');
var router = express.Router();

router.get('/users', function (req, res, next) {
   res.render('users', {title: "bak bak", content :"isme baat kr skte hain"});
});

module.exports = router;