import loadRoutes from './config/routes.js';
import express from 'express';
const app = express();
/**
 * Build the application
 */
export default function build() {
    loadRoutes(app);
    serve();
}

function serve() {
    app.listen(3000, () => {
        console.log(`Delivering burgers on port ${3000}`)
    })
}