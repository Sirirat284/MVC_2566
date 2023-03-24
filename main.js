const express = require('express');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const path = require('path')
const routes = require("./router/router.js");
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'view'))

app.use(helmet());
app.use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        "script-src": ["'self'", "'unsafe-inline'", "example.com"],
        "img-src": ["'self'", "https: data:"]
      }
    })
  )
// For Master process
if (cluster.isMaster) {
    console.log(`[ Master ] ${process.pid} is running`);
    console.log(`[starting] http://localhost:${port}/`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
}

else {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(helmet())
    app.use(express.json());
    app.use(routes);
    app.listen(port, err => {
        err ?
            console.log("Error in server setup") :
            console.log(`[ Worker ] ${process.pid} started`);
    });
}