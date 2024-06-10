require('dotenv').config()
const express = require('express'); //Import the express dependency
const app = express();
app.use(express.json());
app.use(express.urlencoded({ limit: '200mb', extended: true }));

app.get('/', (req, res) => {     
    res.json({
        message: 'Successfully executed command'
    })  
});

// For all non-defined routes: 404 Routes
app.all('*', (req, res, next) => {
    res.status(500).json({ status: 'fail', msg: 'Cannot find end point url' });
});

app.use(function (err, req, res, next) {
    res.status(500).json({ status: 'fail', msg: err.message });
});
module.exports = app 