import indexRoute from '../controller/routes/index';
import userRoute from '../controller/routes/user';
import orderRoute from '../controller/routes/order';
import { Express } from 'express-serve-static-core';

const GET_ROUTES = [
    {
        route: '/',
        method: indexRoute
    },
    {
        route: '/user',
        method: userRoute
    }
];

const POST_ROUTES = [
    {
        route: '/order',
        method: orderRoute
    }
];

export default function loadRoutes(app: Express) {
    GET_ROUTES.forEach((route) => {
        app.get(route.route, route.method);
    });

    POST_ROUTES.forEach((route) => {
        app.post(route.route, route.method);
    });
}
