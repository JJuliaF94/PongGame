
var image1 = loadImage("TischtennisGrün.jpg");
var ballx = 100;
var bally = 100;
var ballSize = 20;
var geschwX = 4;
var geschwY = 2;
var balkenx = 50;
var balkenx2 = 50;
var balkeny = 507;
var balkeny2 = 24;

var balken = function(){
    

    if(mouseX >= 360){
        balkenx = 360;
        }
        else if(mouseX <= 50){
        balkenx = 50;
    }else{
        balkenx = mouseX; 
    }
    

noStroke();
fill(235, 245, 242);
rect(balkenx,balkeny, 84, 10);
};

var balken2 = function(){
    
    
    if(mouseX >= 360){
        balkenx2 = 360;
    }
    else if(mouseX <= 50){
        balkenx2 =50;
    }else{
        balkenx2 = mouseX;
    }
    
  
    
    noStroke();
    fill(240, 245, 243);
    rect(balkenx2, balkeny2, 84, 10);

    
};


var draw = function(){
 //Hintergrund Tischtennis  
image(image1, 0, 0, 506, 555);

//text Highscore
fill(252, 252, 252);
        textSize(20);
        text("Highscore:", 75, 74, 102, 110);

//Variablen ausführen
balken();
balken2();

//Design Hintergrund Tischtennislinien
rect(50, -5, 10, 551, 10);
rect(440,-5, 10, 551, 10);
rect(50, 50, 398, 10, 10);
rect(50, 477, 398, 10, 10);
rect(244, 50, 10, 436, 10);
rect(0, -3, 10, 554, 10);
rect(488, -3, 10, 554, 10);
rect(0, 0, 499, 10, 10);
rect(0, 529, 499, 10, 10);

//Ball Bewegung (Ball an Wänden abprallen)
ellipse(ballx, bally, ballSize, ballSize);
ballx = ballx + geschwX;
bally = bally + geschwY;

if(ballx <= 5 + ballSize/2){
    geschwX = geschwX*- 1;
}
else if(ballx >= 495 - ballSize/2){
    geschwX = geschwX*- 1;
}
else if(bally <= 5 + ballSize/2){
    geschwY = geschwY* - 1;
}
else if(bally >= 535 - ballSize/2){
    geschwY = geschwY*-1;
}
  if(ballx === balkenx){
      
}


if(bally >= balkeny - ballSize/2){
    if(ballx >= balkenx && ballx <=(balkenx + 84)){
        geschwY = geschwY*-1;
    
    }
}

if(bally <= balkeny2 + ballSize/2){
    if(ballx >= balkenx2 && ballx <=(balkenx2 + 84)){
        geschwY = geschwY*-1;
        
    }
}
if(bally >= balkeny - ballSize/2){
    if(ballx >= balkenx && ballx <=(balkenx + 84)){
        
    }
}
};










