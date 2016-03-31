$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemp();

  $('#slider').roundSlider({
    sliderType: "min-range",
    circleShape: "custom-quarter",
    value: 20,
    min: 10,
    max: 32,
    startAngle: 45,
    mouseScrollAction: true,
    editableTooltip: true,
    radius: 350,
    width: 6,
    handleSize: "+32",
    tooltipFormat: function (args) {
        return args.value + "\u00B0C";
    }

  });
  $("#slider").on("change", function (e) {
    console.log(e.value);
    thermostat.temp = e.value;
    if(e.value > thermostat.maxTemp){
      $("#slider").roundSlider("option", "value", 25);
      thermostat.temp =25;
    }
    updateTemp();
});

  $('#citySubmit').click(function() {
    var input = document.getElementById("cityInput").value;

    $.ajax({

      url: "http://api.openweathermap.org/data/2.5/weather",

      data: {
        q: input,
        appid: "c2655f9295a6ab2354dbcff1eb0e5fa7",
        units: "metric"
      },

      dataType: "json",
    })

    .done(function(data) {
      $('#cityTemp').text("The current temperature in " + input + " is: " + data['main']['temp'] + "\u00B0C");
    })

    .fail(function(xhr, status, errorThrown) {
      alert("It's too late, you're going to die.");
    });

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
    $("#slider").roundSlider("option", "value", thermostat.temp);
    updateTemp();
  });

  $('#togglePowerSaving').click(function() {
    thermostat.togglePowerSaving();
    thermostat.powerSavingOn ? $('#powerStatus').text("on") : $('#powerStatus').text("off");
    var obj = $("#slider").data("roundSlider");
    if(obj.option("value") > thermostat.maxTemp){
      $("#slider").roundSlider("option", "value", 25);
    }
    updateTemp();
  });

  function updateTemp() {
    $('#currentTemp').text("The current temperature is: " + thermostat.temp);
    $('#currentTemp').attr('class', thermostat.energyUsage());
  }

});
