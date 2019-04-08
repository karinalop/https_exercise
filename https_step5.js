
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

var printHTML = function(data){
  console.log(data)

}


getHTML (requestOptions, printHTML);
