function winningTicket(inputString) {
    let basicTicketPattern = /[^\,\s]+/g;

    let allTicketsArray = inputString.match(basicTicketPattern);

    for (const ticket of allTicketsArray) {
        if (ticket.length != 20) {
            console.log("invalid ticket");
            continue;
        }

        let leftPart = ticket.slice(0, 10);
        let rightPart = ticket.slice(10);

        let jackPattern = /\${20}|@{20}|#{20}|\^{20}/;
        let winPattern = /\${6,9}|@{6,9}|#{6,9}|\^{6,9}/;

        if (jackPattern.test(ticket) && jackPattern.test(ticket)) {
            console.log(`ticket "${ticket}" - 10${ticket[0]} Jackpot!`);
            continue;
        }

        if (winPattern.test(leftPart) && winPattern.test(rightPart)) {
            let symbols = ["$", "@", "#", "^"];
            for (const symbol of symbols) {
                let symbolRegEx = new RegExp(`\\${symbol}`, "g");
                let matchArrayA = leftPart.match(symbolRegEx);
                if (matchArrayA && matchArrayA.length >= 6) {
                    let matchArrayB = rightPart.match(symbolRegEx);
                    let count = Math.min(matchArrayA.length, matchArrayB.length);
                    console.log(`ticket "${ticket}" - ${count}${symbol}`);
                    break;
                }
            }
            continue;         
        }
        console.log(`ticket "${ticket}" - no match`);
    }
}
winningTicket("validticketnomatch:(")