function initMap() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var restLocation = {
      lat: 40.8054491,
      lng: -73.9654415
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: restLocation
    });

    var marker = new google.maps.Marker({
      position: restLocation,
      map: map,
      title: 'Monk\'s Cafe'
    });

  });
}
