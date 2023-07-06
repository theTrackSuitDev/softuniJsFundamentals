function netherRealms(inputString) {
    let namePattern = /[^\,\s]+/g;
    demonsArray = inputString.match(namePattern);
    demonsArray.sort((a, b) => a.localeCompare(b));

    for (const demon of demonsArray) {
        let name = demon;
        let numberPattern = /[-+]?[0-9]\d*(\.\d+)?/g;
        let numbers = [];
        while ((array1 = numberPattern.exec(name)) !== null) {
            numbers.push(Number(array1[0]));
        }

        let damage = numbers.reduce((a, b) => a + b, 0);

        let alterDamagePattern = /[\*\/]/g;
        while ((array2 = alterDamagePattern.exec(name)) !== null) {
            switch (array2[0]) {
                case "*":
                    damage *= 2;
                    break;

                case "/":
                    damage /= 2;
                    break;
            }
        }

        let healthPattern = /[^\d\+\-\*\/\.]/g;
        let healthArray = name.match(healthPattern);
        healthArray = healthArray.map((el) => el.charCodeAt());
        let health = healthArray.reduce((a, b) => a + b, 0);

        console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`);
    }
}
netherRealms("Gos/ho");
