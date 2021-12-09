const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({
        id: 1,
        stock: 'Apple Inc',
        symbol: 'AAPL'
    })
});

router.post('/:id', (req, res) => {
    const { id } = req.params;
    const { stock } = req.body;
    const { symbol } = req.body;

    if(!stock || !symbol){
        res.status(418).send({ message: `We need the stock info for analysis` })
    }

    res.send({
        message: `Analysing stock: ${stock} ${symbol}`,
    });
});



module.exports = router