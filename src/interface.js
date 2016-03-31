$(document).ready(function(){

  var thermostat = new Thermostat;
  updateDisplay();

  function updateDisplay() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.temperatureColour());
    $('#powerSaveSwitch').attr('class',thermostat.powerSaveStatus());

  };

  $('#increaseTemperature').on('click', function() {
    thermostat.increaseTemperature();
    updateDisplay();
  });

  $('#decreaseTemperature').on('click', function() {
    thermostat.decreaseTemperature();
    updateDisplay();
  });

  $('#powerSaveSwitch').on('click', function() {
    thermostat.powerSaveSwitch();
    $('#powerSave').text(thermostat.powerSaveStatus());
    updateDisplay();
  });

  $('#resetTemperature').on('click', function() {
    thermostat.resetTemperature();
    updateDisplay();
  });

  $("#submit").click(function() {
    var city = $("#city").val();
    $("#display-city").text(city);
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c74750056623d5bf9582e07bc0b923ea&units=metric", function(data) {
      $("#api-temp").text(data.main.temp);
    });
  });


  $("section button").click(function () {
    var temp = thermostat.getCurrentTemperature();
    $.ajax({
      type: "POST",
      url: "http://localhost:4567/temperature",
      async: false,
      data: { "temp": temp },
      crossDomain: true
    });
  });

  $(window).load(function (){
    // $.ajax({
    //   type: "GET",
    //   url: "http://localhost:4567/temperature",
    //   data: data,
    //   dataType: "json",
    //   success: function (){
    //     console.log(data);
    //   }
    // });

    $.get("http://localhost:4567/temperature", function(data) {
      console.log(data)
      // $("#temperature").text(data.temp)
    });

  });
})
