const express = require('express')
const helmet = require('helmet')

const app =express()

app.use(helmet())

app.get('/', (req,res) => {
res.send('Secured Path')
})

app.listen(3000, () => {
console.log('Server running on port 3000')
})
