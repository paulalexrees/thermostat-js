function Thermostat(temperature = DEFAULT_TEMPERATURE) {
  this.temperature = temperature;
};

const DEFAULT_TEMPERATURE = 20;

  Thermostat.prototype.increaseTemperature = function () {
     this.temperature++;
  };

  Thermostat.prototype.decreaseTemperature = function () {
     this.temperature--;
  };
