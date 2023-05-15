function formatGrade(input) {
    let grade = input;
    let description = "";
    if (grade < 3.00) {
        description = "Fail";
        console.log("Fail (2)");
        return;
    } else if (grade < 3.50) {
        description = "Poor";
    } else if (grade < 4.50) {
        description = "Good";
    } else if (grade < 5.50) {
        description = "Very good";
    } else {
        description = "Excellent";
    }

    let printResult = `${description} (${grade.toFixed(2)})`
    console.log(printResult);
}
formatGrade(2.99)