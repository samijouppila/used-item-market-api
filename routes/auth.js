const express = require('express');
const authRouter = express.Router();

const {
    issueNewJwtToken,
    authenticateHttpBasic
} = require('../controllers/authController');

authRouter.get('/login', authenticateHttpBasic, issueNewJwtToken)

/*authRouter.get('/login', function(req, res) {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    };

    const response = await axios.get()
})*/

module.exports = authRouter;