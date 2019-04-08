var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

var print_uppercase = function(data){
  //console.log(data);
  data = data.toUpperCase();
  console.log(data);

}


getHTML (requestOptions, print_uppercase);