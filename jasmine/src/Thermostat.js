const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;

function Thermostat(){
    this.temp = DEFAULT_TEMP;
};

Thermostat.prototype.upButton = function(){
  this.temp += 1;
};

Thermostat.prototype.downButton = function(){
  if(this.temp<=MIN_TEMP){ 
    this.temp = MIN_TEMP;
  }
  else{
    this.temp -= 1;
  };
};
