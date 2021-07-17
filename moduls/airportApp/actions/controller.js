
const Person = require("../entities/person");
const Seat = require("../entities/seat");
const Passenger = require("../entities/passenger");
const Flight = require("../entities/flight");



const createFlight = (relation, date) => {
    return new Flight(relation, date)
}


const createPassenger = (firstName, lastName, seatNumber, category) => {
    var person = new Person(firstName, lastName)
    var seat = new Seat(seatNumber, category);
    return new Passenger(person, seat);
}

module.exports = {createFlight, createPassenger};