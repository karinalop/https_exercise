var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

var print_reverse = function(data){
  //console.log(data);
  data = data.split('').reverse().join('');
  console.log(data);

}


getHTML (requestOptions, print_reverse);