const express = require('express')
const cors = require('cors')

const app =express()

app.use(cors())

app.use('/items', (req,res) => {
res.json({message: ' items are accessible from different domains'})
})

app.listen(3000, () => {
console.log(`Server running on port 3000`)
})
