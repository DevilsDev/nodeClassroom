const express = require('express')
const router = express.Router()

router.use('/user', express.json())

router.post('/user', (req,res, next) => {
if(!req.body.name || !req.body.email) {
return res.status(400).send('Name and email are not provided!')
} else {

next();
 (req,res) => {
 res.send('User Created')
 }
}
})

const app = express()
app.use('/home', router)
app.listen(3000, () => {
console.log('Server running on port 3000')
})