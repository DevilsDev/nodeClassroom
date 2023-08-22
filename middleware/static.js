const express = require('express')
const path = require('path')

const app = express()

const staticPath = path.join(__dirname, 'public')
app.use(express.static(staticPath))

app.get('/', (req,res) => {
res.send('Static files are now served from the public dir')
})


app.listen(3000, () => {
console.log('Sever running on port 3000')
})
