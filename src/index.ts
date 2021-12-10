import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const PORT = 8080;

app.set('view engine', 'ejs')
app.use( express.json() )

app.get('/', (req: Request, res: Response) => {
    res.render('index', { context: "Word" })
});

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);

const stockRouter = require('../routes/stock')

app.use('/stock', stockRouter)