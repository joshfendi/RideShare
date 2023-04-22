const express = require('express');
const test = require('./test.route');
const rides= require('./rides.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: "/test",
        route: test,
    },
    {
        path: "/rides",
        route: rides,
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
