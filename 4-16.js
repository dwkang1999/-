var addCoffee = function(prevName, name) {
  setTimeout(function() {
    coffeeMaker.next(prevName ? prevName + ', ' + name : name);
  }, 500);
};
var coffeeGenerator = function*() {
  var espresso = yield addCoffee('', '����������');
  console.log(espresso);
  var americano = yield addCoffee(espresso, '�Ƹ޸�ī��');
  console.log(americano);
  var mocha = yield addCoffee(americano, 'ī���ī');
  console.log(mocha);
  var latte = yield addCoffee(mocha, 'ī���');
  console.log(latte);
};
var coffeeMaker = coffeeGenerator();
coffeeMaker.next();