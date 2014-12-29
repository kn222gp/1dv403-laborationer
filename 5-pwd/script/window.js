"use strict";

function Window(name, desk, image){
    
    var template = document.querySelector(".template");
    var windowTemplate = template.content.querySelector(".window");
    var w = windowTemplate.cloneNode(true);
    
    this.desk = desk;
    this.w = w;
    
    
    var windowTop = w.querySelector(".windowTop");
    
    var titlePic = document.createElement("img");
    titlePic = image.cloneNode(true);
    titlePic.className = "titlePic";
    windowTop.appendChild(titlePic);
    
    var windowTitle = w.querySelector(".title");
    windowTitle.innerHTML = name;
    
    var closeBtn = w.querySelector(".close");
    var that = this;
    closeBtn.onclick = function(e){
        e.preventDefault();
        that.close();
    };
    
    desk.element.appendChild(w);
    
    
    this.loadImg = document.createElement("img");
    this.windowBot = document.querySelector(".windowBot");
    this.loadImg.src = "pics/ajax-loader.gif";
    this.loadImg.className = "loader";
    
    this.windowBot.appendChild(this.loadImg);
    
    
    this.startPosition(desk.position.x, desk.position.y);
    desk.position.x += 15;
    desk.position.y += 15;
    
    // Just checklist for personal use.
    console.log(window.innerHeight);
    console.log(this.w.offsetHeight);
    console.log("X led "+desk.position.x);
    console.log("Y led "+desk.position.y);
    console.log("---------------");

  
   // If window would go offscreen on y-axis, this sets the next window back to top.
    if((desk.position.y + (this.w.offsetHeight + 100)) > window.innerHeight){
            console.log("funkar Y?");
            desk.position.y = 5;
        }
        
        // Same here but for x-axis and put next window back to the left.   
        if(desk.position.x + (this.w.offsetWidth) > window.innerWidth){
                console.log("funkar X?");
                desk.position.x = 5;
            }
}

Window.prototype.close = function(){
    this.desk.element.removeChild(this.w);
};

Window.prototype.startPosition = function(x, y){
    this.w.style.left = x + "px";
    this.w.style.top = y + "px";
};
