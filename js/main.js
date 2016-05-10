


//Google Maps API place id function
	//https://developers.google.com/places/javascript/
	//https://developers.google.com/maps/documentation/javascript/places
	//https://developers.google.com/places/place-id

//Google Maps API place id function
    //https://developers.google.com/places/javascript/
    //https://developers.google.com/maps/documentation/javascript/places
    //https://developers.google.com/places/place-id
//use jQuery to have an arrow that will slide the page up


//typewriter effect, thanks to http://jsfiddle.net/blahblahAMYblah/aDzUM/
(function($) {
    $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this),
                str = $ele.text(),
                progress = 0;
            $ele.text('');
            var timer = setInterval(function() {
                $ele.text(str.substring(0, progress++) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) clearInterval(timer);
            }, 100);
        });
        return this;
    };
})(jQuery);
$("#typewriter2").typewriter();

//this is the photo album
$( document ).ready(function(){
    
    $('.album').vegas({
        slides: [
            { src:'img/coatandtophat.jpg'},
             { src:'img/running.JPG'},
            { src:'img/inafieldwithgrandma.jpg'},
            { src:'img/mywedding.jpg'},
          
        ]
    });

       $('.album2').vegas({
        slides: [
            { src:'img/armybuddy.jpg'},
             { src:'img/atbat.jpg'},
            { src:'img/hiking.jpg'},
            { src:'img/shirtless.jpg'},
            { src:'img/groupshot.jpg'},
            { src:'img/oldiegng.jpg'},
           
            { src:'img/onawall.jpg'},
          
        ]
    });
});



