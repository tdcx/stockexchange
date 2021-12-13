import express, { Application, Request, Response, NextFunction } from 'express';
import { connect } from 'http2';
import logger from "./utils/logger";
import { connectToDatabase } from "./services/database.service"
import { stockRouter } from "./routes/stocks.routes";
import path from "path";
import bodyParser from 'body-parser';
const request = require('request')

const app: Application = express();
const PORT = 8080;

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use( express.json() );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

connectToDatabase()
    .then(() => {
        app.use("/stocks", stockRouter);

        app.listen(PORT, () => {
            logger.info(`Server started at http://localhost:${PORT}`);
        });
        app.get("/", (req: any, res: any) => {
            res.render("home");
        });
        app.post("/stock_data", (req: Request, res: Response) => {
            const bod = req?.body;
            const symbol = Object.keys(bod)[0];
            // var string = encodeURIComponent(`${symbol}`);
            // res.redirect('/?valid=' + string);
            res.redirect("/stocks")
        });
        app.post("/stock_add", (req: Request, res: Response) => {
            function updateClient(stock: any){
                var clientServerOptions = {
                    uri: `http://localhost:8080/stocks`,
                    body: JSON.stringify(stock),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                request(clientServerOptions, function (error:any, response:any) {
                    logger.info(error,response.body);
                    return;
                });
            }
            
            const bod = req?.body;
            const data = {"symbol": `${bod.add}`};
            updateClient(data);
            res.redirect('/stocks');
            
        });
        app.post("/stock_delete", (req: Request, res: Response) => {
            function updateClient(id: any){
                var clientServerOptions = {
                    uri: `http://localhost:8080/stocks/${id}`,
                    method: 'DELETE'
                }
                request(clientServerOptions, function (error:any, response:any) {
                    logger.info(error,response.body);
                });
                res.redirect("/stocks");
            }
            const bod = req?.body;
            const id = Object.keys(bod)[0];
            updateClient(id);
            
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });


