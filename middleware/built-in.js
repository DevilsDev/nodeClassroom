const express = require('express')
const app= express()

app.use(express.json())

app.post('/db', (req,res) => {
    const receivedDB = req.body
res.send(`DB list: ${JSON.stringify(receivedDB)}`)
})

app.listen(3000, () => {
console.log('Server running on port 3000')
})
