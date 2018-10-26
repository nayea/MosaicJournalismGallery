
var myImage;
var sampledImage;
var sampledText;
var myFont;
var mouseCount = 0;
var value = 0;
var partitionX = 5; 
var partitionY = 10; 

function preload() {
 
   var imageUrl = select("#poster").elt.innerHTML;
    myFont = loadFont('static/assets/Lansdowne DEMO.otf');
    myImage = loadImage(imageUrl);
}

function setup(){
    
    colorMode(RGB, 255, 255, 255, 1);
    createCanvas(myImage.width, myImage.height);
    background(153);
    var imageText = select("#synopsis").elt.innerHTML;
    var titleText = select("#title").elt.innerHTML;

   
     // make sampled image, refer it as original pixel colors
     var temp = get(0,0,myImage.width/partitionX,myImage.height/partitionY);
     image(myImage,0,0,myImage.width/partitionX,myImage.height/partitionY);
     sampledImage = get(0,0,myImage.width/partitionX,myImage.height/partitionY);
     image(temp,0,0,myImage.width/partitionX,myImage.height/partitionY);
     sampledText = imageText;
     // Overlap Original Image 
     tint(255, 80); 
     image(myImage, 0, 0);
     noTint();


   testAsRect();


            
}

function draw(){
   
    if(value%2 === 0 && value !== 0){
        tint(255, 100); 
        image(myImage, 0, 0);
        noTint();
        testAsRectReturn();
    
       console.log(value);
    }
    else if(value === 0){
        
    }
    else{
        background(255);
        console.log("W");
    }
    
    StringTileMosaics();
}


function mousePressed(){
  value++;
  loop();
}

function mouseReleased(){
    noLoop();
  }

// String Tile Mosaic
function StringTileMosaics() {
    var count = 0;
    textFont(myFont);
    textSize(partitionY+partitionX);
    for(var y=0;y<sampledImage.height;y++) {
        for(var x=0;x<sampledImage.width;x++) {
            var c = sampledImage.get(x,y);
            // add shadow or glow on each character
            fill(155-brightness(c),150);
            text(sampledText.charAt(count),x*partitionX+1, y*partitionY+8);
            // write character with original color
            fill(c);
            text(sampledText.charAt(count),x*partitionX, y*partitionY+7);
            count = (count+1)%sampledText.length;
        }
    }
}


// test original image tiling mosaic
function testAsRect() {
    noStroke();
    for(var x=0;x<sampledImage.width;x++) {
        for(var y=0;y<sampledImage.height;y++) {
            var c = sampledImage.get(x,y);
            fill(red(c),green(c),blue(c),random(0.3,1));
            // slightly overlap with error... just for fun... 
            rect(x*partitionX+random(-3,3), y*partitionY+random(-3,3), partitionX+random(-3,5), partitionY+random(-3,5));
        }
    }
}

function testAsRectReturn() {
    noStroke();
    for(var x=0;x<sampledImage.width;x++) {
        for(var y=0;y<sampledImage.height;y++) {
            var c = sampledImage.get(x,y);
            fill(red(c),green(c),blue(c),random(220));
        
            rect(x*partitionX, y*partitionY, partitionX, partitionY);
        }
    }
}


