function a() {
  /* ... */
} // �Լ� ����. �Լ��� a�� �� ������.
a(); // ���� OK.

var b = function() {
  /* ... */
}; // (�͸�) �Լ� ǥ����. ������ b�� �� �Լ���.
b(); // ���� OK.

var c = function d() {
  /* ... */
}; // ��� �Լ� ǥ����. �������� c, �Լ����� d.
c(); // ���� OK.
d(); // ����!