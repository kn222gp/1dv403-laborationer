"use strict";

function StartBar(desk){
    this.element = document.querySelector(".appBar");
    this.desk = desk;
}

StartBar.prototype.newApp = function(name, url){
    var image = document.createElement("img");
    image.src = url;
    
    var startPosX = 0;
    var startPosY = 0;
    

    
    
    var that = this;
    this.element.appendChild(image);
    
    image.onclick = function(e){
        e.preventDefault();
        startPosX += 10; 
        startPosY += 10;
        var w = new Window(name, that.desk, image, startPosX, startPosY);
        
    };
    
};