const express = require('express')
const router = express.Router()
const request = require('request')


router.get('/', (req: any, res: any) => {
    res.status(200).send({
        id: 1,
        stock: 'Apple Inc',
        symbol: 'AAPL'
    })
});

router.post('/:symbol', (req: any, res: any) => {
    const { symbol } = req.params;
    const options = {
      method: 'GET',
      url: 'https://yh-finance.p.rapidapi.com/stock/v3/get-statistics',
      qs: {symbol: `${symbol}`},
      headers: {
        'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
        'x-rapidapi-key': 'fa7d72b0f6mshbd0e50a1e04828cp1251e1jsn4871ee1fa168',
        useQueryString: true
      }
    };
    
    request(options, function (error: any, response: any, body: any) {
      if (error) throw new Error(error);
    
      res.status(200).send(body);
      console.log(body)
    });

  });
  
module.exports = router