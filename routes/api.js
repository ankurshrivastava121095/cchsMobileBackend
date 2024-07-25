const express = require('express')
const UserController = require('../controllers/UserController')
const middleWare = require('../middleware/Auth')
const FeesController = require('../controllers/FeesController')
const router = express.Router()

// UserController
router.post('/register', UserController.register)
router.post('/login', UserController.login)

// FeesController
router.post('/fees', middleWare, FeesController.add)
router.get('/fees', middleWare, FeesController.fetchAll)
router.get('/fees/:id', middleWare, FeesController.fetchById)
router.put('/fees/:id', middleWare, FeesController.update)

module.exports = router