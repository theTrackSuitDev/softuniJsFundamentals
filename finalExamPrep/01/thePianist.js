function thePianist(inputArray) {
    let initialCount = Number(inputArray.shift());
    let pieces = [];
    class Piece {
        constructor(name, composer, key) {
            this.name = name;
            this.composer = composer;
            this.key = key;
        }
    }

    for (let i = 0; i < initialCount; i++) {
        let currentPiece = inputArray.shift();
        let [name, composer, key] = currentPiece.split("|");
        currentPiece = new Piece(name, composer, key);
        pieces.push(currentPiece);        
    }

    let nextCommand = inputArray.shift();
    while (nextCommand != "Stop") {
        let commandArray = nextCommand.split("|");
        let action = commandArray.shift();
        switch (action) {
            case "Add":
                let [name, composer, key] = commandArray;
                let indexToAdd = pieces.findIndex(element => element.name === name);
                if (indexToAdd === -1) {
                    let newPiece = new Piece(name, composer, key);
                    pieces.push(newPiece);
                    console.log(`${name} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${name} is already in the collection!`);
                }
                break;
            case "Remove":
                let pieceToRemove = commandArray.shift();
                let indexToRemove = pieces.findIndex(element => element.name === pieceToRemove);

                if (indexToRemove === -1) {
                    console.log(`Invalid operation! ${pieceToRemove} does not exist in the collection.`);
                } else {
                    pieces.splice(indexToRemove, 1);
                    console.log(`Successfully removed ${pieceToRemove}!`);
                }
                break;
            case "ChangeKey":
                let pieceToAlter = commandArray.shift();
                let indexToAlter = pieces.findIndex(element => element.name === pieceToAlter);

                if (indexToAlter === -1) {
                    console.log(`Invalid operation! ${pieceToAlter} does not exist in the collection.`);
                } else {
                    let newKey = commandArray.shift();
                    pieces[indexToAlter].key = newKey;
                    console.log(`Changed the key of ${pieceToAlter} to ${newKey}!`);
                }
                break;
        }

        nextCommand = inputArray.shift();
    }

    pieces.forEach(element => {
        console.log(`${element.name} -> Composer: ${element.composer}, Key: ${element.key}`);
    });
}
thePianist(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'  
      ]
)