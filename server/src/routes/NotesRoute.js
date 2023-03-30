const express = require('express')

const router = express.Router();

router.post('/savenotes', SaveController)


module.exports  = router