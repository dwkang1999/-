var user = {
  name: 'Jaenam',
  gender: 'male',
};

var changeName = function(user, newName) {
  return {
    name: newName,
    gender: user.gender,
  };
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
  console.log('���� ������ ����Ǿ����ϴ�.'); // ���� ������ ����Ǿ����ϴ�.
}
console.log(user.name, user2.name); // Jaenam Jung
console.log(user === user2); // false