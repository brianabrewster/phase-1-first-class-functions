function receivesAFunction (cb) {
    return cb();
  }
  
  receivesAFunction(function () {return 'Hello'});


  function returnsANamedFunction (cb) {
    return cb = () => 'Hello'
  }

  function returnsAnAnonymousFunction (cb) {
    return function () {return 'Hello'}
  }