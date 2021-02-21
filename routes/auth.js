const express = require('express');
const authRouter = express.Router();
const axios = require('axios');
const login_url = process.env.LOGIN_SERVICE_URL;

const {
    issueNewJwtToken,
    authenticateHttpBasic
} = require('../controllers/authController');

authRouter.get('/login', async function(req, res) {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json"
        },
    };
    if (req.headers['authorization']) {
        axiosConfig.headers.Authorization = req.headers.authorization;
    }
    try {
        const response = await axios.get(encodeURI(login_url + '/api/auth/login'), axiosConfig);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})

module.exports = authRouter;