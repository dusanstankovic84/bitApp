
const Airport = require("./entities/airport");
const controller = require("./actions/controller");


(function () {

	try {
		const nikolaTesla = new Airport()
		
		const belgradeParis = controller.createFlight("Belgrade - Paris", "Oct 25 2017")
		const barcelonaBelgrade = controller.createFlight("Barcelona - Belgrade", "Nov 11 2017")
		
		const passenger1 = controller.createPassenger("Dario", "Stamenkovic", 67, "b")
		const passenger2 = controller.createPassenger("Cersei", "Lannister", 62, "b")
		const passenger3 = controller.createPassenger("Daenerys", "Targaryen", 14)
		const passenger4 = controller.createPassenger("Nikola", "Colovic")
		
		belgradeParis.addPassenger(passenger1)
		belgradeParis.addPassenger(passenger2)
		barcelonaBelgrade.addPassenger(passenger3)
		barcelonaBelgrade.addPassenger(passenger4)
		
		nikolaTesla.addFlight(belgradeParis)
		nikolaTesla.addFlight(barcelonaBelgrade)
		
		console.log(nikolaTesla.getData());

	} catch (error) {
		console.log('Error message:' + error.message);
	}

})();