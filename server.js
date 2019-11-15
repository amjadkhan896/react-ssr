const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

// With express
const express = require('express')
app.prepare().then(() => {
    express().use(handler).listen(3000)
})

// Without express
const {createServer} = require('http')
app.prepare().then(() => {
    const server = express();
    server.get('*', (req, res) => handle(req, res));
    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`🤘 on http://localhost:${port}`);
    });
});