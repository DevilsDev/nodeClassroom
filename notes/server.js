const express = require('express')
const bodyParser = require('body-parser')
const {v4: uuidv4} = require('uuid')

const app = express()


app.use(bodyParser.json())

const notes = {}

app.get('/notes/:id', (req,res)=> {

const note = notes[req.params.id]

if(note) {
res.json(note)
} else res.status(404).send('Note not found!')
})

app.post('/notes', (req,res) => {

const id = uuidv4()
const note = {
id,
title: req.body.title,
content: req.body.content
}

notes[id] = note
res.status(201).json(note)

})

app.put('/notes/:id', (req,res) => {

const note = notes[req.params.id]

if(note) {

note.title = req.body.title || note.title
note.content = req.body.content || note.content

res.json(note)
} else {

res.status(404).send('Note not found!')
}
})

app.delete('/notes/:id', (req,res) => {

const note = notes[req.body.id]

if(note) {
delete notes[req.body.id]
res.status(200).send('Note Deleted!')
} else {
res.status(404).send('Note not founded!')
}

})

app.listen(3000, () => {
console.log('Server running on port 3000')
})
