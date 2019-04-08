var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

var print_lowercase = function(data){
  //console.log(data);
  data = data.toLowerCase();
  console.log(data);

}


getHTML (requestOptions, print_lowercase);