describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('temperature starts at 20 degrees', function(){
    expect(thermostat.temp).toEqual(DEFAULT_TEMP);
  });

  it('has a temperature up button', function(){
    expect(thermostat.upButton).not.toBeUndefined();
  });

  it('has a temperature down button', function(){
    expect(thermostat.downButton).not.toBeUndefined();
  });

  


});
