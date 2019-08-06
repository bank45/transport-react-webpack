
const { createServer } = require('http');
const express = require('express');
const router = require('./src/router');
const compression = require('compression')
const morgan = require('morgan');
const path = require('path');

//const bodyParser = require('body-parser');

const nonalizePort = port => parseInt(port, 10);
const PORT = nonalizePort(process.env.PORT || 3000);

const app = express();
const dev = app.get('env') !== 'production';

app.use(express.json())
app.use(express.urlencoded({
    extended: true,
    type: "application/x-www-form-urlencoded"
}))

app.use('/api', router);

if (!dev) {
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));
    app.use(express.static(path.resolve(__dirname, 'dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));

    })

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        next();
    })

}
console.log(app.get('env'))
console.log('dev', dev)


if (dev) {
    app.use(morgan('dev'));
}



const server = createServer(app);

server.listen(PORT, err => {
    if (err) throw err

    console.log('Server started ...', PORT)
})
