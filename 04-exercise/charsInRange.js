function charsInRange(charOne, charTwo) {
    let charOneAsc = Number(charOne.charCodeAt());
    let charTwoAsc = Number(charTwo.charCodeAt());
    let numArray = [];
    numArray.push(charOneAsc, charTwoAsc);
    let firstInRange = Math.min(...numArray);
    let secondInRange = Math.max(...numArray);
    let resultArray = [];
    for (let i = firstInRange + 1; i < secondInRange; i++) {
        let currCharAsc = i;
        let currChar = String.fromCharCode(currCharAsc);
        resultArray.push(currChar);        
    }

    console.log(resultArray.join(" "));
}
charsInRange('C',
'#')