describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('temperature starts at 20 degrees', function(){
    expect(thermostat.temp).toEqual(DEFAULT_TEMP);
  });

  it('powerSavingOn is on by default', function(){
    expect(thermostat.savingModeOn).toEqual(true);
  });

  it('returns the current temperature', function(){
    expect(thermostat.getTemp).not.toBeUndefined();
  });

  it('has a temperature up button', function(){
    expect(thermostat.upButton).not.toBeUndefined();
  });

  it('has a temperature down button', function(){
    expect(thermostat.downButton).not.toBeUndefined();
  });

  it('has a reset button', function(){
    expect(thermostat.resetButton).not.toBeUndefined();
  });

  it('if power saving mode is on, the max temperature is 25 degrees', function(){
    thermostat.powerSavingOn();
    expect(thermostat.maxTemp()).toEqual(MAX_TEMP_POWER_SAVING);
  });

  it('powerSavingOn turns saving mode on', function(){
    thermostat.powerSavingOff();
    thermostat.powerSavingOn();
    expect(thermostat.savingModeOn).toEqual(true);
  });

  it('powerSavingOff turns saving mode off', function(){
    thermostat.powerSavingOff();
    expect(thermostat.savingModeOn).toEqual(false);
  });

  it('if power saving mode is off, the max temperature is 32 degrees', function(){
    thermostat.powerSavingOff();
    expect(thermostat.maxTemp()).toEqual(MAX_TEMP_POWER_SAVING_OFF);
  });

  describe('Display colour', function(){


    it('is green when below 18 degrees', function(){
      for(i=1;i<=3;i++){
        thermostat.downButton();
      };
      expect(thermostat.displayColor()).toEqual("low-usage");
    });

    it('is yellow when between 18 and 24 degrees', function(){
      expect(thermostat.displayColor()).toEqual("medium-usage");
    });

    it('is red when above 24 degrees', function(){
      for(i=1;i<=5;i++){
        thermostat.upButton();
      };
      expect(thermostat.displayColor()).toEqual("high-usage");
    });

  });

});
