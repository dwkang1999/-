var addCoffee = function(name) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(name);
    }, 500);
  });
};
var coffeeMaker = async function() {
  var coffeeList = '';
  var _addCoffee = async function(name) {
    coffeeList += (coffeeList ? ',' : '') + (await addCoffee(name));
  };
  await _addCoffee('����������');
  console.log(coffeeList);
  await _addCoffee('�Ƹ޸�ī��');
  console.log(coffeeList);
  await _addCoffee('ī���ī');
  console.log(coffeeList);
  await _addCoffee('ī���');
  console.log(coffeeList);
};
coffeeMaker();