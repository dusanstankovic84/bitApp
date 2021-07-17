
const Flight = require("./flight");

class Airport {
    constructor() {
        this.name = "Nikola Tesla"
        this.listOfFlights = []
        this.addFlight = function (flight) {
            if (!flight || !(flight instanceof Flight)) {
                throw new Error('Invalid flight data')
            }
            this.listOfFlights.push(flight);
        }
        this.getPassengersNumber = function () {
            var count = 0;
            this.listOfFlights.forEach(function (flight) {
                count += flight.listOfPassengers.length
            })
            return count;
        }
        this.getData = function () {
            var result = 'Airport: ' + this.name + ', total passengers: ' + this.getPassengersNumber() + '\n';
            this.listOfFlights.forEach(function (flight) {
                result += flight.getData();
            })
            return result
        }
    }
}

module.exports = Airport;