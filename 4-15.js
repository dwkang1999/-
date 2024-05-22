var addCoffee = function(name) {
  return function(prevName) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        var newName = prevName ? prevName + ', ' + name : name;
        console.log(newName);
        resolve(newName);
      }, 500);
    });
  };
};
addCoffee('����������')()
  .then(addCoffee('�Ƹ޸�ī��'))
  .then(addCoffee('ī���ī'))
  .then(addCoffee('ī���'));