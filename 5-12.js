var createCar = function() {
  var fuel = Math.ceil(Math.random() * 10 + 10); // ����(L)
  var power = Math.ceil(Math.random() * 3 + 2); // ����(km / L)
  var moved = 0; // �� �̵��Ÿ�
  var publicMembers = {
    get moved() {
      return moved;
    },
    run: function() {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / power;
      if (fuel < wasteFuel) {
        console.log('�̵��Ұ�');
        return;
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(km + 'km �̵� (�� ' + moved + 'km). ���� ����: ' + fuel);
    },
  };
  Object.freeze(publicMembers);
  return publicMembers;
};
var car = createCar();