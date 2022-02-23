const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/user', userRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;