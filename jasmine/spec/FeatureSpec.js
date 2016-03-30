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
    for(i=1;i<=15;i++){
      thermostat.downButton();
    };
    thermostat.downButton();
    expect(thermostat.temp).toEqual(MIN_TEMP);
  });

  it('if power saving mode is on, the max temperature is 25 degrees', function(){
    thermostat.powerSavingOn();
    for(i=1;i<=7;i++){
      thermostat.upButton();
    };
    expect(thermostat.temp).toEqual(MAX_TEMP_POWER_SAVING);
  });

  it('if power saving mode is off, the max temperature is 32 degrees', function(){
    thermostat.powerSavingOff();
    for(i=1;i<=15;i++){
      thermostat.upButton();
    };
    expect(thermostat.maxTemp()).toEqual(MAX_TEMP_POWER_SAVING_OFF);
  });

  it('resets to default when you hit the reset button', function(){
    spyOn(thermostat,'getTemp').and.returnValue(18);
    thermostat.resetButton();
    expect(thermostat.temp).toEqual(DEFAULT_TEMP);
  });

});
