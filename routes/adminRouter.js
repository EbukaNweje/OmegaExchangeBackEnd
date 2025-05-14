const router = require("express").Router()
const { confirmDeposit, confirmWithdraw, trunOnUserNotification } = require("../controllers/Admin")


router.post('/confirm-deposit/:depositId', confirmDeposit)
router.post('/confirm-withdrawal/:withdrawId', confirmWithdraw)
router.post('/turn-on-user-notification/:userId', trunOnUserNotification)

module.exports = router
