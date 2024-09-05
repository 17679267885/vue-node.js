const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
  res.send('启动成功express')
})

module.exports = router
