const request = require('request');

const options = {
  method: 'GET',
  url: 'https://yh-finance.p.rapidapi.com/auto-complete',
  qs: {q: 'tesla'},
  headers: {
    'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
    'x-rapidapi-key': 'fa7d72b0f6mshbd0e50a1e04828cp1251e1jsn4871ee1fa168',
    useQueryString: true
  }
};

request(options, function (error: any, response: any, body: any) {
	if (error) throw new Error(error);

	console.log(body);
});