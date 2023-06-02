function schoolGrades(inputArray) {
    let gradesDiary = {};
    for (const entry of inputArray) {
        let name = entry.split(" ", 1);
        let grades = entry.split(`${name} `)[1];

        if (gradesDiary.hasOwnProperty(name)) {
            gradesDiary[name] += ` ${grades}`;
        } else {
            gradesDiary[name] = grades;
        }
    }

    let diaryArray = Object.entries(gradesDiary);
    diaryArray.sort((a, b) => a[0].localeCompare(b[0]));
    gradesDiary = Object.fromEntries(diaryArray);

    for (const name in gradesDiary) {
        let gradesArray = gradesDiary[name].split(" ").map(Number);
        let average = gradesArray.reduce((a, b) => a + b, 0) / gradesArray.length
        console.log(`${name}: ${average.toFixed(2)}`);
    }
}
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'])