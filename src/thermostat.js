function Thermostat(){
  this.temp = 20;
  this.maxTemp = 25;
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
  this.maxTemp == 25 ? this.maxTemp = 32 : this.maxTemp = 25;
};
