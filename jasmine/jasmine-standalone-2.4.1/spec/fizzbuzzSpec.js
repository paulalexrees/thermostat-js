describe("FizzBuzz", function() {
	var fizzbuzz;

	beforeEach(function() {
		fizzbuzz = new FizzBuzz();
	});

	it("should return fizz if number is divisible by 3", function(){
		expect(fizzbuzz.rules(3)).toEqual("fizz");
	});

	it("should return buzz if number is divisible by 5", function(){
		expect(fizzbuzz.rules(5)).toEqual("buzz");
	});

	it("should return fizzbuzz if number is divisible by 5 and 3", function(){
		expect(fizzbuzz.rules(15)).toEqual("fizzbuzz");
	});

	it("should return the number if it is not divisible by 3 or 5", function(){
		expect(fizzbuzz.rules(2)).toEqual(2);
	});
});

