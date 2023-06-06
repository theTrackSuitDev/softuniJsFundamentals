function legendaryFarming(inputString) {

    let mineralsCollected = {
        shards: 0,
        fragments: 0,
        motes: 0
    }

    let junkCollected = {};

    let inputArray = inputString.split(" ");
    for (let i = 0; i < inputArray.length; i += 2) {
        let quantity = Number(inputArray[i]);
        let resource = inputArray[i+1].toLowerCase();

        if (mineralsCollected.hasOwnProperty(resource)) {
            mineralsCollected[resource] += quantity;
        } else {
            if (junkCollected.hasOwnProperty(resource)) {
                junkCollected[resource] += quantity;
            } else {
                junkCollected[resource] = quantity;
            }
        }

        if (mineralsCollected.shards >= 250) {
            console.log(`Shadowmourne obtained!`);
            mineralsCollected.shards -= 250;
            break;            
        } else if (mineralsCollected.fragments >= 250) {
            console.log(`Valanyr obtained!`);
            mineralsCollected.fragments -= 250;
            break;
        } else if (mineralsCollected.motes >= 250) {
            mineralsCollected.motes -= 250;
            console.log(`Dragonwrath obtained!`);
            break;
        }        
    }

    let mineralsArray = Object.entries(mineralsCollected);
    mineralsArray.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    mineralsArray.forEach(element => {
        let mineral = element[0];
        let amount = element[1];
        console.log(`${mineral}: ${amount}`);
    });

    let junkArray = Object.entries(junkCollected);
    junkArray.sort((a, b) => a[0].localeCompare(b[0]));

    junkArray.forEach(element => {
        let mineral = element[0];
        let amount = element[1];
        console.log(`${mineral}: ${amount}`);
    });
}
legendaryFarming(
    '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
)