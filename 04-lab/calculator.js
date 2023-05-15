function calculators(inputOne, inputTwo, operator) {
    let numOne = inputOne;
    let numTwo = inputTwo;

    // Solve this task without using any conditional statements 
    // no if or switch statements or ternary operators).

    operator === "multiply" && console.log(numOne * numTwo);
    operator === "divide" && console.log(numOne / numTwo);
    operator === "add" && console.log(numOne + numTwo);
    operator === "subtract" && console.log(numOne - numTwo);
         
}
calculators(50, 13, 'subtract');
