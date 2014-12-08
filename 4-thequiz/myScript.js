"use strict";

window.onload = function(){
    console.log("window loaded.");
    // Declare variables.
    var ask = document.getElementById("firstSec");
    var qSec = document.getElementById("question");
    var mess = document.getElementById("sndSection");
    var answer = document.getElementById("text");
    var submit = document.getElementById("submit");
    var tries = 0;
    var xhr = new XMLHttpRequest();
    var adress = "http://vhost3.lnu.se:20080/question/1";
           
    
        // The function that contacts the server.
        xhr.onreadystatechange = function(){
             if(xhr.readyState === 4 && xhr.status === 200){
                 var q = JSON.parse(xhr.responseText);
                 var show = q.question;
                 qSec.innerHTML = show;
             }
        };
        
        xhr.open("GET", adress, true);
        xhr.send(null);
   
    
    // When I click the button.
    submit.addEventListener("click", function(e){
       e.preventDefault();
       asking(adress, answer.value);
    });

    var asking = function(adress, asr){
    
    var json = { answer: asr };
    var jsonSring = JSON.stringify(json);
        
        xhr.open("POST", adress, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(jsonSring);
        
    };
    
};
