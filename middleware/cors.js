const express = require('express')
const app = express()

app.use((req,res, next) => {
res.header('Access-Control-Allow-Origin', '*')
res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization')
if(req.method === 'OPTIONS') {
res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
return res.status(200).json({})
}
next()
})

app.get('/', (req, res) => {
res.send('CORS is enabled')
})

app.listen(3000, () => {
console.log('Server running on port 3000')
})