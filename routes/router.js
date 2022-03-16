"use strict";
const express = require('express');
const router = express.Router();

router.use(express.static('public'));

router.get('/', (req, res) => {
	res.render('pages/home', {
		title: 'Example ATLA Homepage',
		name: 'ATLA Example Home'
	});
});

router.get('*', (req, res) => {
	switch(req.url) {
		case '/favicon.ico/':
			res.end();
			break;
		default:
			res.status(404).sendFile('html/404.html', {root: 'public'});
			break;
	}
});

module.exports = router;
