const express = require('express')
const cors = require('cors')
const app = express()
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router.js')

app.use(express.json())
app.use(cors())

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('hotel_bookings')
        const bookingsCollection = db.collection('bookings')
        const bookingsRouter = createRouter(bookingsCollection)
        app.use('/api/bookings', bookingsRouter)
    })
    .catch(console.error)

app.listen(5000, function() {
    console.log(`Listening on port ${this.address().port}`)
})