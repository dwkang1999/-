var copyObject = function(target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

var user = {
  name: 'Jaenam',
  gender: 'male',
};

var user2 = copyObject(user);
user2.name = 'Jung';

if (user !== user2) {
  console.log('���� ������ ����Ǿ����ϴ�.'); // ���� ������ ����Ǿ����ϴ�.
}
console.log(user.name, user2.name); // Jaenam Jung
console.log(user === user2); // false