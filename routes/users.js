const express = require('express');
const userRouter = express.Router();
const axios = require('axios');
const login_url = process.env.LOGIN_SERVICE_URL;

const {
    checkJwt
} = require('../controllers/authController')

const {
    createNewUser,
    getSelectedUserData,
    modifySelectedUserData,
    deleteSelectedUser,
    getSelectedUserPostings,
    getSelectedUserSinglePosting
} = require('../controllers/userController');

//userRouter.post('', createNewUser);

userRouter.post('', async function(req, res) {
    try {
        const response = await axios.post(encodeURI(login_url + '/api/users'), req.body);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
})

userRouter.get('/:id', checkJwt, getSelectedUserData);

userRouter.put('/:id', checkJwt, modifySelectedUserData);

userRouter.delete('/:id', checkJwt, deleteSelectedUser);

userRouter.get('/:id/postings', checkJwt, getSelectedUserPostings);

userRouter.get('/:id/postings/:slug', checkJwt, getSelectedUserSinglePosting);


module.exports = userRouter;