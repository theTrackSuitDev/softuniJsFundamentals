function passwordCheck(inputPassword) {
    let passwordIsValid = true;

    function lengthCheck(inputPassword) {
        let length = inputPassword.length;
        if (length < 6 || length > 10) {
            passwordIsValid = false;
            console.log("Password must be between 6 and 10 characters");
        }
    }

    function letterAndDigitsCheck(inputPassword) {
        let passArray = inputPassword.split("");
        for (const char of passArray) {
            let charAsc = Number(char.charCodeAt());
            if ((charAsc < 48 || charAsc > 57) &&
                (charAsc < 65 || charAsc > 90) &&
                (charAsc < 97 || charAsc > 122)) {
                passwordIsValid = false;
                console.log("Password must consist only of letters and digits");
                return;
            }
        }
    }

    function twoDigitsCheck(inputPassword) {
        let digitCounter = 0;
        let passArray = inputPassword.split("");
        for (const char of passArray) {
            let charAsc = Number(char.charCodeAt());
            if (charAsc > 47 && charAsc < 58) {
                digitCounter++;
            }
        }
        if (digitCounter < 2) {
            passwordIsValid = false;
            console.log("Password must have at least 2 digits");
        } 
    }

    lengthCheck(inputPassword);
    letterAndDigitsCheck(inputPassword);
    twoDigitsCheck(inputPassword);

    if (passwordIsValid) {
        console.log("Password is valid");
    }

}
passwordCheck("Pa$s$s")