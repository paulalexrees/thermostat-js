function Thermostat(){
  this.temp = 20;
  this.maxTemp = 25;
  this.powerSavingOn = true;
}

Thermostat.prototype.increaseTemp = function () {
  if (this.temp >= this.maxTemp) {
    throw("Maximum temp reached");
  }
  this.temp ++;
};

Thermostat.prototype.decreaseTemp = function () {
  if (this.temp <= 10) {
    throw("Minimum temp reached");
  }
  this.temp --;
};

Thermostat.prototype.togglePowerSaving = function () {
  if (this.maxTemp === 25) {
    this.maxTemp = 32;
    this.powerSavingOn = false;
  } else {
    this.maxTemp = 25;
    this.powerSavingOn = true;
  }
};

Thermostat.prototype.resetTemp = function () {
  this.temp = 20;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temp >= 25) return 'high-usage';
  if (this.temp > 18 && this.temp < 25) return 'medium-usage';
  if (this.temp <= 18) return 'low-usage';
};
