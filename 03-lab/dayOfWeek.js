function dayOFWeek(inputNum) {
    let days = [
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday", 
        "Sunday"
    ];
    
    inputNum < 1 || inputNum > 7
        ? console.log("Invalid day!")
        : console.log(days[inputNum - 1]);
}
dayOFWeek(11)