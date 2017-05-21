$(document).ready( function(){

  //url();

  $(".far").on("click", function() {

    var string = "&units=imperial";

    url(string);

  });

  $(".cel").on("click", function() {

    var string = "&units=metric";

    url(string);

  });

  function url(units) {
    //alert("BYE");
    var location = "http://ip-api.com/json";

    $.getJSON(location, function(locData) {
      var lat = locData.lat;
      var lon = locData.lon;

      var weather = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +"&appid=09e27585e120575e42ad8b3d7275e3aa" + units;
      console.log(lat, lon);

      console.log(weather);

      $.getJSON(weather, function(weatherData)  {
        console.log(weatherData);

        $(".loc").html(weatherData.name  + ", Longitude: " + weatherData.coord.lon + ", Latitude: " + weatherData.coord.lat);
        $(".temp").html(weatherData.main.temp);
        $(".cloud").html(weatherData.weather[0].description);
        $(".wind").html(weatherData.wind.speed);
        $(".humid").html(weatherData.main.humidity);

        var icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";

        $("img").attr("src", icon);

      });

    });
  }

});
