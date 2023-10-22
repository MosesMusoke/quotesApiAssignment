const express = require('express')
const quotesRoutes = require('./routes/quotesRoutes')

const app = express()
const port = 4000

app.use(express.json())
app.use('/api/v1/quotes', quotesRoutes)

app.get('/', (req, res) => {
    res.send('YYYOOOOOOOOOOOOOOOOOOOOOOHHHHH')
})






app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

