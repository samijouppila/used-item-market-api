const env = require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send("Used item market application root. See /api for the API");
})

const apiRouter = require('./routes');

app.use('/api', apiRouter);

let server = null;

module.exports = {
    close: function () {
        server.close();
    },
    start: async function (mode) {
        server = app.listen(port, () => {
            console.log(`Used item market API listening on port ${port}\n`);
        });
    }
};