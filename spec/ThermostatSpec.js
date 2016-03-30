'use strict';

describe("Thermostat", function(){
  var thermostat;
  var i;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe("#increaseTemperature", function(){
    it("increase temoerature by 1", function(){
      thermostat.increaseTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
  });

  describe("#powerSaveSwitch", function(){
    it("limits the thermostat to 25 dgrees when on", function(){
      for(i=1; i <=20; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it("limits the thermostat to 32 degrees when off", function(){
      thermostat.powerSaveSwitch();
      for(i=1; i <=20; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe("#decreaseTemperature", function(){
    it("decrease temoerature by 1", function(){
      thermostat.decreaseTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it("cannot reduce temperature minimum temperature", function(){
      for(i=1; i <=20; i++){
        thermostat.decreaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe("#resetTemmperature", function() {
    it("resets the current temparature to defualt", function() {
      for(i=1; i <=5; i++){
        thermostat.decreaseTemperature();
      }
      thermostat.resetTemmperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    })
  });
});
