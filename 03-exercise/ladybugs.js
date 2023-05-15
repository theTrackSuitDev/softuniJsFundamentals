function ladybugs(inputArray) {
    let input = inputArray.slice(0);
    let fieldSize = input.shift();
    let bugPositions = input.shift();
    let positionsArray = bugPositions.split(" ");
    for (let i = 0; i < positionsArray.length; i++) {
        positionsArray[i] = Number(positionsArray[i]);
    }
    let field = [];
    for (let i = 0; i < fieldSize; i++) {
        field.push(0);
    }
    for (let i = 0; i < field.length; i++) {
        if (positionsArray.includes(i)) {
            field[i] = 1;
        }  
    }  
    for (const command of input) {
        let commandArray = command.split(" ");
        let bugToMove = Number(commandArray[0]);
        let direction = commandArray[1];
        let cellsToMove = Number(commandArray[2]);
        if (bugToMove < 0 || bugToMove > field.length - 1) {
            continue;
        }
        if (field[bugToMove] === 0){
            continue;
        } else {
        field[bugToMove] = 0;
        }
        switch (direction) {
            case "right":
                for (let i = bugToMove + cellsToMove; i <= field.length - 1; i += cellsToMove) {
                    if (field[i] === 0) {
                        field[i] = 1;
                        break;
                    } 
                }
                break;
            case "left":
                for (let i = bugToMove - cellsToMove; i >= 0; i -= cellsToMove) {
                    if (field[i] === 0) {
                        field[i] = 1;
                        break;
                    } 
                }
                break;
        }
    }
    console.log(field.join(" "));
}
ladybugs([ 5, '3',
'3 left 2',
'1 left -2'])