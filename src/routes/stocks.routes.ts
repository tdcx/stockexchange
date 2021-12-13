// External Dependencies
import express, { Request, Response } from "express";
import { ObjectID, ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Stock from "../models/stocks";
const request = require('request')
import logger from "../utils/logger";

// Global Config
export const stockRouter = express.Router();

stockRouter.use(express.json());
// functions

function getAPIData(stocks?: any){
    var nStock = 0;
    stocks.forEach((element: any) => {
        const stock = element.symbol;
    

        const options = {
        method: 'GET',
        url: 'https://yh-finance.p.rapidapi.com/stock/v3/get-statistics',
        qs: {symbol: `${stock}`},
        headers: {
            'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
            'x-rapidapi-key': 'fa7d72b0f6mshbd0e50a1e04828cp1251e1jsn4871ee1fa168',
            useQueryString: true
        }
        };
        
        request(options, function (error: any, response: any, body: any) {
        if (error) throw new Error(error);
        try{
            const obj: Stock = JSON.parse(body);
            console.log(`todo bien, ${body}`)
            
            //stockRouter.locals.myVar + nStock = body;
            nStock = nStock + 1;
        }catch{logger.info(`No existe ${stock}`);}
    });
});
}


// GET
stockRouter.get("/", async (req: Request, res: Response) => {
    
    try {
        const stock = (await collections.stocks!.find({}).toArray()) as unknown as Stock[];
        getAPIData(stock);
        //console.log(apidata[0]);
        res.status(200).render("stocks", {stocks: stock});
    } catch (error:any) {
        res.status(500).send(error.message);
    }
    
});
stockRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        
        const query = { _id: new ObjectId(id) };
        const stock = (await collections.stocks!.findOne(query)) as unknown as Stock;

        if (stock) {
            res.status(200).send(stock);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching stock with symbol: ${req.params.symbol}`);
    }
});
// POST
stockRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newStock = req.body as Stock;
        const result = await collections.stocks!.insertOne(newStock);

        result
            ? res.status(201).send(`Successfully created stock with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new stock.");
    } catch (error: any) {
        console.error(error);
        res.status(400).send(error.message);
    }
});
// PUT
stockRouter.put("/:symbol", async (req: Request, res: Response) => {
    const symbol = req?.params?.symbol;

    try {
        const updateStock: Stock = req.body as Stock;
        const query = { _symbol: new ObjectId(symbol) };
      
        const result = await collections.stocks!.updateOne(query, { $set: updateStock });

        result
            ? res.status(200).send(`Successfully updated stock with id ${symbol}`)
            : res.status(304).send(`Stock with id: ${symbol} not updated`);
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});
// DELETE
stockRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.stocks!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed stock with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove stock with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Stock with id ${id} does not exist`);
        }
    } catch (error: any) {
        logger.error(error.message);
        res.status(400).send(error.message);
    }
});

