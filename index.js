const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	})
);

app.get('/', (req, res) => {
	res.json('hellllllo');
});

//

https: app.get('/results/:item', async (req, res) => {
	const item = req.params.item;
	await axios(
		`https://www.ebay.com/sch/i.html?_from=R40&_nkw=${item}&_sacat=0&LH_TitleDesc=0&LH_Auction=1&_sop=5`
	)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const results = [];

			$('.s-item', html).each(function () {
				const title = $(this)
					.find('.s-item__info')
					.find('.s-item__title')
					.text();

				const image = $(this)
					.find('.s-item__image-wrapper')
					.find('.s-item__image-img')
					.attr('src');

				const price = $(this)
					.find('.s-item__detail')
					.find('.s-item__price')
					.text();

				const bids = $(this)
					.find('.s-item__detail')
					.find('.s-item__bids')
					.text();

				const time = $(this)
					.find('.s-item__detail')
					.find('.s-item__time-left')
					.text();

				const condition = $(this)
					.find('.s-item__subtitle')
					.find('.SECONDARY_INFO')
					.text();

				const shippingCost = $(this)
					.find('.s-item__detail')
					.find('.s-item__shipping')
					.text();

				results.push({
					title,
					image,
					price,
					bids,
					time,
					condition,
					shippingCost,
				});
			});
			res.json(results);
		})
		.catch((err) => console.log(err));
});

app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}, J Master Bweem`)
);
