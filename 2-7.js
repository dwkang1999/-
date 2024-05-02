function a() {
  var b;
  var b = function b() {}; // ¡ç ¹Ù²ï ºÎºÐ

  console.log(b); // (1)
  b = 'bbb';
  console.log(b); // (2)
  console.log(b); // (3)
}
a();