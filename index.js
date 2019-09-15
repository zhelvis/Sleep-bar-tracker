const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// https and CORS
const https = require('https');
const cors = require('cors');


// Self-signed SSL Certificate
const key = fs.readFileSync(__dirname + '/certs/selfsigned.key');
const cert = fs.readFileSync(__dirname + '/certs/selfsigned.cert');
const options = {
    key: key,
    cert: cert
};

app.use(cors());
app.use(express.static(path.join(__dirname, 'www')));

const server = https.createServer(options, app);
server.listen(3000, () => {
    console.log("server starting on port 3000");
});