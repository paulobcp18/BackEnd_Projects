const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on localhost:${PORT}/`);
})

app.get('/api/quotes/random', (req, res, next) => {
    const quotation = getRandomElement(quotes);  
    res.send(
        {
            quote: quotation
        }
    );
})

app.get('/api/quotes', (req, res, next) => {
    const quoter = req.query()
    if (quoter) {
        res.send(quotes)
    } else {
        res.send(
            {
                quotes: quotes
            }
        )
    }
})
