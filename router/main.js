var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
let client = require('cheerio-httpcli');




router.get('/', function(req,res){
        
    res.render('index', { result : "" , resultText : "", titleText: "", DateText:""});    
                                                    
  });

  router.post('/' , function(req, res){
    
    var result;
    var resultText; 
    let URLName = req.body.url;  
    let ImageName = req.body.imageName;
    console.log(ImageName);
       
    request(URLName, (error, response, body) => {  
        var $ = cheerio.load(body, { decodeEntities: false });
        
      


        let title = $('h1');

        let titlelt = $(title[0]).text();
     
        let List = $('.css-11cwn6f');
      
        let aListlt = $(List[0]).attr('src');
        
        let listTextOri= $('.css-4w7y5l p');
        let listText = $(listTextOri[0]).text() + $(listTextOri[1]).text() + $(listTextOri[2]).text() +$(listTextOri[3]).text() +$(listTextOri[4]).text() +$(listTextOri[5]).text() +$(listTextOri[6]).text() + $(listTextOri[7]).text() +$(listTextOri[8]).text() +$(listTextOri[9]).text()
        +$(listTextOri[10]).text() +$(listTextOri[11]).text()+$(listTextOri[12]).text() +$(listTextOri[13]).text() +$(listTextOri[14]).text()+$(listTextOri[15]).text()+$(listTextOri[16]).text()+$(listTextOri[17]).text();

        let DateWriting= $('.css-1wnyjki');
        let Datelt = $(DateWriting[0]).text();
        

        if(aListlt === undefined){
            result = 0;
            resultText = 0;
            titleText = 0; 
            DateText = 0;
        }
        else{
            result = aListlt;
            resultText = listText;
            titleText = titlelt;
            DateText = Datelt;
        }
  
  //console.log(body);
      // console.log(aListlt);
      // console.log(listText);
   
    res.render('index', { result : result , resultText : resultText, titleText: titleText, DateText: DateText} );
   });

 
}); 



     



    module.exports = router;