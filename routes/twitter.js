var express = require('express');
var router = express.Router();
const getTwitter = require('../modules/twitterOauth')

/* GET users listing. */
router.get('/', function (req, res, next) {
	getTwitter(req.query.twitterQuery, (err, data) => {
		if (err) console.log(err)
		else return res.send(data)
	})
});

module.exports = router;
