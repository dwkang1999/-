function a(x) {
  // ���� ��� 1(�Ű�����)
  console.log(x); // (1)
  var x; // ���� ��� 2(���� ����)
  console.log(x); // (2)
  var x = 2; // ���� ��� 3(���� ����)
  console.log(x); // (3)
}
a(1);