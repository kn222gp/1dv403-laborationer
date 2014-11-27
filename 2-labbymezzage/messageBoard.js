"use strict";

window.onload = function (){
    
    var messages = [];
    var areaText = document.getElementById("textarea");
    var amountOfMessages = document.getElementById("amountOf");
    var send = document.getElementById("send");
    var messageBox = document.getElementById("messageBox");
    var messageObject = {};
    var count = 0;
    
    
    
    send.addEventListener("click", function(e){
        
        if(areaText.value !== ""){
        e.preventDefault();
        messageObject = new Message(areaText.value, new Date());
        messages.push(messageObject);       /* ".push" pushes the latest object into the last position in the array. */
        
        renderMessage(messages.length-1);
        }
    });
    
    
    // Makes it possible to press "Enter" to send the message.
    var enter = document.getElementById("textarea");
    enter.addEventListener("keydown", function(e) {
        
        if(e.keyCode === 13 && !e.shiftKey)
        {
            e.preventDefault();
            if(areaText.value !== "")
            {
                messageObject = new Message(areaText.value, new Date());
                messages.push(messageObject);
                
                renderMessage(messages.length-1);
            }
        } 
    }); 
    
    
    
    var renderMessage = function(ID){
        
        count = ID+1;
        
        
        var textBox = document.createElement("div");
        textBox.className = "textBox";
        
        
        
        var displayText = document.createElement("p");
        displayText.className = "displayText";
        
        
        
        var displayTime = document.createElement("p");
        displayTime.className = "displayTime";
        
        
        var showClockImg = document.createElement("img");
        showClockImg.className = "showClockImg";
        showClockImg.src = "pics/clock.png";
        
        var showCrossImg = document.createElement("img");
        showCrossImg.className = "showCrossImg";
        showCrossImg.src = "pics/cross.png";
        
        
        displayText.innerHTML = messages[ID].getHTMLText();
        displayTime.innerHTML = messages[ID].getDateText();
        amountOfMessages.innerHTML = "Antal meddelande: " + count;
        
        
        textBox.appendChild(displayText);
        textBox.appendChild(displayTime);
        textBox.appendChild(showClockImg);
        textBox.appendChild(showCrossImg);
        messageBox.appendChild(textBox);
        areaText.value = "";
        
        
        // Removes one message.
        showCrossImg.onclick = function(){
            
            var question = confirm("Vill du ta bort meddelandet?");
            
            if(question === true){
               
                messages.splice([ID], 1);
                remove(ID);
                
            }
        };
             var remove = function(ID){
            messageBox.innerHTML = "";
            --count;
            for (var i = 0; i < messages.length; i++){
                    renderMessage(i);
            }
            
            if (messages.length === 0)
            {
                amountOfMessages.innerHTML = "Antal meddelande: 0";
            }
            
            };
        
        // Shows the time the message was created.    
        showClockImg.onclick = function(){
            alert("Meddelandet skapades: " + messages[ID].getDate());
        };
    };
    
    
   
    
};