$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemp();

  $.ajax({

    url: "http://api.openweathermap.org/data/2.5/weather",

    data: {
      q: "london",
      appid: "c2655f9295a6ab2354dbcff1eb0e5fa7",
      units: "metric"
    },

    dataType: "json",
  })

  .done(function(data) {
    $('#cityTemp').text("The current temperature in London is: " + data['main']['temp'] +"C");
  })

  .fail(function(xhr, status, errorThrown) {
    alert("It's too late, you're going to die.");
  })

  .always(function() {
    alert("Try not to melt...");
  });


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
    $('#currentTemp').attr('class', thermostat.energyUsage());
  }

});
