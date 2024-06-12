var Person = function(name) {
  this.name = name;
};
var p1 = new Person('���1'); // Person { name: "���1" } true
var p1Proto = Object.getPrototypeOf(p1);
var p2 = new Person.prototype.constructor('���2'); // Person { name: "���2" } true
var p3 = new p1Proto.constructor('���3'); // Person { name: "���3" } true
var p4 = new p1.__proto__.constructor('���4'); // Person { name: "���4" } true
var p5 = new p1.constructor('���5'); // Person { name: "���5" } true

[p1, p2, p3, p4, p5].forEach(function(p) {
  console.log(p, p instanceof Person);
});