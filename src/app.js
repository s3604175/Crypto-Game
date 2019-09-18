const path = require('path')
const express = require('express')
const hbs = require('hbs')
const getCryptoData = require('./utils/get-crypto-data.js')

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const groupName = 'H38-Wed'

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Crypto Game',
        name: groupName
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: groupName
    })
})

app.get('/crypto', (req, res) => {
    getCryptoData(req.query.crypto, req.query.currency, (error, { rate, time }) => {
        if (error) {
            return res.send({ error })
        }
        res.send({
            rate,
            time
        })
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        message: 'My 404 page',
        name: groupName
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})