"use strict";

var makePerson = function(persArr){

/*------------------------------Variabler------------------------------------*/
	
	var names = "";
	var minAge;
	var maxAge;
	var averageAge;
	var nameArray = [];
	var ageArray = [];
	var result = {};


/*----------------------------------Namn-------------------------------------*/

	for (var i = 0; i < persArr.length; i+=1){
	    nameArray[i] = persArr[i].name;
	}
	
	nameArray.sort(function (a,b) { return a.localeCompare(b, 'sv'); });
	names = nameArray.toString();
	names = names.split(",").join(", ");



/*----------------------------------Ålder------------------------------------*/
	
	for (var i = 0; i < persArr.length; i+=1){
	    ageArray[i] = persArr[i].age;
	}
	
	minAge = Math.min.apply(Math, ageArray);
	maxAge = Math.max.apply(Math, ageArray);
	averageAge = ageArray.reduce(function(a, b) { return a + b });
	averageAge = averageAge / ageArray.length;


/*----------------------------Slut på makePerson ----------------------------*/	

	result = {minAge: minAge, maxAge: maxAge, averageAge: Math.round(averageAge), names: names};
	return result;
	
	
};


/*------------------ Resterande kod utanför makePerson-----------------------*/	


	var data = [{name: "John Häggerud", age: 37}, 
	            {name: "Johan Leitet", age: 36}, 
	            {name: "Mats Loock", age: 46}];
	var result = makePerson(data);

    console.log(result);