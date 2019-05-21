var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.820985099999994, lng: 24.0109307},
        zoom: 15,
        disableDefaultUI: true
    });
}
