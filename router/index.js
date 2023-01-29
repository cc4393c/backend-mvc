const { Router } = require('express');
const { indexView, detailView } = require('../controllers');

const router = new Router();

router.get('/', indexView);

router.get('/detail/:id', detailView);

module.exports = router;