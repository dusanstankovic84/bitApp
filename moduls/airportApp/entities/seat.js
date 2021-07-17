

class Seat {

	constructor(number, category) {
		category = category || "e";
		number = number || Math.floor(91 * Math.random() + 10)
		if (!['e', 'b'].includes(category)) {
			throw new Error('Invalid category input');
		}

		this.number = number
		this.category = category;
		this.getData = function () {
			return this.number + ', ' + this.category.toUpperCase();
		}
	}
}

module.exports = Seat;