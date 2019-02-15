const express = require ('express')
const appController = require('../controllers/appcontroller')
const router = express.Router()

router.get('/ok', appController.check)
router.get('/me', appController.getMe)


module.exports = router
