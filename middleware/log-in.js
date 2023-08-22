const express = requrie('express')
const app = express()

app.use((req, res, next) => {
console.log(`${req.method} request for ${req.url} ${JSON.stringify(req.header)} `)
next()
})

app.get('/', (req,res) => {
res.send('Landing Page')
})

app.listen(3000, () => {
console.log('Server running on port 3000')
})

