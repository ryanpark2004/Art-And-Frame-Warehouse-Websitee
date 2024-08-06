function initMap() {
  var location = { lat: 33.014567, lng: -97.072936 };
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
  });
  var marker = new google.maps.Marker({
      position: location,
      map: map
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Other initialization code if needed
  initMap();
});
