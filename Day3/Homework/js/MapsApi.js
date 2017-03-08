$().ready(function() {
	
	$.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyCgTc6GzT6bNhTyoCNgyzFe18xNqCAjptY&callback=initMap", function(resp) {
	});

	function initMap() {
        var uluru = {lat: 34.852083, lng: -82.399913};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
     };

});