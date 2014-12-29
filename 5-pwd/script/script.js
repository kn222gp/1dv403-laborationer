"use strict";

window.onload = function(){
    
    var desk = new Desktop();
    var startBar = new StartBar(desk);
    
    startBar.newApp("Gallery", "pics/galleri.png");
};


