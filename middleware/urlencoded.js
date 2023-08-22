const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.post('/cart', (req,res) => {
const cartData = req.body
res.send(`Received from car page: ${JSON.stringify(cartData)}`)
})

app.listen(3000, () => {
console.log('Server running on port 3000')
})
