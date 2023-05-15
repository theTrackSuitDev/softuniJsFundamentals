function perfectNumber(number) {
    if (number < 1) {
        console.log("It's not so perfect.");
        return;
    }

    let sumOfDivisors = 0;
    for (let i = 1; i < number; i++) {
       if (number % i === 0) {
         sumOfDivisors += i;
       }
    }

    sumOfDivisors === number
        ? console.log("We have a perfect number!")
        : console.log("It's not so perfect.");

}
perfectNumber(1236498)