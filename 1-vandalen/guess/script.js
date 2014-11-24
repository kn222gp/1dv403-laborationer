"use strict";

window.onload = function(){
	
	var max = 100;
	var min = 1;
	var counter = 0;
	var secret = Math.floor( Math.random() * (max-min)+min); // Slumpar ett tal mellan 1 och 100.
	
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
			
			
		// Plats för förändring.
	
		if(isNaN(number) === false){ 
			counter ++;
			if (number < 1 || number > 100){
				
				return [false, number + " är inte innanför intervallet 1-100."];
			}
			
			if (number == secret){
				
				return [true, "Grattis, du gissade rätt!\n Det hemliga talet var " + secret + " och det tog dig " + counter + " gissningar."];
				
			}
			
			if(number < secret){
				
				return [false, "Tyvärr, det hemliga talet är högre än " + number + "! Gissa igen..."];
				
			}
		
			if(number > secret){
				
				return [false, "Tyvärr, det hemliga talet är lägre än " + number + "! Gissa igen..."];
				
			}
		
		}
		else{
			return [false, number + " är inte en siffra. Försök igen."];
		}
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};