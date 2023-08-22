const express = require('express')
const app = express()

const isAuthenticated = (req) ={
//return req.headers['authorization'] === 'Token'
}

app.use((req, res, next) => {
if(isAuthenticated(req)) {
next()
} else {
res.redirect('/login')
}
})

app.get('/', (req,res) => {
res.send('Welcome to the payment page')
})

app.listen(3000, () => {
console.log('Server running on port 3000')
})