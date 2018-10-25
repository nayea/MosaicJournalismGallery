var img;
var myFont;
var value = 0;

function preload() {
 
   var imageUrl = select("#poster").elt.innerHTML;

    myFont = loadFont('static/assets/Lansdowne DEMO.otf');
    myImage = loadImage(imageUrl);
}

function setup(){
    background(0);
    noStroke();
    colorMode(RGB, 255, 255, 255, 1);
    var cnv = createCanvas(600,400); 
    var imageText = select("#synopsis").elt.innerHTML;
    var titleText = select("#title").elt.innerHTML;

    
    var partition = 5; 
    var partition2 = 10; 
    var widthsize = parseInt(width/partition);
    var heightsize = parseInt(height/partition);
    var widthsize2 = parseInt(width/partition2);
    var heightsize2 = parseInt(height/partition2);
   

    var newText = new Array(widthsize);
    for (var a = 0; a< widthsize; a++){
        newText[a] = new Array(heightsize);
    }

    var newText2 = new Array(widthsize2);
    for (var b = 0; b< widthsize2; b++){
        newText2[b] = new Array(heightsize2);
    }

    var textArray = new Array();
    var textArrayMake = new Array();

    var textArrayFirst = new Array();


    
  var fontCount = 0;

    for(var j= 0; j< heightsize2; j++){
        for(var i = 0; i< widthsize2; i++){
            
       
             newText2[i][j] = imageText.substring(fontCount,fontCount+1);
   
       

        // if(newText[i][j] === ''){
        //     newText[i][j] = char(int(random(65,91))).toLowerCase();
          
        // }
        fontCount++;
       }
   }

   for(var k= 0; k< heightsize; k++){
    for(var t = 0; t< widthsize; t++){
        
   
         newText[t][k] = imageText.substring(fontCount,fontCount+1);

    fontCount++;
   }
}

var titleNum = 0;



var textArrayMake = titleText.split(" ");
var newTitle = textArrayMake.join("");

    for(var c = 0; c<textArrayMake.length; c++){
        textArrayFirst[c] = textArrayMake[c].substring(titleNum,titleNum+1);
    //titleNum++;
   }





   var yOriginCount = 0;
   var xOriginCount = 0;
 
    for (var x=0; x<width; x+=partition) {
        for (var y=0; y<height; y+=partition) {
           
         
               xOriginCount = parseInt(x/partition);
               yOriginCount = parseInt(y/partition);
              
              
               backgroundBasedOnSampleColor(myImage.get(x, y),x,y,newText,xOriginCount,yOriginCount)
            
              
           } 
           
       }

       var yOriginCount2 = 0;
       var xOriginCount2 = 0;
       var textArrayCount = 0;
       var clickCount = 0;
       
        for (var x=0; x<width; x+=partition2) {
            for (var y=0; y<height; y+=partition2) {
               
             
                   xOriginCount2 = parseInt(x/partition2);
                   yOriginCount2 = parseInt(y/partition2);
             
                 
                  textBasedOnSampleColor(myImage.get(x, y),x,y,newText2,xOriginCount2,yOriginCount2)
               
                
               } 
               
           } 

    

     
      
}

function draw(){
   

}
function mouseClicked() {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }
  }

function textBasedOnSampleColor(c,x,y,newText,xOriginCount,yOriginCount) {
    
        let colorC = color(c[0], c[1], c[2], map(brightness(c), 125, 0, .3, 1));
        
       
       // fill(colorC);
        fill(c);
        textFont(myFont, map(brightness(colorC),  125, 0, 7, 25)); 
        text(newText[xOriginCount][yOriginCount], x, y);
       
}



function backgroundBasedOnSampleColor(c,x,y,newText2,xOriginCount,yOriginCount) {
    

    let colorC = color(c[0], c[1], c[2], map(brightness(c), 125, 0, .5, 1));
    
    if(map(brightness(c), 125, 0, 5, 20) < 13){
        fill(c);
        // rect(xOriginCount,yOriginCount,x,y);
        rect(x,y,map(brightness(c), 125, 0, 2, 10),map(brightness(c), 125, 0, 2, 10));
       
        
     }

    
}


    
