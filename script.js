var searchInput;
var currentTime = moment().format("MMM Do YY");
console.log(currentTime);


//Display current date info next to city element
var divCurrentTime = $("<div>");
$("#dateValue").append(divCurrentTime).text("|" + currentTime);


$("button").on("click", function (event) {
    event.preventDefault();
    searchInput = $("#searchInput").val();
    console.log(searchInput);
    var apiKey = "469eff1dd9ce916ee85217295447e872";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + apiKey;



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //get city value from endpoint1
        $("#cityValue").text(response.name);
        //create a variable to get iconcode id from endpoint1
        var iconcode = response.weather[0].icon;
        //create icon url variable and apply var iconcode to it so the url dynamically changes by identifying the id returned by iconcode
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        //add the src attribute with the icon url to the weather icon at the top 
        $("#day1icon").attr("src", iconurl)
        //get temp data and change it to farenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        //add the value into the temperatue line and remove decimals
        $("#tempValue").text(tempF.toFixed(0) + " F");
        //add the value into the Wind line
        $("#windValue").text(response.wind.speed);
        //grab latitude value so you can add to endpoint2
        lat = response.coord.lat
        console.log("lat" + lat)
        //grab longitude value so you can add to endpoint2
        lon = response.coord.lon
        console.log("lat" + lon)
        console.log(response)

        //in order to get UV index data you have to grab the lat & lon value from endpoint1 and add it to endpoint2 url
        var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon
        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function (response) {
            //add UV index value to UV Index line
            $("#uvValue").text(response.value)
            console.log(response)
        });
    });
})





// //pull API data for the next 5 days  
// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {


//     console.log(response)

// });