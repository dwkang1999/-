function a() {
  var x = 1; // ���� ��� 1(�Ű����� ����)
  console.log(x); // (1)
  var x; // ���� ��� 2(���� ����)
  console.log(x); // (2)
  var x = 2; // ���� ��� 3(���� ����)
  console.log(x); // (3)
}
a();