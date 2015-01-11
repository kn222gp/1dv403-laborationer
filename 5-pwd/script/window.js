"use strict";

function Window(name, desk, imageURL, aWindow){
    
    var template = document.querySelector(".template");
    this.windowTemplate = template.content.querySelector(".window");
    var w = this.windowTemplate.cloneNode(true); // Each time a window is created, the template is cloned. 
    
    this.desk = desk;
    this.w = w;
    var that = this;
    var windowTop = w.querySelector(".windowTop");

    
    var titlePic = document.createElement("img");
    titlePic.src = imageURL;
    titlePic.className = "titlePic";
    windowTop.appendChild(titlePic);
    
    var windowTitle = w.querySelector(".title");
    windowTitle.innerHTML = name;
    
    var closeBtn = w.querySelector(".close");
    closeBtn.onclick = function(e){
        e.preventDefault();
        this.close();
    }.bind(this); // Parametern i ".bind" blir "this." inuti funktionen.
    
    desk.element.appendChild(w);
    
    
    // Loading gif.
    this.loadImg = document.createElement("img");
    this.windowBot = this.w.querySelector(".windowBot");
    this.loadImg.src = "pics/ajax-loader.gif";
    this.loadImg.className = "loader";
    
    // Appends the loading gif so that it becomes visible.
    this.windowBot.appendChild(this.loadImg);
    
    // Window position.
    this.startPosition(desk.position.x, desk.position.y);
    desk.position.x += 15;
    desk.position.y += 15;
    
    // Just checklist for personal use.
    console.log("Window height: " + (window.innerHeight - 50));
    console.log("Window width: " + (window.innerWidth - 10));
    console.log("this.w Y: " + (desk.position.y + this.w.scrollHeight));
    console.log("this.w X: " + (desk.position.x + this.w.offsetWidth));
    console.log("X position " + desk.position.x);
    console.log("Y position " + desk.position.y);
    console.log("---------------");
    
   // If window would go offscreen on y-axis, this sets the next window back to top.
    if((desk.position.y + this.w.scrollHeight) >= (window.innerHeight - 50)){
            console.log("funkar Y?");
            desk.position.y = 5;
        }
        
        // Same here but for x-axis and put next window back to the left.   
        if((desk.position.x + this.w.scrollWidth) >= (window.innerWidth)){
                console.log("funkar X?");
                desk.position.x = 5;
            }
this.moveable();

}

// Makes the windows moveable.
// First had the solution found here: http://stackoverflow.com/questions/9334084/moveable-draggable-div. 
// But that made it kinda buggy, so I borrowed this code from Filip Rydberg.
// The "offset" solution makes it much smoother.

Window.prototype.moveable = function () {
    var w = this.w;
    var offsetX;
    var offsetY;
        
    var divMove = function (e){
      w.style.top = e.clientY-offsetY + 'px';
      w.style.left = e.clientX-offsetX + 'px';
        console.log(w);
    
    };
    
    var mouseUp = function () {
        window.removeEventListener('mousemove', divMove);
    };
    
    var mouseDown = function (e){
        offsetX = e.clientX - parseInt(w.style.left);
        offsetY = e.clientY - parseInt(w.style.top);
        
        window.addEventListener('mousemove', divMove);
        w.style.zIndex = 100;
    };
    console.log(this.w);
    
    var windowTop = this.w.querySelector(".windowTop");
    
    windowTop.addEventListener("mousedown", mouseDown);
    window.addEventListener('mouseup', mouseUp);
};


        

// Closes window.
Window.prototype.close = function(){
    this.desk.element.removeChild(this.w);
    this.desk.position.x -= 15;
    this.desk.position.y -= 15;
};


Window.prototype.startPosition = function(x, y){
    this.w.style.left = x + "px";
    this.w.style.top = y + "px";
    
};
