$(document).ready(function(){

  var thermostat = new Thermostat;

  $('#temperature').text(thermostat.getCurrentTemperature());

  $('#increaseTemperature').on('click', function() {
    thermostat.increaseTemperature();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });

  $('#decreaseTemperature').on('click', function() {
    thermostat.decreaseTemperature();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });

  $('#powerSaveSwitch').on('click', function() {
    thermostat.powerSaveSwitch();
    $('#powerSave').text(thermostat.powerSaveStatus());
  });

  $('#resetTemperature').on('click', function() {
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });
})
