function lettersChangeNumbers(inputString) {
    let commandsArray = inputString.split(" ");
    let result = 0;

    for (const command of commandsArray) {
        if (command === "") {
            continue;
        }

        let firstLetter = command[0];
        let secondLetter = command[command.length - 1];
        let number = command.slice(1, command.length - 1);
        number = Number(number);

        let firstAscii = firstLetter.charCodeAt();
        let secondAscii = secondLetter.charCodeAt();
        let position = 0;

        if (firstAscii > 64 && firstAscii < 91) {
            position = firstAscii - 64;
            number /= position;
        } else {
            position = firstAscii - 96;
            number *= position;
        }

        if (secondAscii > 64 && secondAscii < 91) {
            position = secondAscii - 64;
            number -= position;
        } else {
            position = secondAscii - 96;
            number += position;
        }

        result += number;        
    }

    console.log(result.toFixed(2));
}
lettersChangeNumbers('P34562Z q2576f   H456z')