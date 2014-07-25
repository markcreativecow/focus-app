function initializeMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-2.049012599999969, 53.54917469999999),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}