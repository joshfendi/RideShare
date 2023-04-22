const express = require('express');
const test = require('./test.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: "/test",
        route: test,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
