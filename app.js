const express = require('express')
const router = require('./route')
const app = express()

const host = 'localhost';
const port = 8080;

app.get('/', function (req, res) {
    res.json({
        host,
        port
    })
})

// ini cara pakai router yg didefinisikan di route.js
app.use(router)

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})