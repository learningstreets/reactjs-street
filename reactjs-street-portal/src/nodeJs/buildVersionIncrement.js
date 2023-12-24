// This script will increase the build version which we will include in the package.json file in the deploy 
var filePath = './src/assets/constantFiles/buildInfo.json';
var fs = require('fs');
fs.readFile(filePath,function(err,fileContent) {
    if (err) throw err;
    var _buildInfo = JSON.parse(fileContent); 
    _buildInfo.buildRevision = _buildInfo.buildRevision + 1;
    fs.writeFile(filePath,JSON.stringify(_buildInfo),function(err){
        if (err) throw err;
        console.log(`Current build number: ${_buildInfo.buildMajor}.${_buildInfo.buildMinor}.${_buildInfo.buildRevision} ${_buildInfo.buildTag}`);
    })
});

