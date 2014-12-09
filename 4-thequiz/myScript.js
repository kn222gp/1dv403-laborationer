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
            quiz.submit.addEventListener("click", function(e){
               console.log("clicked."),
               e.preventDefault();
               quiz.asking(quiz.q.nextURL, quiz.answer.value);
            });     
            
             }
        };
        
        quiz.xhr.open("GET", url, true);
        quiz.xhr.send(null);
    },

    asking: function(url, ans){
    var xhr2 = new XMLHttpRequest();
    
    
        xhr2.onreadystatechange = function(){
            
            if(xhr2.readyState === 4){
                
                var message = JSON.parse(xhr2.responseText);
                
                if(message.message === "Correct answer!"){
                    
                    if(message.nextURL !== undefined){
                        quiz.tryArray.push(quiz.tries);
                        quiz.quizGame(message.nextURL);
                        quiz.error.innerHTML = "";
                        quiz.msg.innerHTML = "Rätt!";
                        
                        setTimeout(function() {
                            quiz.msg.innerHTML = "";
                        }, 1500);
                    }
                    
                    else{
                        quiz.submit.removeEventListener();
                        quiz.qSec.innerHTML = "Grattis! Du tog dig igenom quizzet!";
                        quiz.error.innerHTML = "";
                        quiz.msg.innerHTML = "";
                        
                    }
                    
                }
                
                else {
                    quiz.tries++;
                    quiz.msg.innerHTML = "";
                    quiz.error.innerHTML = "Fel svar, tyvärr!";
                    
                    setTimeout(function() {
                        quiz.error.innerHTML = "";
                    }, 1500);
                     
                  
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
