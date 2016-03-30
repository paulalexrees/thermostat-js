$( document ).ready(function(){

  var thermostat = new Thermostat();
  function updateTemp(){
  	$("#temp").text("Current temperature: " + thermostat.temp);
  	$('#temp').attr('class', thermostat.displayColor());
  };

  updateTemp();
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
