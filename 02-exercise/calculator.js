function calculator(numOne, operator, numTwo) {
    let result;
    switch (operator) {
        case "+":
            result = (numOne + numTwo).toFixed(2);
            break;
        case ("-"):
            result = (numOne - numTwo).toFixed(2);
            break;
        case ("*"):
            result = (numOne * numTwo).toFixed(2);
            break;
        case ("/"):
            result = (numOne / numTwo).toFixed(2);
            break;
    }
    console.log(result);
}
calculator(25.5,
    '-',
    3)