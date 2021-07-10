

const Genre = require('../entities/Genre');

class Movie {
    constructor(title, genre, length) {
        if (!genre || !(genre instanceof Genre)) {
            console.log("invalid input");
            return;
        }
        if (typeof length !== "number") {
            throw new Error("Movie length has to be number");
        }
        this.title = title;
        this.genre = genre;
        this.length = length;
    }
    getData() {
        return `${this.title}, ${this.length}min, ${this.genre.getData()}`;
    }
}

module.exports = Movie;