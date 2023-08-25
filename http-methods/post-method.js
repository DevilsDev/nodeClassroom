const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())

app.post('/upload' , (req,res) => {
const userInfo = req.body


res.send(`Files ${userInfo} uploaded!`)
})

app.listen(3000, () => {
console.log('Server listening on port 3000')
})
