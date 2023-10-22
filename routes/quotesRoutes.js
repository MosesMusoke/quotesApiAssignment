const express = require('express')

const {getAllQuotes, getASpecificQuote, addANewQuote, updateASpecificQuote, deleteAQuote} = require('../controllers/quotesControllers')

const router = express.Router()

router.get('/', getAllQuotes)
router.get('/:quoteId', getASpecificQuote)
router.post('/', addANewQuote)
router.put('/:quoteId', updateASpecificQuote)
router.delete('/:quoteId', deleteAQuote)

module.exports = router