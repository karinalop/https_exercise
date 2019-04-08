
var https = require('https');

function getAndPrintHTML (options) {

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

  response.on('end', function() {
    //console.log("endo of the stream");
    console.log(dataBuffer);
  });

});

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML (requestOptions);
