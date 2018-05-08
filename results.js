$(function(){

    var lat = getQueryVariable("lat");
    var lon = getQueryVariable("lon");

    var promiseTrail = $.get(`https://www.powderproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=200&maxResults=500&key=7046239-5096e852b476adae0deb9f9bafa8d07c`);
    var promiseWeather = $.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=cbed4c888d36d90062aed1633a29d4ab`);
    
    Promise.all([promiseTrail, promiseWeather])
        .then(function (responses) {
            //console.log (responses);
            var returnedWeather = renderWeather(responses);
            var returnedTrails = renderTrails(responses); 
            $('.SRHeader').append(returnedWeather)
            $('.cardTrails').append(returnedTrails)
        });

    function renderWeather(responses) {
        var returnedLocation = responses[1].name;
        var returnedWeatherHigh = responses[1].main.temp_max;
        var returnedWeatherLow = responses[1].main.temp_min;
        var weatherDescription = responses[1].weather[0].description;
        var weatherHTML = '';

        weatherHTML += `<h5 class="intro-header">Search Results for: ${returnedLocation}</h5>`;
        weatherHTML += `<h6 class="weather">High: ${returnedWeatherHigh}&#8457</h6>`;
        weatherHTML += `<h6 class="weather">Low: ${returnedWeatherLow}&#8457</h6>`; 
        weatherHTML += `<h6 class="weather">${weatherDescription}</h6>`;     
        
        return weatherHTML;
    }; 

    function renderTrails(responses) {
        var finalHTML = '';
        
        
        responses[0].trails.forEach(function(currentTrail) {
            finalHTML += '<div class="card">';
            finalHTML += '<div class="row">';
            finalHTML += '<div class="col-md-4">';
            finalHTML += '<img class="w-100" src=' + currentTrail.imgSmall + '>';
            finalHTML += '</div>';
            finalHTML += '<div class="col-md-8 px-3">'
            finalHTML += '<div class="card-block px-3">';
            finalHTML += '<h5 class="card-title">' + currentTrail.name + '</h5>';
            finalHTML += '<h6 class="card-subtitle mb-2 text-muted">' + currentTrail.location + '</h6>';
            finalHTML += '<p class="card-text">Descent: ' + currentTrail.descent + '</p>';
            finalHTML += '<p class="card-text">difficulty: ' + currentTrail.difficulty + '</p>';
            finalHTML += '<p class="card-text">Stars: ' + currentTrail.stars + '</p>';
            finalHTML += '<p class="card-text">Star Votes: ' + currentTrail.starVotes + '</p>';
            finalHTML += '<a href=' + currentTrail.url + 'class="btn btn-primary">More Info</a>';
            finalHTML += '</div>'
            finalHTML += '</div>'
            finalHTML += '</div>'
            finalHTML += '</div>'
            finalHTML += '</div>'
        });
        return finalHTML;
    };
});

