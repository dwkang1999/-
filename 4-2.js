var count = 0;
var cbFunc = function() {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};
var timer = setInterval(cbFunc, 300);

// -- ���� ��� --
// 0  (0.3��)
// 1  (0.6��)
// 2  (0.9��)
// 3  (1.2��)
// 4  (1.5��)