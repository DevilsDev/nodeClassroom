const express = require('express')
const router = express.Router()

const isUser = (req, res ,next) => {
if(req.query.user === 'true') {
    next()
}else {
res.status(400).send('Wrong email address or user name!')
}
}

router.get('/user', isUser, (req, res) => {
res.send('Welcome to your profile!')
})

const app = express()
app.use('/home', router)
app.listen(3000, () => {
console.log('Server running on port 3000')
})