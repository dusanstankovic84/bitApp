
const Program = require('../entities/Program');

class Festival {
    constructor(name, maxMovies) {
        if (typeof maxMovies !== "number") {
            throw new Error("maxMovies has to be number");
        }

        this.name = name;
        this.maxMovies = maxMovies;
        this.listOfPrograms = [];
    }
    getNumOfMovies() {
        let count = 0;
        this.listOfPrograms.forEach(function (program) {
            count += program.getTotalMovies();
        });
        return count;
    }
    addProgram(program) {
        if (!program || !(program instanceof Program)) {
            console.log("Invalid input!!!");
            return;
        }
        if (this.getNumOfMovies() + program.listOfMovies.length > this.maxMovies) {
            console.log("You reached the maximum number of movies. Program has not added.");
            return;
        }
        this.listOfPrograms.push(program);
    }
    getData() {
        let resultsStr = this.name
        if (this.listOfPrograms.length === 0) {
            resultsStr += "\n \t Program to be announced";
            return resultsStr;
        }
        resultsStr += ` has ${this.getNumOfMovies()} movie titles \n`;
        this.listOfPrograms.forEach(function (program) {
            resultsStr += `${program.getData()} \n`;
        })
        return resultsStr;
    }
}

module.exports = Festival;