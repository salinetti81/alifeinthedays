//Google Maps API place id function
	//https://developers.google.com/places/javascript/
	//https://developers.google.com/maps/documentation/javascript/places
	//https://developers.google.com/places/place-id
//use jQuery to have an arrow that will slide the page up

function initialize() {
    //Home
    var position = new google.maps.LatLng(40.72963,  -73.98003);
    var myOptions = {
      zoom: 13,
      center: position,
      mapTypeId: google.maps.MapTypeId.STREETVIEW
    };
    
    var map = new google.maps.Map(
        document.getElementById("map_canvas"),
        myOptions);

    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title:"Home"
    });  

    var contentString = '<strong>513 East 13th St., Apt. 12</strong> <br>Papa and Mama settled into this five-story tenement building upon their arrival. Our apartment (#12) was on the second floor and really quite adequate. The five rooms were divided into kitchen, dining room, living room, and two bedrooms. A small potbelly stove stood in the far corner of the kitchen and was the sole heat source for the entire facility. Refrigeration consisted of an ice box etc <img src="img/placeholder.jpg" height="300" width="350"> ';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

//Ellis Island
var position2 = new google.maps.LatLng(40.69947, -74.03956);
    var marker = new google.maps.Marker({
        position: position2,
        map: map,
        title:"Ellis Island"
    });  

    var contentString2 =  '<strong>Ellis Island</strong> <br>some stuff about ellis island <img src="img/greatgrandparents.jpg" height="350" width="400"> ';
    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow2.open(map,marker);
    });

    //Bijou
    var position3 = new google.maps.LatLng(40.72807, -73.97901);
    var marker = new google.maps.Marker({
        position: position3,
        map: map,
        title:"Bijou Movie House"
    });  

    var contentString3 =  '<strong>Bijou Movie House</strong> SEE PAGE 12 PHOTO <a href="http://afterthefinalcurtain.net/2012/02/28/the-charles-theatre/"> FROM HERE</a> <img src="img/charles_theatre.jpg" height="350" width="400"> ';
    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow3.open(map,marker);
    });

    //Army
    var position4 = new google.maps.LatLng(40.72700, -73.97700);//need to change coordinates//
    var marker = new google.maps.Marker({
        position: position4,
        map: map,
        title:"In the Army"
    });  

    var contentString4 =  '<strong>THE ARMY</strong> Grandpa and his brothers-in-law, Vincent, Charlie, and Phil, circa WWII. NEED TO CHANGE COORDINATES   <img src="ing/inthearmy.jpg" height="350" width="400"> ';
    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow4.open(map,marker);
    });
  }