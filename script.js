var map;

function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
 });

 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(pos);
    }, function() {
      handleLocationError(true, map.getCenter());
    });
 } else {
    handleLocationError(false, map.getCenter());
 }

 map.addListener('center_changed', function() {
    var center = map.getCenter();
    window.location.hash = "#lat=" + center.lat() + "&lng=" + center.lng();
 });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
 infoWindow.setPosition(pos);
 infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

function watchMapPosition() {
 window.setInterval(function() {
    var center = map.getCenter();
    window.location.hash = "#lat=" + center.lat() + "&lng=" + center.lng();
 }, 5000);
}

function getMapLocation() {
 var loc = window.location.hash.split('#')[1];
 if (!loc) return;

 var latLng = loc.split('&').map(function(part) {
    return part.split('=')[1];
 });

 map.setCenter({ lat: parseFloat(latLng[0]), lng: parseFloat(latLng[1]) });
}

function solicitarEntrega() {
 alert('Entrega solicitada');
}

var x = document.getElementById("demo");

function getLocation() {
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
 } else { 
    x.innerHTML = "Geolocalização não é suportada por este navegador.";
 }
}

function codeLatLng() {
 var input = document.getElementById('latlng-input').value;
 var latlngStr = input.split(',', 2);
 var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};

 geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        document.getElementById('result').innerHTML = results[0].formatted_address;
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
 });
}

document.getElementById('embarque').addEventListener('input', function() {
    var embarque = document.getElementById('embarque').value;
    var desembarque = document.getElementById('desembarque').value;

    if (embarque === "Etec Adolpho Berezin" && desembarque === "Praia Grande") {
        document.getElementById('resultado').innerHTML = "Você está à 23,4 km do ponto de entrega <br> Acréscimo: R$ 64,25";
    } else {
        document.getElementById('resultado').innerHTML = "Você está à 6,1 km do ponto de entrega <br> Acréscimo: R$ 00,00";
    }
});

document.getElementById('desembarque').addEventListener('input', function() {
    var embarque = document.getElementById('embarque').value;
    var desembarque = document.getElementById('desembarque').value;

    if (embarque === "Etec Adolpho Berezin" && desembarque === "Praia Grande") {
        document.getElementById('resultado').innerHTML = "Você está à 23,4 km do ponto de entrega <br> Acréscimo: R$ 64,25";
    } else {
        document.getElementById('resultado').innerHTML = "Você está à 6,1 km do ponto de entrega <br> Acréscimo: R$ 00,00";
    }
});





