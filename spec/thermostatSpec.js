describe("Thermostat", function() {
	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat();
	});

	it("should have a default temperature of 20", function(){
		expect(thermostat.temp).toEqual(20);
	});

	it("has a default maxTemp of 25", function() {
		expect(thermostat.maxTemp).toEqual(25);
	});

	describe("#increaseTemp",function(){
		it("should increase temperature by one", function(){
			thermostat.increaseTemp();
			expect(thermostat.temp).toEqual(21);
		});

		it("should have a maxTemp of 25", function() {
			for(i = 1; i < 6; i ++) {
				thermostat.increaseTemp();
			}
			var temp = function() {
				thermostat.increaseTemp();
			};
			expect(temp).toThrow("Maximum temp reached");
		});
	});

	describe("#decreaseTemp",function(){
		it("should decrease temperature by one", function(){
			thermostat.decreaseTemp();
			expect(thermostat.temp).toEqual(19);
		});

		it("should have a minimum temperature of 10", function() {
			for(i = 1; i < 11; i++) {
				thermostat.decreaseTemp();
			}
			var temp = function() {
				thermostat.decreaseTemp();
			};
			expect(temp).toThrow("Minimum temp reached");
		});
	});

	describe("#togglePowerSaving", function (){
		it("should change maxTemp to 32 when turned off", function() {
			thermostat.togglePowerSaving();
			expect(thermostat.maxTemp).toEqual(32);
		});

		it("should change maxTemp to 25 when turned on", function() {
			thermostat.togglePowerSaving();
			thermostat.togglePowerSaving();
			expect(thermostat.maxTemp).toEqual(25);
		});
	});
});
