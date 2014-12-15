"use strict";

function Window(name, desk, image){
    var template = document.querySelector(".template");
    var windowTemplate = template.content.querySelector(".window");
    var w = windowTemplate.cloneNode(true);

    
    this.desk = desk;
    this.w = w;
    var me = this;
    var windowTitle = w.querySelector(".title");
    var closeBtn = w.querySelector(".close");
    
    
    
    closeBtn.onclick = function(e){
        e.preventDefault();
        me.close();
    };
    windowTitle.innerHTML = name;
    desk.element.appendChild(w);
   
}

Window.prototype.close = function(){
    this.desk.element.removeChild(this.w);
};

Window.prototype.startPosition = function(x, y){
    this.w.style.left = x + "px";
    this.w.style.top = y + "px";
};

