use hotel_bookings
db.dropDatabase()

db.bookings.insertMany([
    {
        name: "Carlos Zubillaga",
        email: "car.zubillaga@gmail.com",
        checked_in: false
    },
    {
        name: "Morven Douglas",
        email: "morvendouglas-@hotmail.co.uk",
        checked_in: false
    },
    {
        name: "Neil Hanlon",
        email: "neil@ceo.org",
        checked_in: true
    }
])