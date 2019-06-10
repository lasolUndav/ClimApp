function setup(){
  showDefaultWeather();  
}

function showDefaultWeather(){
  setWeather({localidad:"piñeyro",pais:"ar"});
}

function pasarACelsius(gradosKelvin){
  return (gradosKelvin-273.15).toFixed(2)
}

function getWeatherDataFor(response){
  var currentDate = new Date;
  var weather ={
    date : currentDate.toLocaleDateString(),
    location : response.name+" "+response.sys.country,
    degrees : pasarACelsius(response.main.temp),
    imageUrl :  `http://openweathermap.org/img/w/${response.weather[0].icon}.png`,
    description : response.weather[0].description
  };  
  return weather;
}

function setWeather(localidad){
  var locationParameter= `&q=${localidad.localidad}${localidad.pais===null?'':','+localidad.pais}`
  var currentDate = new Date;
  var baseUrl= 'http://api.openweathermap.org/data/2.5/weather?appid=01ff1417eeb4a81b09ac68b15958d453';
  $.ajax({
    url: `${baseUrl}${locationParameter}`,
    success: function(respuesta) {
      var datosPinierio = getWeatherDataFor(respuesta);
      showWeather(datosPinierio);
    },
    error: function() {
          console.log("No se ha podido obtener la información");
      }
  });
}

function getLocation(){
  var searchText=document.getElementById("busqueda").value.split(',');
  var location={
    localidad: searchText[0],
    pais: searchText.length==2?searchText[1]:null
  }
  return location;
}

function recargarCiudad(){
  var ciudad =getLocation();
  setWeather(ciudad);
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