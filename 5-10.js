var car = {
  fuel: Math.ceil(Math.random() * 10 + 10), // ����(L)
  power: Math.ceil(Math.random() * 3 + 2), // ����(km/L)
  moved: 0, // �� �̵��Ÿ�
  run: function() {
    var km = Math.ceil(Math.random() * 6);
    var wasteFuel = km / this.power;
    if (this.fuel < wasteFuel) {
      console.log('�̵��Ұ�');
      return;
    }
    this.fuel -= wasteFuel;
    this.moved += km;
    console.log(km + 'km �̵� (�� ' + this.moved + 'km)');
  },
};