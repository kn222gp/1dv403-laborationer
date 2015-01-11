"use strict";

function StartBar(desk){
    this.element = document.querySelector(".appBar");
    this.desk = desk;
}

StartBar.prototype.newApp = function(name, url){
    
    var image = document.createElement("img");
    image.src = url;
    
    this.element.appendChild(image);
    
    image.onclick = function(e){
        e.preventDefault();
        
        var w = new Window(name, this.desk, url);
        this.nameCheck(name, this.desk, w);
        
    }.bind(this);
    
};

StartBar.prototype.nameCheck = function(name, desk, wind){
    
    if(name === "Gallery"){
        new Gallery(desk, wind);
        
    }
    
    if(name === "Memory"){
        new Memory(desk, wind);
    }
    
};