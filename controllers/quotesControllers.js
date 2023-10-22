const quotes = require("../model/quotesModal")

function getAllQuotes (req, res) {
    try {
        res.json({status:200, data: quotes})
    } catch (error) {
        console.error(error.message);
    }
}

function getASpecificQuote (req, res) { 
    try {
        const id = parseInt(req.params.quoteId)
        let selectedQuote = quotes.find((quote) => quote.id === id)

        res.send({status:200, data:selectedQuote})    
    } catch (error) {
        console.error(error.message);
    }
    
}

function addANewQuote (req, res) {
    try {
        const newQuote = { id:quotes.length + 1, 
                           author:req.body.author, 
                           quote:req.body.quote 
        }

        quotes.push(newQuote)

        res.redirect('/api/v1/quotes')
    
    } catch (error) {
        console.error(error.message);
    }
}

function updateASpecificQuote (req, res) {
    try {
        let targetQuote = quotes.find(quote => quote.id === parseInt(req.params.quoteId))

        if(targetQuote) {
            if (req.body.id) {
                targetQuote.name = req.body.name;
            }

            if (req.body.author) {
                targetQuote.author = req.body.author;
            }

            if (req.body.quote) {
                targetQuote.quote = req.body.quote;
            }

            res.redirect('/api/v1/quotes')

        }
        else {
            res.json('quote is not in the database')
        }
    } catch (error) {
        console.error(error.message);
    }
}

function deleteAQuote (req, res) {
    try {

        let id = parseInt(req.params.quoteId)

        let targetQuote = quotes.find(quote => quote.id === parseInt(id))

        if(!targetQuote) {
            res.json({message:"quote to delete not found"})
        }
        else {
            let index = quotes.indexOf(targetQuote)
            quotes.splice(index, 1)

            res.redirect('/api/v1/quotes')
        }
        
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {getAllQuotes,
    getASpecificQuote,
    addANewQuote,
    updateASpecificQuote,
    deleteAQuote
}


