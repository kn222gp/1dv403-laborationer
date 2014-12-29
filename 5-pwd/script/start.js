"use strict";

function StartBar(desk){
    this.element = document.querySelector(".appBar");
    this.desk = desk;
}

StartBar.prototype.newApp = function(name, url){
    
    var image = document.createElement("img");
    image.src = url;
    
    var that = this;
    this.element.appendChild(image);
    
    image.onclick = function(e){
        e.preventDefault();
        
        
        var w = new Window(name, that.desk, image);
        that.nameCheck(name, that.desk, w);
        
    };
    
};

StartBar.prototype.nameCheck = function(name, desk, wind){
    if(name === "Gallery"){
        new Gallery(desk, wind);
        
    }
    
};