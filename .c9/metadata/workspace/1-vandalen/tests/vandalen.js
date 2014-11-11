{"filter":false,"title":"vandalen.js","tooltip":"/1-vandalen/tests/vandalen.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":41,"column":0}},"nl":"\n","lines":["test( \"Datatyper\", function() {","  var indata = [{name: \"John Häggerud\", born: \"1976-02-23\"}, {name: \"Johan Leitet\", born: \"1977-12-12\"},  {name: \"Mats Loock\", born: \"1967-06-02\"}];","","  ok( typeof makePerson(indata) == \"object\" , \"Funktionen returnerar ett objekt.\" );","  ","  ok( makePerson(indata).hasOwnProperty('names')  , \"Svarsobjektet innehåller egenskapen 'names'\" );","  ok( makePerson(indata).hasOwnProperty('minAge') , \"Svarsobjektet innehåller egenskapen 'minAge'\" );","  ok( makePerson(indata).hasOwnProperty('maxAge') , \"Svarsobjektet innehåller egenskapen 'maxAge'\" );","  ok( makePerson(indata).hasOwnProperty('averageAge') , \"Svarsobjektet innehåller egenskapen 'averageAge'\" );","","});","","test( \"Namnhantering (names)\", function() {","","  var indata = [{name: \"John Häggerud\", born: \"1976-02-23\"}, {name: \"Johan Leitet\", born: \"1977-12-12\"},  {name: \"Mats Loock\", born: \"1967-06-02\"}];","  var indata2 = [{name: \"Ö\", born: \"1976-02-23\"}, {name: \"Å\", born: \"1977-12-12\"},  {name: \"Ä\", born: \"1967-06-02\"}];","","","  equal( makePerson(indata).names, \"Johan Leitet, John Häggerud, Mats Loock\" , \"Namn returneras sorterat\" );","  equal( makePerson(indata2).names, \"Å, Ä, Ö\" , \"Sortering fungerar även för svenska tecken.\" );"," \t","});","","test( \"Åldershantering (maxAge, minAge, aveargeAge)\", function() {","","  var indata2 = [{name: \"John Häggerud\", born: \"1976-02-23\"}, {name: \"Johan Leitet\", born: \"1977-12-12\"},  {name: \"Mats Loock\", born: \"1967-06-02\"}];","  var indata = [{name: \"John Häggerud\", age: 37}, {name: \"Johan Leitet\", age: 36},  {name: \"Mats Loock\", age: 46}];","  ","  equal( makePerson(indata).maxAge, 46, \"maxAge är 46\" );","  equal( makePerson(indata).minAge, 36, \"minAge är 36\" );","  equal( makePerson(indata).averageAge, 40, \"averageAge är 40\" );\t","  ","});","","test( \"Uppgiften totalt\", function() {","","  var indata = [{name: \"John Häggerud\", age: 37}, {name: \"Johan Leitet\", age: 36},  {name: \"Mats Loock\", age: 46}];","  ","  deepEqual( makePerson(indata), {minAge: 36, maxAge: 46, averageAge: 40, names: \"Johan Leitet, John Häggerud, Mats Loock\"}, \"Uppgiften avklarad på Nivå 1\" );","  deepEqual( makePerson(indata), {minAge: 36, maxAge: 46, averageAge: 40, names: \"Johan Leitet, John Häggerud, Mats Loock\"}, \"Uppgiften avklarad på Nivå 2\" );","});"]},{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":31}},"text":"test( \"Datatyper\", function() {"},{"action":"insertText","range":{"start":{"row":0,"column":31},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":40,"column":0}},"lines":["  var indata = [{name: \"John Häggerud\", born: \"1976-02-23\"}, {name: \"Johan Leitet\", born: \"1977-12-12\"},  {name: \"Mats Loock\", born: \"1967-06-02\"}];","","  ok( typeof makePerson(indata) == \"object\" , \"Funktionen returnerar ett objekt.\" );","  ","  ok( makePerson(indata).hasOwnProperty('names')  , \"Svarsobjektet innehåller egenskapen 'names'\" );","  ok( makePerson(indata).hasOwnProperty('minAge') , \"Svarsobjektet innehåller egenskapen 'minAge'\" );","  ok( makePerson(indata).hasOwnProperty('maxAge') , \"Svarsobjektet innehåller egenskapen 'maxAge'\" );","  ok( makePerson(indata).hasOwnProperty('averageAge') , \"Svarsobjektet innehåller egenskapen 'averageAge'\" );","","});","","test( \"Namnhantering (names)\", function() {","","  var indata = [{name: \"John Häggerud\", born: \"1976-02-23\"}, {name: \"Johan Leitet\", born: \"1977-12-12\"},  {name: \"Mats Loock\", born: \"1967-06-02\"}];","  var indata2 = [{name: \"Ö\", born: \"1976-02-23\"}, {name: \"Å\", born: \"1977-12-12\"},  {name: \"Ä\", born: \"1967-06-02\"}];","","","  equal( makePerson(indata).names, \"Johan Leitet, John Häggerud, Mats Loock\" , \"Namn returneras sorterat\" );","  equal( makePerson(indata2).names, \"Å, Ä, Ö\" , \"Sortering fungerar även för svenska tecken.\" );"," \t","});","","test( \"Åldershantering (maxAge, minAge, aveargeAge)\", function() {","","  var indata2 = [{name: \"John Häggerud\", born: \"1976-02-23\"}, {name: \"Johan Leitet\", born: \"1977-12-12\"},  {name: \"Mats Loock\", born: \"1967-06-02\"}];","  var indata = [{name: \"John Häggerud\", age: 37}, {name: \"Johan Leitet\", age: 36},  {name: \"Mats Loock\", age: 46}];","  ","  equal( makePerson(indata).maxAge, 46, \"maxAge är 46\" );","  equal( makePerson(indata).minAge, 36, \"minAge är 36\" );","  equal( makePerson(indata).averageAge, 40, \"averageAge är 40\" );\t","  ","});","","test( \"Uppgiften totalt\", function() {","","  var indata = [{name: \"John Häggerud\", age: 37}, {name: \"Johan Leitet\", age: 36},  {name: \"Mats Loock\", age: 46}];","  ","  deepEqual( makePerson(indata), {minAge: 36, maxAge: 46, averageAge: 40, names: \"Johan Leitet, John Häggerud, Mats Loock\"}, \"Uppgiften avklarad på Nivå 1\" );","  deepEqual( makePerson(indata), {minAge: 36, maxAge: 46, averageAge: 40, names: \"Johan Leitet, John Häggerud, Mats Loock\"}, \"Uppgiften avklarad på Nivå 2\" );"]},{"action":"insertText","range":{"start":{"row":40,"column":0},"end":{"row":40,"column":3}},"text":"});"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":40,"column":3},"end":{"row":40,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":16,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1415652065163,"hash":"ed2357e8f8e7eafc153211e3cd2e17fc01bd18d2"}