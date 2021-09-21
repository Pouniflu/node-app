const express = require('express')
const app = express()
const port = 8080

app.get('/', (res, req) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})