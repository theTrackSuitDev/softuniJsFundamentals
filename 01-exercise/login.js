function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = "";
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i]; 
    }
    let wrongCount = 0;
    let isBlocked = false;
    let nextGuess = input[index];
    index++;
    while (nextGuess != password) {
        if (wrongCount == 3) {
            isBlocked = true;
            break;
        }
        console.log("Incorrect password. Try again.");
        wrongCount++;
        nextGuess = input[index];
        index++;
    }
    if (isBlocked) {
        console.log(`User ${username} blocked!`);
    } else {
        console.log(`User ${username} logged in.`);
    }
}
login(['sunny','rainy','cloudy','sunny','not sunny'])