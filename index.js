function receivesAFunction(callback) {
  return callback() ;
}

 function returnsANamedFunction() {
     return function newFunction(param1) {
      console.log(param1);
     }
 }

 function  returnsAnAnonymousFunction() {
  return function(name) {
    console.log(name);
  };
 }