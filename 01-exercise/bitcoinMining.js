function btcMining(input) {
    let index = 0;
    let btcCounter = 0;
    let moneyMined = 0;
    let firstBuyDay = 0;

    let isFirst = true;
    for (let day = 1; day <= input.length; day++) {
        let goldMined = input[index];
        index++;
        if (day % 3 == 0) {
            goldMined *= 0.7;
        }
        moneyMined += goldMined * 67.51;
        if (moneyMined >= 11949.16) {
            let btcBought = Math.floor(moneyMined / 11949.16);
            btcCounter += btcBought;
            moneyMined -= btcBought * 11949.16;
            if (isFirst) {
                firstBuyDay = day;
                isFirst = false;
            }
        }        
    }
    console.log(`Bought bitcoins: ${btcCounter}`);
    if (btcCounter > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBuyDay}`);
    }
    console.log(`Left money: ${moneyMined.toFixed(2)} lv.`);
}
btcMining([3124.15, 504.212, 2511.124])