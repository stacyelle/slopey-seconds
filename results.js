$(function(){

    var lat = getQueryVariable("lat");
    var lon = getQueryVariable("lon");
    //console.log('lat:', lat, 'lon:', lon);

    $.ajax({
        url:  `https://www.powderproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=200&maxResults=500&key=7046239-5096e852b476adae0deb9f9bafa8d07c`,
        method: "GET",
        success: function(response) {
            console.log(response);
            var returnedTrails = renderTrails(response.trails);
                    $('.card').append(returnedTrails)
            $.ajax({
                url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=cbed4c888d36d90062aed1633a29d4ab`,
                method: "GET",
                success: function(response) {
                    console.log(response);
                }
            });
        }
    })

    function renderTrails(trailArray) {
        var finalHTML = '';

        trailArray.forEach(function(currentTrail) {
            finalHTML += '<img class="card-img-top" src="' + currentTrail.imgSmall + '" alt="Card image cap">'
            finalHTML += '<div class="card-body">';
            finalHTML += '<h5 class="card-title">Location: ' + currentTrail.name + '</h5>';
            finalHTML += '<h6 class="card-subtitle mb-2 text-muted">' + currentTrail.location + '</h6>';
            finalHTML += '<p class="card-text">Descent: ' + currentTrail.descent + '</p>';
            finalHTML += '<p class="card-text">difficulty: ' + currentTrail.difficulty + '</p>';
            finalHTML += '<p class="card-text">Stars: ' + currentTrail.stars + '</p>';
            finalHTML += '<p class="card-text">Star Votes: ' + currentTrail.starVotes + '</p>';
            finalHTML += '<a href=' + currentTrail.url + 'class="card-link">More Info</a>';
            finalHTML += '</div>'
        });
        return finalHTML;
    }

});

