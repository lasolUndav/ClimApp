function setup(){
  showDefaultWeather();  
}

function showDefaultWeather(){
  var defaultWeather = getDefaultWeather();
  showWeather(defaultWeather);
}

function getDefaultWeather(){
  var currentDate = new Date;
  var defaultWather ={
    date : currentDate.toLocaleDateString(),
    location : '-',
    degrees : '-',
    imageUrl :  '',
    description : '-'
  };

  return defaultWather;
}

function showWeather(weather){
  $('#lugar').text(weather.location);
  $('#fecha').text(weather.date);
  $("#imagen").attr("src",weather.imageUrl);
  $("#temperatura").text(weather.degrees);
  $('#descripcion').text(weather.description);
}

$(document).ready(function() {
  setup();
});