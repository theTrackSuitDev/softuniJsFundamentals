function bonusScoring(inputArray) {
    inputArray = inputArray.map(Number);
    const studentsCount = inputArray.shift();
    const lecturesCount = inputArray.shift();
    const bonus = inputArray.shift();

    let maxBonus = 0;
    let maxBonusLectures = 0;

    for (const studentLectures of inputArray) {
        let currentBonus = studentLectures / lecturesCount * (5 + bonus);
        if (currentBonus > maxBonus) {
            maxBonus = currentBonus;
            maxBonusLectures = studentLectures;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxBonusLectures} lectures.`);
}
bonusScoring([
  '10', '30', '14', '8',
  '23', '27', '28', '15',
  '17', '25', '26', '5',
  '18'
])