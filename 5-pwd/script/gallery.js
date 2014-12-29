"use strict";

function Gallery(desk, wind){
    
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
        
        if(xhr.readyState === 4 && xhr.status === 200){
            
            // When the state and status are OK, the loading gif is removed.
            wind.windowBot.removeChild(wind.loadImg);
            
            // Parse the xhr response with JSON and save it in a variable.
            var response = JSON.parse(xhr.responseText);
            
            
            var content = document.querySelector(".content");
            for(var i = 0; i < response.length; i++){
                
                var aTag = document.createElement('a');
                var imageBox = document.createElement('div');
                imageBox.className = "imageBox";
                
                var image = document.createElement('img');
                image.src = response[i].thumbURL;
                image.className = "galleryImage";
                
                aTag.href = "#";
                
                
                imageBox.appendChild(image);
                aTag.appendChild(imageBox);
                content.appendChild(aTag);
                
            }
            
        }
        
    };
    
    xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
    xhr.send(null);
    
     
}

