describe("Feature Test",function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('increases the temperature with the up button', function(){
    thermostat.upButton();
    expect(thermostat.temp).toEqual(DEFAULT_TEMP+1)
  });

  it('decreases the temperature with the down button', function(){
    thermostat.downButton();
    expect(thermostat.temp).toEqual(DEFAULT_TEMP-1);
  });

  it('cannot go below the minimum temperature', function(){
    for(i=1;i<=15;i++){ thermostat.downButton(); }
    expect(thermostat.temp).toEqual(MIN_TEMP);
  });

});
