function Thermostat(temperature = DEFAULT_TEMPERATURE) {
  this.temperature = temperature;
  this.powerSave = true;
};

const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;

  Thermostat.prototype.getCurrentTemperature = function () {
    return this.temperature;
  };

  Thermostat.prototype.increaseTemperature = function () {
    if (this.getCurrentTemperature() < this._maxTemperature()) {
      this.temperature++;
    }
    else {
      this.temperature = this._maxTemperature()
    };
  };

  Thermostat.prototype.decreaseTemperature = function () {
    if (this.getCurrentTemperature() >= MINIMUM_TEMPERATURE) {
      this.temperature--;
    }
    else {
      this.temperature = MINIMUM_TEMPERATURE;
    };
  };

  Thermostat.prototype.powerSaveSwitch = function() {
    this.powerSave ? false : true;
  };

  Thermostat.prototype.resetTemmperature = function() {
    this.temperature = DEFAULT_TEMPERATURE;
  };


  Thermostat.prototype._maxTemperature = function () {
    if (this.powerSave === true) {
      return 25;
    }
    else {
      return 35;
    };
  };
