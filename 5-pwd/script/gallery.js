"use strict";

function Gallery(desk, wind){
    this.desk = desk;

    var xhr = new XMLHttpRequest();
    var that = this;
    xhr.onreadystatechange = function(){
        
        if(xhr.readyState === 4 && xhr.status === 200){
            
            // When the state and status are OK, the loading gif is removed.
            wind.windowBot.removeChild(wind.loadImg);
            
            // Parse the xhr response with JSON and save it in a variable.
            var response = JSON.parse(xhr.responseText);
            
            var content = wind.w.querySelector(".content");
            
            for(var i = 0; i < response.length; i++){
                
                var aTag = document.createElement('a');
                var imageBox = document.createElement('div');
                imageBox.className = "imageBox";
                
                var image = document.createElement('img');
                image.src = response[i].thumbURL;
                image.className = "galleryImage";
                image.realSrc = response[i].URL;
                
                aTag.href = "#";
                
                
                imageBox.appendChild(image);
                aTag.appendChild(imageBox);
                content.appendChild(aTag);
                
                
                image.onclick = function(){
                    that.imageViewer(this.realSrc, wind, this.src);  
                };
            }
        }
    }.bind(this);
    
    xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
    xhr.send(null);
     
}

Gallery.prototype.imageViewer = function(url, wind, thumb){
    
    var imageViewerWindow = new Window("Imageviewer", this.desk, thumb, imageViewerWindow);
    
    var content = imageViewerWindow.w.querySelector(".content");
    
    var img = document.createElement('img');
    img.src = url;
    img.className = "imageViewerImg";
    
    content.parentNode.className = "imageViewerWindow";
    
    
    content.appendChild(img);
    imageViewerWindow.windowBot.removeChild(imageViewerWindow.loadImg);

    
};

