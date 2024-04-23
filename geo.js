'use strict'

navigator.geolocation.watchPosition(locationData);

function locationData(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    var altitude = position.coords.altitude;
    var altitudeAccuracy = position.coords.altitudeAccuracy;
    var heading = position.coords.height;
    var speed = position.coords.speed;
    var timestamp = position.timestamp;
    
    document.querySelector('#lat').innerHTML = latitude;
    document.querySelector('#lon').innerHTML = longitude;
    document.querySelector('#acc').innerHTML = accuracy;
    document.querySelector('#alt').innerHTML = altitude;
    document.querySelector('#altacc').innerHTML = altitudeAccuracy;
    document.querySelector('#heading').innerHTML = heading;
    document.querySelector('#speed').innerHTML = speed;
    document.querySelector('#timestamp').innerHTML = timestamp;
}