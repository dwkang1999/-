var Person = function(name) {
  this.name = name;
};
Person.prototype.getName = function() {
  return this.name;
};

var iu = new Person('����');
iu.getName = function() {
  return '�ٷ� ' + this.name;
};
console.log(iu.getName()); // �ٷ� ����