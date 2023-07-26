function passwordReset(inputArray) {
    let password = inputArray.shift();
    let nextCommand = inputArray.shift();
    while (nextCommand !== "Done") {
        if (nextCommand === "TakeOdd") {
            let newPass = "";
            for (let i = 0; i < password.length; i++) {
                if (i % 2 !== 0) {
                    newPass += password[i];
                }
            }
            password = newPass;
            console.log(newPass);
            nextCommand = inputArray.shift();
            continue;
        }

        let commandArray = nextCommand.split(" ");
        let action = commandArray.shift();

        switch (action) {
            case "Cut":
                commandArray = commandArray.map(Number);
                let [index, length] = commandArray;
                let stringToCut = password.slice(index, index + length);
                password = password.replace(stringToCut, "");
                console.log(password);
                break;
            case "Substitute":
                let [substring, substitute] = commandArray;
                let subIndex = password.indexOf(substring);
                if (subIndex === -1) {
                    console.log("Nothing to replace!");
                } else {
                    while (subIndex !== -1) {
                        password = password.replace(substring, substitute);
                        subIndex = password.indexOf(substring, subIndex + substitute.length);
                    }
                    console.log(password);
                }
                break;
        }

        nextCommand = inputArray.shift();
    }

    console.log(`Your password is: ${password}`);
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])