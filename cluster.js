/**
 * Created by Glutton on 2016/2/14.
 */
'use strict'

const cluster = require("cluster")
const http = require('http');
const numCPUs = require('os').cpus().length;
console.info(cluster.isMaster);

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
    }).listen(8000);
}