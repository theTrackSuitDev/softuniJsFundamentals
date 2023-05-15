function echoType(parameter) {
    let checkResult = typeof(parameter);
    console.log(checkResult);
    checkResult === "string" || checkResult === "number"
        ? console.log(parameter)
        : console.log("Parameter is not suitable for printing");
}
echoType(null)