function a() {
  console.log(b); // (1)
  var b = 'bbb'; // ���� ��� 1(���� ����)
  console.log(b); // (2)
  function b() {} // ���� ��� 2(�Լ� ����)
  console.log(b); // (3)
}
a();