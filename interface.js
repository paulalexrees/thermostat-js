$( document ).ready(function(){
  var thermostat = new Thermostat();
  updateTemp();

  $("input[value='Submit']").click(function(event){
    var cityInput = document.getElementById('pickcity').value;
    $.ajax({
      url:"http://api.openweathermap.org/data/2.5/weather",

      data: {
        q: cityInput + 'uk',
        units: 'metric',
        appid: '233f405f671f804ad150ba3eaf2fd352'
      },

      type: "GET",

      dataType: "json",
    })
      .done(function( json ) {
        console.log(json['main']['temp']);
        $( "#getweather" ).text(cityInput + ": " + json['main']['temp'] + "\u00B0" + "C");
      })
      .fail(function( xhr, status, errorThrown) {
        alert("You fucked up good");
      })
      .always(function(xhr, status){
        alert("It did something");
      });

  });

  function updateTemp(){
  	$("#temp").text("Current temperature: " + thermostat.temp);
  	$('#temp').attr('class', thermostat.displayColor());
  };


  $("input[type='checkbox']").prop('checked', true);

  $("input[value='Increase Temp']").click(function(event){
    thermostat.upButton();
    updateTemp();
  });

  $("input[value='Decrease Temp']").click(function(event){
    thermostat.downButton();
    updateTemp();
  });

  $("input[value='Reset Temp']").click(function(event){
    thermostat.resetButton();
    updateTemp();
  });

  $("input[type='checkbox']").change(function(){
    if (this.checked) {
      thermostat.powerSavingOn();
    } else {
    	thermostat.powerSavingOff();
    };
    updateTemp();
	});



});
