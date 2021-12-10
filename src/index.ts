import express, { Application, Request, Response, NextFunction } from 'express';
import { connect } from 'http2';
import logger from "./utils/logger";

const app: Application = express();
const PORT = 8080;

app.set('view engine', 'ejs')
app.use( express.json() )

app.get('/', (req: Request, res: Response) => {
    res.render('home', { context: "Word" })
});

app.listen(PORT, () => {
    logger.info(`App is running at http://localhost:${PORT}`)
});

const stockRouter = require('../routes/stock')

app.use('/stocks', stockRouter)