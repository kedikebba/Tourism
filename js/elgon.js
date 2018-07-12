//business logic








//UI logic
function initMap(){
  var Elgon ={ lat: 1.3382 ,lng 34.3799}

  var map = new google.maps.Map(
      document.getElementById('elgonmap'),{zoom: 4, center:Elgon})

  var marker = new google.maps.Marker({position:Elgon, map:map})
}
