var a;
console.log(a); // (1) undefined. ���� �������� ���� ������ ����

var obj = { a: 1 };
console.log(obj.a); // 1
console.log(obj.b); // (2) �������� �ʴ� ������Ƽ�� ����
console.log(b); // c.f) ReferenceError: b is not defined

var func = function() {};
var c = func(); // (3) ��ȯ(return)���� ������ undefined�� ��ȯ�� ������ ����.
console.log(c); // undefined