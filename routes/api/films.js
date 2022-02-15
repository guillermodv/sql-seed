const router = require('express').Router();

const apiFilmsRouter = require('.api/films');
route.use('/films', apiFilmsRouter);

module.exports = router;