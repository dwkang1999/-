var Cat = function(name, age) {
  this.bark = '具克';
  this.name = name;
  this.age = age;
};
var choco = new Cat('檬内', 7);
var nabi = new Cat('唱厚', 5);
console.log(choco, nabi);

/* 搬苞
Cat { bark: '具克', name: '檬内', age: 7 }
Cat { bark: '具克', name: '唱厚', age: 5 }
*/