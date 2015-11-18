Reservation.destroy_all
Flight.destroy_all
User.destroy_all
Airplane.destroy_all

amy = User.create(name: 'Amy', password: 'amy1', user_type: "admin")
bob = User.create(name: 'Bob', password: 'bob1', user_type: "user")
cat = User.create(name: 'Cat', password: 'cat1', user_type: "user")

plane1 = Airplane.create(name: 'air1', row: 6, column: 10)
plane2 = Airplane.create(name: 'air2', row: 5, column: 15)
plane3 = Airplane.create(name: 'air3', row: 6, column: 20)
plane4 = Airplane.create(name: 'air4', row: 6, column: 25)

flight1 = Flight.create(number: 11, origin: "A", destination: "B", date: Date.strptime('01/01/2015', '%d/%m/%Y'), seating_array: [], airplane_id: plane1.id)
flight2 = Flight.create(number: 22, origin: "A", destination: "C", date: Date.strptime('01/02/2015', '%d/%m/%Y'), seating_array: [], airplane_id: plane2.id)
flight3 = Flight.create(number: 33, origin: "B", destination: "A", date: Date.strptime('01/03/2015', '%d/%m/%Y'), seating_array: [], airplane_id: plane3.id)
flight4 = Flight.create(number: 44, origin: "B", destination: "C", date: Date.strptime('01/10/2015', '%d/%m/%Y'), seating_array: [], airplane_id: plane4.id)
flight5 = Flight.create(number: 55, origin: "A", destination: "D", date: Date.strptime('01/11/2015', '%d/%m/%Y'), seating_array: [], airplane_id: plane1.id)

Reservation.create(seat_reserved: "1A", user_id: amy.id, flight_id: flight1.id)
Reservation.create(seat_reserved: "1B", user_id: bob.id, flight_id: flight2.id)
Reservation.create(seat_reserved: "1C", user_id: cat.id, flight_id: flight3.id)
Reservation.create(seat_reserved: "1D", user_id: amy.id, flight_id: flight4.id)
Reservation.create(seat_reserved: "1E", user_id: bob.id, flight_id: flight5.id)
