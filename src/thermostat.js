function Thermostat(){
  this.temp = 20;
}

Thermostat.prototype.increaseTemp = function () {
  this.temp ++;
};

Thermostat.prototype.decreaseTemp = function () {
  this.temp --;
};
