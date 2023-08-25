const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.put('/user/:id', (req,res) => {

const userId =  req.params.id

const updatedInfo = req.body

res.send(`User information ${userId} updated!`)
})

app.listen(3000, () => {
console.log('Server running on port 3000')
})
