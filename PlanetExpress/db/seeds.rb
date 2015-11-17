# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)





user = User.create([
  {
    name: "Jonty",
    password: "bad_password",
    user_type: "admin"
  },
  {
    name: "Olivia",
    password: "i'm a toddler",
    user_type: "toddler"
  }
])

planes = Airplane.create([
  {
    name: "737",
    row: 6,
    column: 50
  },
  {
    name: "747",
    row: 8,
    column: 150
  },
  {
    name: "fighter_jet",
    row: 1,
    column: 2
  },
  {
    name: "airbus",
    row: 8,
    column: 300
  }
])

flights = Flight.create([
  {
    number: 5454,
    origin: "san diego",
    destination: "toronto",
    seating_array: [0,0,0,0,0],
    airplane_id: 1
  },
  {
    number: 88,
    origin: "brisbane",
    destination: "the moon",
    seating_array: [0,0,0,0,0],
    airplane_id: 2
  }
])

reservations = Reservation.create([
  {
    seat_reserved: "A2",
    user_id: 1,
    flight_id: 1
  },
  {
    seat_reserved: "X2",
    user_id: 2,
    flight_id: 2
  }
])
