# slopey-seconds
Slopey Seconds | crowdsourced ski / snowboarding run conditions 

This project combines the Google Maps API, Powder Project API, Open Weather API, and EmailJS API to search for specific ski / snowboarding trail names and allow users to review their public rating, trail length, elevation, and more!

The logic: We pulled the longitude and latitude (lon/lat) information from the Google Maps API to match up with city and state provided by the user input. From here, we fed the lon/lat into the Powder Project API to return all trail within a 200 mile radius. The same lon/lat information from the Google Maps API was fed into the Open Weather API to provide current weather updates of the user's input location. On our home page, we connected our sign-up modal to the EmailJS API to send out template emails to our users based off their input information (name and email address). This email is also cc'd to our email so we could "add" them to our subscription group.

## Model

This project is broken down into these 3 pages:

1. Home Page that includes:
* Moving Background Video on Jumbotron
* Navigation Bar that includes Sign Up Modal accomplished via EmailJS and Search Bar 
* Footer with About Us Button

2. Search Results Page that includes: 
* Name of Trail
* Photo of Trail from Powder Project API
* Difficulty
* Trail Length
* 0-5 Star Rating System
* Elevation 
* Weather from Open Weather Map API 

3. About Page that includes: 
* Founders Photos (that change upon hover)

## APIs Used

* Powder Project API = https://www.powderproject.com/data
* Google Maps API = https://developers.google.com/maps/documentation/
* Open Weather Map API = https://openweathermap.org/current
* EmailJS API = https://www.emailjs.com/docs/
