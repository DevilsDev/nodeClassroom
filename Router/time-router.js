const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
req.requestTime = Date.now()
next()
})

router.get('/time', (req,res) => {
const responseTime = Date.now() - requestTime
res.send(`${responseTime}`)
})

const app = express()

app.use('/home', router)

app.listen(3000, () => {
console.log('Server running on port 3000')
})