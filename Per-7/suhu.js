let suhu = 99.20;
function konSuhu(suhu) {
    return (suhu - 32) * 5/9;
  }
let celsius = konSuhu(suhu);

export {suhu, celsius};