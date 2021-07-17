

class Person {

    constructor(name, surname) {
        if (!name || !surname) {
            throw new Error('Fields name and surname are required');
        }

        this.name = name
        this.surname = surname
        this.getData = function () {
            return this.name + ' ' + this.surname
        }
    }
}

module.exports = Person;

