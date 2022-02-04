const router = require('express').Router()
const AuthController = require('../controllers/AuthController') 

router.post('/register', AuthController.register)

router.post('/login', AuthController.login)

router.post('/logout', AuthController.logout)

router.post('/refresh_token', AuthController.generateAccessToken)




module.exports = router