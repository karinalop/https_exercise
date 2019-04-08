var https = require('https');

function getHTML (options, action) {

  /* Add your code here */
  https.get(options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  var dataBuffer = "";

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    //console.log('Chunk Received. Length:', data.length);
    //console.log(data + '\n');
    dataBuffer += data;
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function(){
    action(dataBuffer);
  });

});

}

var printHTML = function(data){
  console.log(data)

}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getHTML (requestOptions, printHTML);