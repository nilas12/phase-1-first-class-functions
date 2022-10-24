const sayHi = function sayHi() {
    console.log("Hi!")
  }
  
  function receivesAFunction(sayHi) {
    sayHi()
  }
  function returnsANamedFunction() {
    const sayHi = function sayHi() {
      console.log("Hi!")
    }
    return sayHi
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("Hi!")
    }
  }