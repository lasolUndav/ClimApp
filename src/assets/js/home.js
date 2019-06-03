function setup(){
  showDefaultWeather();  
}

function showDefaultWeather(){
  setDefaultWeather();
}

function getWeatherDataFor(response){
  var currentDate = new Date;
  var defaultWather ={
    date : currentDate.toLocaleDateString(),
    location : response.sys.country,
    degrees : response.main.temp,
    imageUrl :  `http://openweathermap.org/img/w/${response.weather[0].icon}.png`,
    description : response.weather.description
  };  
  return defaultWather;
}

function setDefaultWeather(){
  var currentDate = new Date;
  var datosPinierio = 
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?appid=01ff1417eeb4a81b09ac68b15958d453&q=pi%C3%B1eyro,ar',
    success: function(respuesta) {
      var datosPinierio = getWeatherDataFor(respuesta);
      showWeather(datosPinierio);
    },
    error: function() {
          console.log("No se ha podido obtener la información");
      }
  });
}

function showWeather(weather){
  $('#lugar').text(weather.location);
  $('#fecha').text(weather.date);
  $("#imagen").attr("src",weather.imageUrl);
  $("#temperatura").text(weather.degrees);
  $('#descripcion').text(weather.description);
}

/*lasolUndav/pes*/ 

$(document).ready(function() {
  setup();
});