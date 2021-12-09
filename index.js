const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs')
app.use( express.json() )

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);

app.get('/', (req, res) => {
    res.render('index', { context: "Word" })
});

const stockRouter = require('./routes/stock')

app.use('/stock', stockRouter)