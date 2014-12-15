"use strict";

var quiz = {
    
    // Declare variables.
    msg : document.getElementById("msg"),
    qSec: document.getElementById("question"),
    error: document.getElementById("error"),
    
    answer: document.getElementById("text"),
    submit: document.getElementById("submit"),
    
    tries: 0,
    tryArray: [],
    xhr: new XMLHttpRequest(),
    q: null,
           
    init: function(){      
        console.log("window loaded."),
        
        quiz.quizGame("http://vhost3.lnu.se:20080/question/1");
    },
    
    // The function that contacts the server.
    quizGame: function(url){
        
        quiz.xhr.onreadystatechange = function(){
            
            if(quiz.xhr.readyState === 4 && quiz.xhr.status === 200){
                 quiz.q = JSON.parse(quiz.xhr.responseText);
                 quiz.qSec.innerHTML = quiz.q.question;
            
                // When I click the button.
                quiz.submit.onclick = function(e){
                console.log("clicked."),
                e.preventDefault();
                
                if(quiz.answer.value !== ""){
                    quiz.asking(quiz.q.nextURL, quiz.answer.value);
                }
                
                else{
                    quiz.error.innerHTML = "Vänligen skriv ett svar...";
                    setTimeout(function() {
                        quiz.error.innerHTML = "";
                    }, 1300);
                }
                
                }; 

            }
        };
        
        quiz.xhr.open("GET", url, true);
        quiz.xhr.send(null);
    },

    
    asking: function(url, ans){
    quiz.answer.value = "";
    quiz.msg.innerHTML = "";
    quiz.error.innerHTML = "";
    
    var xhr2 = new XMLHttpRequest();
    quiz.tries++;
        xhr2.onreadystatechange = function(){
            
            if(xhr2.readyState === 4){
                
                var message = JSON.parse(xhr2.responseText);
                
                if(xhr2.status === 200){
                    quiz.tryArray.push(quiz.tries);
                    console.log(quiz.tryArray.length);
                    quiz.tries = 0;
                        
                    if(message.nextURL !== undefined){
                        
                        quiz.error.innerHTML = "";
                        quiz.qSec.innerHTML = "";
                        quiz.qSec.innerHTML = "Rätt!";
                        
                        setTimeout(function() {
                            quiz.msg.innerHTML = "";
                            quiz.quizGame(message.nextURL);
                        }, 1300);
                    }
                    
                    // If you win the game.
                    else{
                        
                        quiz.qSec.innerHTML = "Grattis! Du tog dig igenom quizzet!";
                        quiz.error.innerHTML = "";
                        quiz.msg.innerHTML = "Antal gissningar per fråga: ";
                        
                        for (var i = 0; i < quiz.tryArray.length; i++) {
                            var msg = document.createElement("div"); 
                            quiz.msg.appendChild(msg);
                            msg.innerHTML = "Fråga "+ (i+1) +": " + quiz.tryArray[i];
                        }
                    }
                }
                
                else {
                    
                    quiz.msg.innerHTML = "";
                    quiz.error.innerHTML = "Fel svar, tyvärr!";
                    
                    setTimeout(function() {
                        quiz.error.innerHTML = "";
                    }, 1300);
     
                }
            }
        };
    
    
    var json = { answer: ans };
    var jsonString = JSON.stringify(json);
        
        xhr2.open("POST", url, true);
        xhr2.setRequestHeader("Content-Type", "application/json");
        xhr2.send(jsonString);
        
    },
    
}; 
window.onload = quiz.init;
