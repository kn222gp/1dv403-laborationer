{"changed":true,"filter":false,"title":"myScript.js","tooltip":"/4-thequiz/myScript.js","value":"\"use strict\";\n\nwindow.onload = function(){\n    console.log(\"window loaded.\");\n    // Declare variables.\n    var ask = document.getElementById(\"firstSec\");\n    var qSec = document.getElementById(\"question\");\n    var mess = document.getElementById(\"sndSection\");\n    var answer = document.getElementById(\"text\");\n    var submit = document.getElementById(\"submit\");\n    var tries = 0;\n    var xhr = new XMLHttpRequest();\n    var adress = \"http://vhost3.lnu.se:20080/question/1\";\n           \n    \n        // The function that contacts the server.\n        xhr.onreadystatechange = function(){\n             if(xhr.readyState === 4 && xhr.status === 200){\n                 var q = JSON.parse(xhr.responseText);\n                 var show = q.question;\n                 qSec.innerHTML = show;\n             }\n        };\n        \n        xhr.open(\"GET\", adress, true);\n        xhr.send(null);\n   \n    \n    // When I click the button.\n    submit.addEventListener(\"click\", function(e){\n       e.preventDefault();\n       asking(adress, answer.value);\n    });\n\n    var asking = function(adress, asr){\n    \n    \n    var json = { answer: asr };\n    var jsonSring = JSON.stringify(json);\n        \n        xhr.open(\"POST\", adress, true);\n        xhr.setRequestHeader('Content-Type', 'application/json');\n        xhr.send(jsonSring);\n        \n    };\n    \n};\n","undoManager":{"mark":46,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":31,"column":15},"end":{"row":31,"column":16},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"remove","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":13},"end":{"row":31,"column":14},"action":"remove","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":13},"end":{"row":31,"column":14},"action":"insert","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":20},"end":{"row":31,"column":21},"action":"remove","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":19},"end":{"row":31,"column":20},"action":"remove","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":18},"end":{"row":31,"column":19},"action":"remove","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":17},"end":{"row":31,"column":18},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"remove","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":15},"end":{"row":31,"column":16},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"insert","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":15},"end":{"row":31,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":17},"end":{"row":31,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":18},"end":{"row":31,"column":19},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":19},"end":{"row":31,"column":20},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":20},"end":{"row":31,"column":21},"action":"insert","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":21},"end":{"row":31,"column":22},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"insert","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"remove","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":15},"end":{"row":31,"column":16},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":17},"end":{"row":31,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":18},"end":{"row":31,"column":19},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":19},"end":{"row":31,"column":20},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":19},"end":{"row":31,"column":20},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":18},"end":{"row":31,"column":19},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":17},"end":{"row":31,"column":18},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":15},"end":{"row":31,"column":16},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"remove","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"remove","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"remove","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"remove","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":15},"end":{"row":31,"column":16},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":17},"end":{"row":31,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":18},"end":{"row":31,"column":19},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":19},"end":{"row":31,"column":20},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":4},"end":{"row":36,"column":0},"action":"insert","lines":["",""]},{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":4},"end":{"row":36,"column":5},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":5},"end":{"row":36,"column":6},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":6},"end":{"row":36,"column":7},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":7},"end":{"row":36,"column":8},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":8},"end":{"row":36,"column":9},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":9},"end":{"row":36,"column":10},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":10},"end":{"row":36,"column":11},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":12},"end":{"row":36,"column":13},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":13},"end":{"row":36,"column":14},"action":"insert","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":14},"end":{"row":36,"column":15},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":15},"end":{"row":36,"column":16},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":16},"end":{"row":36,"column":17},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":17},"end":{"row":36,"column":18},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":18},"end":{"row":36,"column":19},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":19},"end":{"row":36,"column":20},"action":"insert","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":20},"end":{"row":36,"column":21},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":21},"end":{"row":36,"column":22},"action":"insert","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":22},"end":{"row":36,"column":23},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":22},"end":{"row":36,"column":23},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":21},"end":{"row":36,"column":22},"action":"remove","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":20},"end":{"row":36,"column":21},"action":"remove","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":19},"end":{"row":36,"column":20},"action":"remove","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":18},"end":{"row":36,"column":19},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":17},"end":{"row":36,"column":18},"action":"remove","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":16},"end":{"row":36,"column":17},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":15},"end":{"row":36,"column":16},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":14},"end":{"row":36,"column":15},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":13},"end":{"row":36,"column":14},"action":"remove","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":12},"end":{"row":36,"column":13},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"remove","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":10},"end":{"row":36,"column":11},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":10},"end":{"row":36,"column":11},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":12},"end":{"row":36,"column":13},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":12},"end":{"row":36,"column":13},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"remove","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":10},"end":{"row":36,"column":11},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":9},"end":{"row":36,"column":10},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":8},"end":{"row":36,"column":9},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":7},"end":{"row":36,"column":8},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":6},"end":{"row":36,"column":7},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":5},"end":{"row":36,"column":6},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":4},"end":{"row":36,"column":5},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":4},"end":{"row":37,"column":0},"action":"insert","lines":["",""]},{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":4},"end":{"row":36,"column":5},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":5},"end":{"row":36,"column":6},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":6},"end":{"row":36,"column":7},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":6},"end":{"row":36,"column":7},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":5},"end":{"row":36,"column":6},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":4},"end":{"row":36,"column":5},"action":"remove","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":4},"end":{"row":36,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":35,"column":4},"end":{"row":35,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1418080002091}