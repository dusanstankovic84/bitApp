
const Passenger = require("./passenger");

class Flight {
    constructor(relation, date) {
        if (!relation || !date) {
            throw new Error('Fields relation and date are required');
        }
        this.relation = relation
        this.date = new Date(date)
        this.listOfPassengers = []
        this.addPassenger = function (passenger) {
            if (!passenger || !(passenger instanceof Passenger)) {
                throw new Error('Invalid passenger data')
            }
            this.listOfPassengers.push(passenger);
        }
        this.getData = function () {
            var year = this.date.getFullYear();
            var month = this.date.getMonth() + 1;
            var day = this.date.getDate();
            var result = '\t' + day + '.' + month + '.' + year + ', ' + this.relation + '\n';
            this.listOfPassengers.forEach(function (passenger) {
                result += '\t\t' + passenger.getData() + '\n'
            })
            return result;
        }
    }
}

module.exports = Flight;