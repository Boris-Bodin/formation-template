var express = require('express');
var router = express.Router();

router.get('/:slideName', function (req, res, next) {
    res.render('slides', {
        session: req.params['slideName'],
    });
});

module.exports = router;
