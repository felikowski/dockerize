import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!Trying whole new settings')
})

app.listen(port, () => {
    console.log(`Example app (updated) listening on port ${port}`)
})