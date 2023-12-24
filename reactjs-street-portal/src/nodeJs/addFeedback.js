// This script will add feedback into the feedbackData.json file 
function AddFeedback(_name, _feedback) {

    var filePath = './src/assets/buildInfo.json';
    var fs = require('fs');
    fs.readFile(filePath,function(err,fileContent) {
        if (err) throw err;
        var _feedbackData = JSON.parse(fileContent);

      //console.log("Before Update: ", _feedbackData.feedbackData); 
      
   
      
        var max_value = Math.max(..._feedbackData.feedbackData.map(_feedbackData.feedbackData, function(n, i) { return n.feedbackCount}));
         // max_value = 10;
        //console.log("max value ", max_value);
        _feedbackData.feedbackData.push(
            {
                feedbackCount : max_value + 1 ,
                userName : "Added by function",
                userFeedback : "Added by function"
        });

         //console.log("After Update: ", _feedbackData.feedbackData); 
        
         // writing into json file
        fs.writeFile(filePath,JSON.stringify(_feedbackData),function(err){
              if (err) throw err;
              console.log('Entry Added for ', ( max_value + 1 ));
       })
    });
}

module.exports = AddFeedback;

