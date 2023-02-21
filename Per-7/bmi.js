// Menghitung BMI
export default (berat, tinggi) => {
    const bmi = berat / (tinggi * tinggi);
  
    let category;
    if (bmi < 18.5) {
      category = 'Berat badan kurang';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal ';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Berat badan berlebih';
    } else if (bmi >= 30) {
      category = 'Obesity';
    }
  
    return `BMI = ${bmi.toFixed(2)} (${category})`;
  };
  