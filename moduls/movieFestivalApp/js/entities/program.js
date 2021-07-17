

const Movie = require('../entities/Movie');

class Program {
    constructor(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
    }
    countOfGenre(movie) {
        let count = 0;
        this.listOfMovies.forEach(function (element) {
            if (element.genre.name === movie.genre.name) {
                count++;
            }
        });
        return count;
    }
    lengthOfAllMovie() {
        let sumOfMinutes = 0;
        this.listOfMovies.forEach(function (item) {
            sumOfMinutes += item.length;
        });
        return sumOfMinutes;
    }
    addMovie(movie) {
        if (!movie || !(movie instanceof Movie)) {
            console.log("Invalid input!!!");
            return;
        }
        if (this.countOfGenre(movie) >= 4) {
            console.log(`there is already maximum movies of that genre! Movie ${movie.title} not added`);
            return;
        }
        const allMovieLength = this.lengthOfAllMovie() / 60;
        const movieInHours = movie.length / 60;
        if (allMovieLength + movieInHours > 8) {
            console.log(`Length of program exceeds 8 hours! Movie ${movie.title} not added to program`);
            return;
        }
        this.listOfMovies.push(movie);
    }
    getTotalMovies() {
        return this.listOfMovies.length;
    }
    getData() {
        const day = this.date.getDate();
        const month = this.date.getMonth() + 1;
        const year = this.date.getFullYear();
        const date = `${day}.${month}.${year}`;
        let resultStr = ` ${date}, ${this.lengthOfAllMovie()}min\n`;
        for (let i = 0; i < this.listOfMovies.length; i++) {
            if (i === this.listOfMovies.length - 1) {
                resultStr += `    ${this.listOfMovies[i].getData()}`;
            } else {
                resultStr += `    ${this.listOfMovies[i].getData()}\n`;
            }
        }
        return resultStr;
    }
}

module.exports = Program;
