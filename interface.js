$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemp();

  $('#increaseTemp').click(function() {
    thermostat.increaseTemp();
    updateTemp();
  });

  $('#decreaseTemp').click(function() {
    thermostat.decreaseTemp();
    updateTemp();
  });

  $('#resetTemp').click(function() {
    thermostat.resetTemp();
    updateTemp();
  });

  $('#togglePowerSaving').click(function() {
    thermostat.togglePowerSaving();
    updateTemp();
    thermostat.powerSavingOn ? $('#powerStatus').text("on") : $('#powerStatus').text("off");
  });

  function updateTemp() {
    $('#currentTemp').text("The current temperature is: " + thermostat.temp);
  }

});
