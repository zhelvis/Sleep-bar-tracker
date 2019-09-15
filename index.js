const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', (request, response) => {
    response.sendFile(__dirname+'/www/index.html');
});

router.get('/', (request, response) => {
    response.sendFile(__dirname+'/www/style.css');
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at port 3000');
