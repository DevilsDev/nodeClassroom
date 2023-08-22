const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))

app.use('/', (req,res) => {
res.send('Home Page')
})

app.listen(3000, () => {
console.log(`Sever running on port 3000`)
})
