$(document).ready(function() {
    $("#search-button").click(function(e) {
        var lon = null;
        var lat = null;
        e.preventDefault();
        var searchString = $('#search-input').val();
        var urlEncodedSearchString = encodeURIComponent(searchString);
        $.get({
            url:  `https://maps.googleapis.com/maps/api/geocode/json?address=${urlEncodedSearchString}&key=AIzaSyAYanbbSEBkB8-cLZDvfOHsT_aFjSH0Sx8`,
            method: "GET",
            success: function(response) {
                //console.log(response);
                lon = response.results[0].geometry.location.lng;
                lat = response.results[0].geometry.location.lat;
                //console.log(lon);
                //console.log(lat);
                //window.location = `www.slopeyseconds.com/results?lat=${lat}&lon=${lon}&maxDistance=200&maxResults=500&key=7046239-5096e852b476adae0deb9f9bafa8d07c`;
                window.location = `./results.html?lat=${lat}&lon=${lon}&maxDistance=200&maxResults=500&key=7046239-5096e852b476adae0deb9f9bafa8d07c`;
                // $.get({
                //     url:  `https://www.powderproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=200&maxResults=500&key=7046239-5096e852b476adae0deb9f9bafa8d07c`,
                //     method: "GET",
                //     success: function(response) {
                //         console.log(response);
                //         $.get({
                //             url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=cbed4c888d36d90062aed1633a29d4ab`,
                //             method: "GET",
                //             success: function(response) {
                //                 console.log(response);
                //             }
                //         });
                //     }
                // })
            }
        })
    })
})

