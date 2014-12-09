"use strict";

var quiz = {
    
    // Declare variables.
    ask: document.getElementById("firstSec"),
    qSec: document.getElementById("question"),
    mess: document.getElementById("sndSection"),
    answer: document.getElementById("text"),
    submit: document.getElementById("submit"),
    tries: 0,
    xhr: new XMLHttpRequest(),
    q: null,
    adress: "http://vhost3.lnu.se:20080/question/1",
           
    init: function(){      
        console.log("window loaded."),
        
        // When I click the button.
        quiz.submit.addEventListener("click", function(e){
           console.log("clicked."),
           e.preventDefault();
           quiz.asking(quiz.q.nextURL, quiz.answer.value);
        });
        
        quiz.quizGame();
    },
    
    // The function that contacts the server.
    quizGame: function(){
        
        quiz.xhr.onreadystatechange = function(){
            
             if(quiz.xhr.readyState === 4 && quiz.xhr.status === 200){
                 quiz.q = JSON.parse(quiz.xhr.responseText);
                 var show = quiz.q.question;
                 quiz.qSec.innerHTML = show;
             }
        };
        
        quiz.xhr.open("GET", quiz.adress, true);
        quiz.xhr.send(null);
    },

    asking: function(url, ans){
    
    var xhr2 = new XMLHttpRequest();
    
        xhr2.onreadystatechange = function(){
            if(xhr2.readyState === 4){
                
                var message = JSON.parse(xhr2.responseText);
                console.log(message);
                
                if(message.message === "Correct answer!"){
                    
                    if(message.nextURL !== undefined)
                    {
                        quiz.quizGame(message.nextURL);
                    }
                }
                
                else{
                    quiz.ask.innerHTML = "Fel svar!";    
                }
                
            }
        };
    
    
    var json = { answer: ans };
    var jsonSring = JSON.stringify(json);
        
        quiz.xhr.open("POST", url, true);
        quiz.xhr.setRequestHeader('Content-Type', 'application/json');
        quiz.xhr.send(jsonSring);
        
    }
    
}; 
window.onload = quiz.init;
