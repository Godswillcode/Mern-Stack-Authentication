const express = require('express')
const router = express.Router()

const {register, login, forgotpassword, resetpassword} = require('../controllers/auth')