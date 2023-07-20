function worldTour(inputArray) {
    let initialStops = inputArray.shift();

    let nextCommand = inputArray.shift();
    while (nextCommand !== "Travel") {
        let commandArray = nextCommand.split(":");
        let action = commandArray[0];
        switch (action) {
            case "Add Stop":
                let addIndex = Number(commandArray[1]);
                let stopToAdd = commandArray[2];
                if (initialStops[addIndex]) {
                    let firstPart = initialStops.slice(0,addIndex);
                    let secondPart = initialStops.slice(addIndex);
                    initialStops = firstPart + stopToAdd + secondPart;
                }
                console.log(initialStops);
                break;
            case "Remove Stop":
                let startIndex = Number(commandArray[1]);
                let endIndex = Number(commandArray[2]);
                if (initialStops[startIndex] && initialStops[endIndex]) {
                    let first = initialStops.slice(0, startIndex);
                    let second = initialStops.slice(endIndex + 1);
                    initialStops = first + second;
                }
                console.log(initialStops);
                break;
            case "Switch":
                let oldStop = commandArray[1];
                let newStop = commandArray[2];
                let index = initialStops.indexOf(oldStop);
                while (index !== -1) {
                    initialStops = initialStops.split("");
                    initialStops.splice(index, oldStop.length, newStop);
                    initialStops = initialStops.join("");
                    index = initialStops.indexOf(oldStop, index + newStop.length);                   
                }
                console.log(initialStops);
                break;
        }
        nextCommand = inputArray.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${initialStops}`);
}
worldTour(["Albanian",
"Switch:a:aa",
"Travel"])