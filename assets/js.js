var apikey="8146fc372939ba1529f0cee4a074681a";

/* lookup logic */
function search(city) {
    var apiurl = "https://api.openweathermap.or/data/2.5/weather?q="+city+ "units=imperial&appid="+apikey;
    var weatherUrl ="https://api.openweathermap.org/data/2.5/forcast?q=" +city+ "&units=imperial&appid=apikey";
}

$.ajax({
    url: apiurl,
    method:'GET'
})

.then(function (Response){
$("#forecast").empty();
var date = moment().formant('MMMM Do,YYYY');
})
/*NOT REALLY SURE I GOOGLE THIS FUNCTION,*/

// City section and forecast elements//
var cityE1= $("<h2 class='card-header city bg-light text-dark'>").html("<i class='fa-solid fa-calender-days mr-1'></i> " + Response.name + "-");
var dateE1= cityEl.append(""+date);
var temp = $("<p>").text("Temperature:" + Response.main.temp);
var humidity = $("<p>").text("Humidity:" + Response.main,humidity);
var wind=$("<p>").text("wind speed:" + Response.wind.speed);
var weather = Response.weather[0].main;

if (weather === "Rain") {
    var icon = $('<img>').attr("src", "http://openweathermap.org/img/wn/09d.png");
    icon.attr("style", "width: 60px; height: 60px");
} else if (weather === "Clouds") {
    var icon = $('<img>').attr("src", "http://openweathermap.org/img/wn/03d.png");
    icon.attr("style", "width: 60px; height: 60px");
} else if (weather === "Scattered Clouds") {
    var icon = $('<img>').attr("src", "http://openweathermap.org/img/wn/03d.png");
    icon.attr("style", "width: 60px; height: 60px");
} else if (weather === "Mist") {
    var icon = $('<img>').attr("src", "http://openweathermap.org/img/wn/50d.png");
    icon.attr("style", "width: 60px; height: 60px");
} else if (weather === "Thunderstorm") {
    var icon = $('<img>').attr("src", "http://openweathermap.org/img/wn/1d.png");
    icon.attr("style", "width: 60px; height: 60px");
} else if (weather === "Few Clouds") {
    var icon = $('<img>').attr("src", "http://openweathermap.org/img/wn/02d.png");
    icon.attr("style", "width: 60px; height: 60px");
} else if (weather === "Drizzle") {
    var icon = $('<img>').attr("src", "http://openweathermap.org/img/wn/10d.png");
    icon.attr("style", "width: 60px; height: 60px");
} else if (weather === "Clear") {
    var icon = $('<img>').attr("src", "http://openweathermap.org/img/wn/01d.png");
    icon.attr("style", "width: 60px; height: 60px");
} else if (weather === "Snow") {
    var icon = $('<img>').attr("src", "http://openweathermap.org/img/wn/13d.png");
    icon.attr("style", "width: 60px; height: 60px");
}
var newDivEl = $('<div class="forecast-style">')
newDivEl.append(dateEl, icon, temp, humidity, wind);
$("#forecast").html(newDivEl);


//htpps://api.openweathermap.org/data/2.5/uvi?&appi google api*//
var lat = Response.coord.lat;
var lon = Response.coord.lon;
var uvUrl ="htpps://api.openweathermap.org/data/2.5/uvi?&appid=" + apikey + "&lat=" + lat + "&lon=" + lon;
 
$.ajax({
url: uvUrl,
method: 'GET'    
})

.then(function (Response) {
 $('#uv-levels').empty();
 var uv = Response.value;
 var uvDiv = $('<p id="uv">').html("<h6>UV Index:" + Response.value + "</h6>");  
// color uv help by tutor and explain 
 $('#uv-levels')/html(uvDiv);

 if (Response.value <4) {
    $("#uv").attr("class", "badge badge-danger"); 
}

 else if (Response.vaule <8) {
    $("#uv").attr("class", "badge badge-danger");
 }
else {
    $("#uv").attr("class", "badge badge-danger");
}


});


