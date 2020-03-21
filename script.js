$(document).ready(function(data) {

    // var randomSol = Math.floor(Math.random() * 40);

    nicePicApi = "https://images-api.nasa.gov/search?q=mars&media_type=image";

    $.getJSON(nicePicApi, function(object) {
        console.log(object);

        console.log(object.collection.items[10].href);

    });


    var randomSol = 40;

    console.log(randomSol);

    apiNumber = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + randomSol + "&api_key=su0OU2HfNjhV9Fo2ia3bmgjeIUeDD9NMbAdLdIAz";

    $.getJSON(apiNumber, function(data) {
    console.log(data);

var photoArrayLength = data.photos.length - 1;

console.log(photoArrayLength);

var randomPhotoNumber = Math.floor(Math.random() * photoArrayLength);

console.log(randomPhotoNumber);

var photos = data.photos[randomPhotoNumber].img_src;

console.log(photos);



    
 $("#photo-div").prepend($('<img>',{id:'theImg',src: photos}).width("500px").height("500px"));

});
 

function contentLoad(){
    var temp = document.getElementById("temp");
    const apiKey = "OfzgBPXMt4Ao8IW5gKBFIePSEzUtHzhsIQV5M8oS";
    const apodUrl = "https://api.nasa.gov/insight_weather/";
    fetch(`https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`)
 .then(res=>res.json())
    .then(data=>{
        var length = data.sol_keys.length;
        for (var i = 0; i < length; i++){
            var sol = data.sol_keys[i];
            console.log(data[sol].AT.av);
            var print = data[sol].AT.av;
          $("#temp").append(print);
        }
     });
    }
    contentLoad();


    
});




