const express = require('express')
const path = require('path')
const fs = require('fs')

const app =express()

app.use((req,res, next) => {
console.log(`Received request from ${req.body}`)
next()
})

app.get('/', (req,res) => {
const htmlPage = path.join(__dirname, 'index.html')
})

fs.readFileSync(htmlPage, 'utf8', (err, htmlPage) => {
if(err) {
console.error(err)
res.status(500).send('Internal Server Error')
return
}
res.send(htmlPage)
})

app.listen(3000, () => {
console.log('Server running on port 3000')
})
