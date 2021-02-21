const express = require('express');
const userRouter = express.Router();
const axios = require('axios');
const login_url = process.env.LOGIN_SERVICE_URL;

userRouter.post('', async function(req, res) {
    try {
        const response = await axios.post(encodeURI(login_url + '/api/users'), req.body);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})

userRouter.get('/:id', async function(req, res) {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json"
        },
    };
    if (req.headers['authorization']) {
        axiosConfig.headers.Authorization = req.headers.authorization;
    }
    try {
        const response = await axios.get(encodeURI(login_url + '/api/users/' + req.params.id), axiosConfig);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})

userRouter.put('/:id', async function(req, res) {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json"
        },
    };
    if (req.headers['authorization']) {
        axiosConfig.headers.Authorization = req.headers.authorization;
    }
    try {
        const response = await axios.put(encodeURI(login_url + '/api/users/' + req.params.id), req.body, axiosConfig);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})

userRouter.delete('/:id', async function(req, res) {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json"
        },
    };
    if (req.headers['authorization']) {
        axiosConfig.headers.Authorization = req.headers.authorization;
    }
    try {
        const response = await axios.delete(encodeURI(login_url + '/api/users/' + req.params.id), axiosConfig);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})

userRouter.get('/:id/postings', async function(req, res) {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json"
        },
    };
    if (req.headers['authorization']) {
        axiosConfig.headers.Authorization = req.headers.authorization;
    }
    try {
        const response = await axios.get(encodeURI(login_url + '/api/users/' + req.params.id + '/postings'), axiosConfig);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})

userRouter.get('/:id/postings/:slug', async function(req, res) {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json"
        },
    };
    if (req.headers['authorization']) {
        axiosConfig.headers.Authorization = req.headers.authorization;
    }
    try {
        const response = await axios.get(encodeURI(login_url + '/api/users/' + req.params.id + '/postings/' + req.params.slug), axiosConfig);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})


module.exports = userRouter;