window.onload = function(){
    
    // Create variables.
    var fourXtwo = document.getElementById("section4x2");
    var fourXfour = document.getElementById("section4x4");
    var reset = document.getElementById("resetaTag");
    var board = document.getElementById("board");
    var rows = 4;
    var cols = 4;
    var flipped = 0;
    var counter = 0;
    var randomObj = {};
    var imageID = 0;
    var pairs = 0;
    var maxPairs = 8;
    var status = true;
    var firstPicture = null;
    
    
    // Menu choices.
    // Four pairs.
    fourXtwo.addEventListener("click", function(e){
       e.preventDefault();
       board.innerHTML = "";
       maxPairs = 4;
       cols = 2;
       
       randomObj = new RandomGenerator.getPictureArray(rows, cols);
       GameOn();
    });
    
    // Eight pairs.
    fourXfour.addEventListener("click", function(e){
       e.preventDefault();
       board.innerHTML = "";
       
       randomObj = new RandomGenerator.getPictureArray(rows, cols);
       GameOn();
    });
   
    
    
    // Game function.
    var GameOn = function (){
        
        var table = document.createElement('table');
        
        for(var i = 0; i < rows; i ++){
            
            var tRow = document.createElement('tr');
            table.appendChild(tRow);
            
            for(var j = 0; j < cols; j++){
                
                var tCell = document.createElement('td');
                var aTag = document.createElement('a');
                var image = document.createElement('img');
                
                aTag.href = "#";
                
                image.src ="pics/0.png";
                image.className = "pics/" + randomObj[imageID] + ".png";
                aTag.img = image;
                
                imageID += 1;
                aTag.addEventListener("click", Click);
                
                
                aTag.appendChild(image);
                tCell.appendChild(aTag);
                tRow.appendChild(tCell);
                
            }
            
            board.appendChild(table);
        }
        
    };
    
    var Click = function(e){
        e.preventDefault();
        
        if(status === true){
            flipped++;
            this.img.src = this.img.className;
            
            if(flipped === 2){
                counter++;
                flipped = 0;
                status = false;
                firstPicture.addEventListener("click", Click);
                
                var secondPicture = this;
                document.getElementById("tries").innerHTML = "Antal försök: " + counter;
                
                if (firstPicture.img.className === secondPicture.img.className){
                    pairs++;
                    firstPicture.removeEventListener("click", Click);
                    secondPicture.removeEventListener("click", Click);
                    document.getElementById("pairs").innerHTML = "Antal par: " + pairs + " / " + maxPairs;
                    if(pairs === maxPairs){
                        alert("Grattis, du har vunnit! Det tog dig " + counter + " försök.");
                    }
                    status = true;
                }
                
                else{
                    setTimeout(function() {
                    firstPicture.img.src = "pics/0.png";
                    secondPicture.img.src = "pics/0.png";
                    status = true;
                    }, 1000);
                }
            }
            
            else{
                firstPicture = this;
                firstPicture.removeEventListener("click", Click);
            }
            
        }
    };
    
    
    
};