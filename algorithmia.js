var algorithmia = require("algorithmia");

var client = algorithmia("simxR2oKQUCTnETkztk7N82bfHM1");

var input = "xunavy";
 client.algo("algo://demo/Hello/0.1.1")
           .pipe(input)
           .then(function(response) {
             console.log(response.get());
           });
//Algorithmia.client("simxR2oKQUCTnETkztk7N82bfHM1")
          