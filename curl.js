  var curl = require('node-curl');
  
  curl('www.google.com', function(err) {
    console.info(this.status);
    console.info('-----');
    console.info(this.body);
    console.info('-----');
    console.info(this.info('SIZE_DOWNLOAD'));
  });