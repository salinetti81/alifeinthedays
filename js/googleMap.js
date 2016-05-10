
      function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(40.7251811,-73.9800561),
          mapTypeId: google.maps.MapTypeId.STREETVIEW
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
     // google.maps.event.addDomListener(window, 'load', initialize);

//google map with markers and infowindows
    //need open window to close when a new window is opened
    //need to style the infowindows with CSS (.info)

//this should make it so one window closes when another is open
function initialize() {
    var infoWindow = new google.maps.InfoWindow();
        function getInfoWindowEvent(marker) {
        infowindow.close()
        infowindow.setContent("This is where my HTML content goes.");
        infowindow.open(map, this);
}

    //Home and initial map
    var position = new google.maps.LatLng(40.72963,  -73.98003);
    var myOptions = {
        zoom: 13,
        center: position,
        mapTypeId: google.maps.MapTypeId.STREETVIEW,

        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        
    }
    
    var map = new google.maps.Map(
        document.getElementById("map_canvas"),
        myOptions);

    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title:"Home"
    });  

    var contentString = '<strong>513 East 13th St., Apt. 12</strong> <br>Papa and Mama settled into this five-story tenement building upon their arrival. Our apartment (#12) was on the second floor and really quite adequate. The five rooms were divided into kitchen, dining room, living room, and two bedrooms. A small potbelly stove stood in the far corner of the kitchen and was the sole heat source for the entire facility. Refrigeration consisted of an ice box etc <img src="img/youngwithfriend.jpg" height="275" width="300"> ';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contentString)
        infowindow.open(map,this);
    });

//Ellis Island
var position2 = new google.maps.LatLng(40.69947, -74.03956);
    var marker = new google.maps.Marker({
        position: position2,
        map: map,
        title:"Ellis Island"
    });  

    var contentString2 =  '<div class="info" <strong>Ellis Island</strong> <br>Two of the most courageous people I have encountered in my existence are my parents; Firmo Pellegrini of Siena, Italy, and his wife Giovanna Casaretti Pellegrini of Naples, Italy. <img class="info2" src="img/greatgrandparents.jpg" height="350" width="350"> </div>';

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contentString2)
        infowindow.open(map,this);
    });

    //Bijou
    var position3 = new google.maps.LatLng(40.72807, -73.97901);
    var marker = new google.maps.Marker({
        position: position3,
        map: map,
        title:"Bijou Movie House"
    });  

    var contentString3 =  '<strong>Bijou Movie House</strong> SEE PAGE 12 PHOTO <a href="http://afterthefinalcurtain.net/2012/02/28/the-charles-theatre/"> FROM HERE</a> <img src="img/charles_theatre.jpg" height="350" width="400"> ';
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(contentString3)
      infowindow.open(map,this);
    });

    //Army
    var position4 = new google.maps.LatLng(40.72700, -73.97700);//need to change coordinates//
    var marker = new google.maps.Marker({
        position: position4,
        map: map,
        title:"In the Army"
    });  

    var contentString4 =  '<strong>THE ARMY</strong> Grandpa and his brothers-in-law, Vincent, Charlie, and Phil, circa WWII. NEED TO CHANGE COORDINATES   <img src="img/inthearmy.jpg" height="350" width="400"> ';
    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(contentString4)
      infowindow.open(map,this);
    });
  }

    