const express = require('express')
const app = new express()

app.use('*', (req, res) => {
    res.send('you are not login...., pls login')
})

app.listen(5001, (err) => {
    if (!err) {
        console.log('start')
    }
})