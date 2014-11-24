"use strict";

window.onload = function (){
    
    var messages = [];
    var areaText = document.getElementById("textarea");
    var send = document.getElementById("send");
    var messageObject = {};
    
    send.addEventListener("click", function(e){
        e.preventDefault();
        messageObject = new Message(areaText.value, new Date());
        messages.push(messageObject);       /* ".push" pushes the latest object into the last position in the array. */
     
        
/*    var enter = document.getElementById("textarea");
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
            
            else
            {
                console.log("ny rad asså.");
            }
        } 
    }); */
        
        
        renderMessage(messages);
    });
    
    
    
    var renderMessage = function(){
        
        var messageSection = document.getElementById("messageSection");

        
        for(var i = 0; i < messages.length; i++)
        {
            messageSection.innerHTML = messages[i];
            
            
        }
        
        
    };
    
};