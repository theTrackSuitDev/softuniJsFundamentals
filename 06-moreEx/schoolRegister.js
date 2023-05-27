function schoolRegister(studentsArray) {
    class Student {
        constructor(name, grade, score) {
            this.name = name;
            this.grade = Number(grade);
            this.score = Number(score);
        }
    }

    let studentsObjectArray = [];
    while (studentsArray.length > 0) {
        let currentInfo = studentsArray.shift();
        let splitInfoArray = currentInfo.split(", ");
        let name = splitInfoArray[0].split(": ")[1];
        let grade = splitInfoArray[1].split(": ")[1];
        let score = splitInfoArray[2].split(": ")[1];
        let currentStudent = new Student(name, grade, score);
        studentsObjectArray.push(currentStudent);
    }

    for (let i = 0; i < studentsObjectArray.length; i++) {
        if (studentsObjectArray[i].score < 3) {
            studentsObjectArray.splice(i, 1);
            i--;
        } else {
            studentsObjectArray[i].grade += 1;
        }  
    }

    studentsObjectArray.sort((a, b) => a.grade - b.grade);

    let lowestGrade = studentsObjectArray[0].grade;
    console.log(`${lowestGrade} Grade`);
    let scoreSum = 0;
    let studentsInGrade = 0;
    let gradeArray = [];
    for (const student of studentsObjectArray) {
        if (student.grade === lowestGrade) {
            scoreSum += student.score;
            studentsInGrade++;
            gradeArray.push(student.name);
        } else {
            console.log(`List of students: ${gradeArray.join(", ")}`);
            console.log(`Average annual score from last year: ${
                (scoreSum / studentsInGrade).toFixed(2)
            }\n`);

            lowestGrade = student.grade;
            console.log(`${lowestGrade} Grade`);

            scoreSum = 0;
            studentsInGrade = 0;
            gradeArray = [];

            scoreSum += student.score;
            studentsInGrade++;
            gradeArray.push(student.name);
        }
    }

    console.log(`List of students: ${gradeArray.join(", ")}`);
    console.log(`Average annual score from last year: ${
        (scoreSum / studentsInGrade).toFixed(2)
    }`);
}
schoolRegister([
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
    )