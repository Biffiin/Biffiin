import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (request, response) => {

    console.log(request)

    response.send('td certo')
})

app.get('/usuarios', (request, response) => {
    response.send('tmj, eh isso')
})
//"Node server.js" for init
app.listen(3000)

app.put('/usuarios')
app.delete('/usuarios')
