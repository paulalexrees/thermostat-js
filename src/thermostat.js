function Thermostat(temperature = DEFAULT_TEMPERATURE) {
  this.temperature = temperature;
};

const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;

  Thermostat.prototype.increaseTemperature = function () {
     this.temperature++;
  };

  Thermostat.prototype.decreaseTemperature = function () {
    if (this.temperature >= MINIMUM_TEMPERATURE) {
      this.temperature--;
    }
    else {
      this.temperature = MINIMUM_TEMPERATURE;
    };
  };
