var searchInput;
var currentTime = moment().format("MMM Do YY");
// console.log(currentTime);


//Display current date info next to city element
var divCurrentTime = $("<div>");
$("#dateValue").append(divCurrentTime).text("|" + currentTime);


$("button").on("click", function (event) {
    event.preventDefault();
    searchInput = $("#searchInput").val();
    // console.log(searchInput);
    var apiKey = "469eff1dd9ce916ee85217295447e872";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + apiKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //get city value from API1
        $("#cityValue").text(response.name);
        //create a variable to get iconcode id from API1
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
        //grab latitude value so you can add to API2 url
        var lat = response.coord.lat
        // console.log("lat" + lat)
        //grab longitude value so you can add to API2 url
        var lon = response.coord.lon
        // console.log("lon" + lon)
        // console.log(response)

        //create a variable for city id to add to API 3 url
        var cityId = response.id
        // console.log(cityId);


        //in order to get UV index data you have to grab the lat & lon value from API1 and add it to API2 url
        var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon
        // console.log(queryURL2)
        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function (response) {
            //add UV index value to UV Index line
            $("#uvValue").text(response.value);
            // console.log(response);
        });

        //in order to pull 5 day forecast you have to grab the city id from API1 and add it to API3 url
        var queryURL3 = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&appid=" + apiKey
        console.log(queryURL3)
        $.ajax({
            url: queryURL3,
            method: "GET"
        }).then(function (response) {

            //DAY 2 DATA
            var day2val = response.list[0].dt_txt;
            day2val = moment.parseZone(day2val).format('MMM Do YYYY');
            console.log(day2val);
            $("#date2").text(day2val);
            //create a variable to get day 2 icon from API 3
            var iconcode2 = response.list[0].weather[0].icon
            console.log(iconcode2)
            //create icon url variable and apply var iconcode to it so the url dynamically changes by identifying the id returned by iconcode
            var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
            console.log(iconurl2)
            //display image icon in day 2 element    
            $("#icon2").attr("src", iconurl2)
            //store temp and display on temp element
            var day2TempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
            console.log(day2TempF);
            $("#tempValue2").text(day2TempF.toFixed(0));
            var humidity2 = (response.list[0].main.humidity)
            console.log(humidity2)
            $("#humidityValue2").text(humidity2)

            //DAY 3 DATA
            var day3val = response.list[8].dt_txt;
            day3val = moment.parseZone(day3val).format('MMM Do YYYY');
            console.log(day3val);
            $("#date3").text(day3val);
            //create a variable to get day 2 icon from API 3
            var iconcode3 = response.list[8].weather[0].icon
            console.log(iconcode3)
            //create icon url variable and apply var iconcode to it so the url dynamically changes by identifying the id returned by iconcode
            var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
            console.log(iconurl3)
            //display image icon in day 2 element    
            $("#icon3").attr("src", iconurl3)
            //store temp and display on temp element
            var day3TempF = (response.list[8].main.temp - 273.15) * 1.80 + 32;
            console.log(day3TempF);
            $("#tempValue3").text(day3TempF.toFixed(0));
            var humidity3 = (response.list[8].main.humidity)
            console.log(humidity3)
            $("#humidityValue3").text(humidity3)

            //DAY 4 DATA
            var day4val = response.list[16].dt_txt;
            day4val = moment.parseZone(day4val).format('MMM Do YYYY');
            console.log(day4val);
            $("#date4").text(day4val);
            //create a variable to get day 2 icon from API 3
            var iconcode4 = response.list[16].weather[0].icon;
            console.log(iconcode4);
            //create icon url variable and apply var iconcode to it so the url dynamically changes by identifying the id returned by iconcode
            var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png";
            console.log(iconurl4);
            //display image icon in day 2 element    
            $("#icon4").attr("src", iconurl4);
            //store temp and display on temp element
            var day4TempF = (response.list[16].main.temp - 273.15) * 1.80 + 32;
            console.log(day4TempF);
            $("#tempValue4").text(day4TempF.toFixed(0));
            var humidity4 = (response.list[16].main.humidity);
            console.log(humidity4);
            $("#humidityValue4").text(humidity4);

            
            //DAY 5 DATA
            var day5val = response.list[24].dt_txt;
            day5val = moment.parseZone(day5val).format('MMM Do YYYY');
            console.log(day5val);
            $("#date5").text(day5val);
            //create a variable to get day 2 icon from API 3
            var iconcode5 = response.list[24].weather[0].icon;
            console.log(iconcode5);
            //create icon url variable and apply var iconcode to it so the url dynamically changes by identifying the id returned by iconcode
            var iconurl5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png";
            console.log(iconurl5);
            //display image icon in day 2 element    
            $("#icon5").attr("src", iconurl5);
            //store temp and display on temp element
            var day5TempF = (response.list[24].main.temp - 273.15) * 1.80 + 32;
            console.log(day5TempF);
            $("#tempValue5").text(day5TempF.toFixed(0));
            var humidity5 = (response.list[24].main.humidity);
            console.log(humidity5);
            $("#humidityValue5").text(humidity5);

            //DAY 6 DATA
            var day6val = response.list[32].dt_txt;
            day6val = moment.parseZone(day6val).format('MMM Do YYYY');
            console.log(day6val);
            $("#date6").text(day6val);
            //create a variable to get day 2 icon from API 3
            var iconcode6 = response.list[32].weather[0].icon;
            console.log(iconcode6);
            //create icon url variable and apply var iconcode to it so the url dynamically changes by identifying the id returned by iconcode
            var iconurl6 = "http://openweathermap.org/img/w/" + iconcode6 + ".png";
            console.log(iconurl6);
            //display image icon in day 2 element    
            $("#icon6").attr("src", iconurl6);
            //store temp and display on temp element
            var day6TempF = (response.list[32].main.temp - 273.15) * 1.80 + 32;
            console.log(day6TempF);
            $("#tempValue6").text(day6TempF.toFixed(0));
            var humidity6 = (response.list[32].main.humidity);
            console.log(humidity6);
            $("#humidityValue6").text(humidity6);

            console.log(response)
        });
    });

});


//store a city input value in a key

//pull the key value and run the click event

//grab the api date and use moment js to convert

//function




