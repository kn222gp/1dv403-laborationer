"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
		var nowDate = new Date(); 		// Gör ett nytt datumobjekt.
		var userDate = new Date(date);	// Spara det inmatade datumet i userDate.
		var oneDay = (24*60*60*1000);	// Gör om millisekunder till en dag.
		var oneYear = 365;				// Antal dagar på ett år.
		
		userDate.setFullYear(nowDate.getFullYear());	// UserDate får årets år.   ////////////////////
		
		var bday = Math.ceil(((userDate.getTime() - nowDate.getTime()) / oneDay));	// Deklarerar variablen "bday" till antal dagar kvar tills man fyller år.
		
		if (date === "")	// Om det inmatade datumet är tomt.	
		{
			throw new Error("Ange ett datum...");
		}
		
		if (bday <= -1)		// Om födelsedagen redan har varit detta året, räkna på nästa år.
		{
			return bday + oneYear;
		}
		
		return bday;	// Retunerar skillnaden mellan födelsedagen och dagens datum.

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};