$.ajax({
    url: weatherUrl,
    method: 'GET'
})
.then(function (response) {
    // store forecast to an array list //
    var returnForecast = response.list;
    $("#weekly").empty();
    for (var i = 0; i < returnForecast.length; i += 6) {
        // forecast div element
        var forecastDiv = $("<div class='div-style card text-white bg-secondary m-1 mb-10 p-2 shadow-lg'>");
        // forecast temp, date, and humidtiy variables
        var forecastDate = returnForecast[i].dt_txt;
        var setFcDate = forecastDate.substr(0,10);
        var mainTemp = returnForecast[i].main.temp;
        var hum = returnForecast[i].main.humidity;


        // forecast results html elements 
        var indexDate = $("<h5 class='card-title'>").html('<i class="fa-solid fa-calendar-day mr-1"></i> ' + setFcDate);
        var tempEl = $("<p class='card-text'>").text("Temperature: " + mainTemp);
        var humEl = $("<p class='card-text'>").text("Humidity: " + hum); 

        var forecastWeather = returnForecast[i].weather[0].main 
        // forecast weather icons 
        if (forecastWeather === "Rain") {
            var forecastIcon = $('<img class="center-block">').attr("src", "http://openweathermap.org/img/wn/09d.png");
            forecastIcon.attr("style", "width: 50px; height: 50px");
        } else if (forecastWeather === "Drizzle") {
            var forecastIcon = $('<img class="center-block">').attr("src", "http://openweathermap.org/img/wn/11d.png");
            forecastIcon.attr("style", "width: 50px; height: 50px");
        } else if (forecastWeather === "Mist") {
            var forecastIcon = $('<img class="center-block">').attr("src", "http://openweathermap.org/img/wn/75d.png");
            forecastIcon.attr("style", "width: 50px; height: 50px");
        } else if (forecastWeather === "Scattered Clouds") {
            var forecastIcon = $('<img class="center-block">').attr("src", "http://openweathermap.org/img/wn/03d.png");
            forecastIcon.attr("style", "width: 50px; height: 50px");
        } else if (forecastWeather === "Few Clouds") {
            var forecastIcon = $('<img class="center-block">').attr("src", "http://openweathermap.org/img/wn/02d.png");
            forecastIcon.attr("style", "width: 50px; height: 50px");
        } else if (forecastWeather === "Thunderstorm") {
            var forecastIcon = $('<img class="center-block">').attr("src", "http://openweathermap.org/img/wn/10d.png");
            forecastIcon.attr("style", "width: 50px; height: 50px");
        } else if (forecastWeather === "Clouds") {
            var forecastIcon = $('<img class="center-block">').attr("src", "http://openweathermap.org/img/wn/03d.png");
            forecastIcon.attr("style", "width: 50px; height: 50px");
        } else if (forecastWeather === "Clear") {
            var forecastIcon = $('<img class="center-block">').attr("src", "http://openweathermap.org/img/wn/01d.png");
            forecastIcon.attr("style", "width: 50px; height: 50px");
        } else if (forecastWeather === "Snow") {
            var forecastIcon = $('<img class="center-block">').attr("src", "http://openweathermap.org/img/wn/13d.png");
            forecastIcon.attr("style", "width: 50px; height: 50px");
        }

        // append forecast to index
        forecastDiv.append(indexDate);
        forecastDiv.append(forecastIcon);
        forecastDiv.append(tempEl);
        forecastDiv.append(humEl);
        $("#weekly").append(forecastDiv);
        }
    });


loadSaved();

    /* city location logic */

    $("#search-btn").on("click", function (event) {
        event.preventDefault();
        // set and save searched city variable to localstorage //
        var saved = [];
        var savedSearches = JSON.parse(localStorage.getItem('city'));
            if (savedSearches) {
                saved.push(...savedSearches);
            }
            var citySearch = $("#city-search").val().trim();
            //citySearch = citySearch.toLowerCase();
            if (saved.includes(citySearch)) {
                return;
            }
 
            saved.push(citySearch)

            localStorage.setItem('city', JSON.stringify(saved));

            search(citySearch);

        var searchHistory = $("<button class='btn-block my-sm-1 my-2 btn border text-muted mt-1 shadow-sm bg-white rounded'>").text(citySearch);
        var divEl = $("<div>");
        divEl.append(searchHistory)
        $("#local-search").prepend(divEl);
    });
    function loadSaved() {
        var searchedItems = JSON.parse(localStorage.getItem('city'));
            if (searchedItems) {
                for (let index = 0; index < searchedItems.length; index++) {
                    const searchedItem = searchedItems[index];
                    var searchHistory = $("<button class='btn-block my-sm-1 my-2 btn border text-muted mt-1 shadow-sm bg-white rounded'>").text(searchedItem);
                    var divEl = $("<div>");
                    divEl.append(searchHistory)
                    $("#local-search").prepend(divEl);
                }
            }

    }
// clickable location history 
$("#local-search").on('click', '.btn', function(event) {
    event.preventDefault();
    search($(this).text());
});
$("#clear-btn").on("click", function (event) {
    event.preventDefault();
    $("#local-search").html("");
    localStorage.clear();
})