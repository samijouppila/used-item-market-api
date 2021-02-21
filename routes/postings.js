const express = require('express');
const postingRouter = express.Router();
const axios = require('axios');
const posting_url = process.env.POSTING_SERVICE_URL;

postingRouter.post('', async function(req, res) {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json"
        },
    };
    if (req.headers['authorization']) {
        axiosConfig.headers.Authorization = req.headers.authorization;
    }
    try {
        const response = await axios.post(encodeURI(posting_url + '/api/postings'), req.body, axiosConfig);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})

postingRouter.get('/:slug', async function(req, res) {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json"
        },
    };
    if (req.headers['authorization']) {
        axiosConfig.headers.Authorization = req.headers.authorization;
    }
    try {
        const response = await axios.get(encodeURI(posting_url + '/api/postings/' + req.params.slug), axiosConfig);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})

postingRouter.get('', async function(req, res) {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json"
        },
    };
    if (req.headers['authorization']) {
        axiosConfig.headers.Authorization = req.headers.authorization;
    }
    if (req['query']) {
        axiosConfig.params = req.query;
    }
    try {
        const response = await axios.get(encodeURI(posting_url + '/api/postings'), axiosConfig);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})

postingRouter.put('/:slug', async function(req, res) {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json"
        },
    };
    if (req.headers['authorization']) {
        axiosConfig.headers.Authorization = req.headers.authorization;
    }
    try {
        const response = await axios.put(encodeURI(posting_url + '/api/postings/' + req.params.slug), req.body,  axiosConfig);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})

//postingRouter.delete('/:slug', checkJwt, deleteExistingPosting);

postingRouter.delete('/:slug', async function(req, res) {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json"
        },
    };
    if (req.headers['authorization']) {
        axiosConfig.headers.Authorization = req.headers.authorization;
    }
    try {
        const response = await axios.delete(encodeURI(posting_url + '/api/postings/' + req.params.slug), axiosConfig);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})

module.exports = postingRouter;
