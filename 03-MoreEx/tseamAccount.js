function tseamAccount(input = []) {
    let inputArray = input.slice();
    let accountString = inputArray.shift();
    let accountArray = accountString.split(" ");
    for (const command of inputArray) {
        let commandArray = command.split(" ");
        let action = commandArray[0];
        let game = commandArray[1];
        switch (action) {
            case "Install":
                if (!accountArray.includes(game)) {
                    accountArray.push(game);
                }
                break;
            case "Uninstall":
                if (accountArray.includes(game)) {
                    let gameIndex = accountArray.findIndex(
                        (element) => element === game
                    );
                    accountArray.splice(gameIndex, 1);
                }
                break;
            case "Update":
                if (accountArray.includes(game)) {
                    let gameIndex = accountArray.findIndex(
                        (element) => element === game
                    );
                    accountArray.splice(gameIndex, 1);
                    accountArray.push(game);
                }
                break;
            case "Expansion":
                let expansionArray = game.split("-");
                let gameToExpand = expansionArray[0];
                let expansionName = expansionArray[1];
                let expansionString = `${gameToExpand}:${expansionName}`;
                if (accountArray.includes(gameToExpand)) {
                    let gameIndex = accountArray.findIndex(
                        (element) => element === gameToExpand
                    );
                    accountArray.splice(gameIndex + 1, 0, expansionString);
                }
                break;
            default:
                console.log(accountArray.join(" "));
                break;
        }
    }
}
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']);
