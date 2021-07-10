
class Genre {
    constructor(name) {
        this.name = name;
    }
    getData() {
        const firstLetter = this.name[0].toUpperCase();
        const lastLetter = this.name[this.name.length - 1].toUpperCase();
        return `${firstLetter}${lastLetter}`;
    }
}

module.exports = Genre;