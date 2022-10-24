const Router = require('express')
const  router = new Router()
const controller = require('../controllers/controller')

router.get('/api/history/', controller.getHistory)
router.get('/api/coin/', controller.getCoins)
router.get('/api/tweet/', controller.getTweets)

module.exports = router;