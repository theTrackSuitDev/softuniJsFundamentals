function chessTable(inputNum) {
    let printResult = `<div class="chessboard">\n`;
    for (let i = 0; i < inputNum; i++) {
        printResult += `  <div>\n`;
        let color = i % 2 == 0 ? "black" : "white";
        for (let j = 0; j < inputNum; j++) {
            printResult += `    <span class="${color}"></span>\n`;
            color = color == "white" ? "black" : "white";
        }
        printResult += `  </div>\n`;
    }
    console.log(printResult + `</div>`);
}
chessTable(3);
