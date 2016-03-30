$( document ).ready(function(){

  var thermostat = new Thermostat();
  $("#temp").text("Current temperature: " + thermostat.temp);
  console.log("shit");


  $("input[type='submit']").click(function(event){
    thermostat.upButton();
    $("#temp").text("Current temperature: " + thermostat.temp);
    console.log("poo");
  });

});
