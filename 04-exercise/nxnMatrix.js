function nxnMatrix(num) {
    for (let i = 0; i < num; i++) {
        let resultArray = [];
        for (let j = 0; j < num; j++) {
            resultArray.push(num);
        }
        
        console.log(resultArray.join(" "));
    }
}
nxnMatrix(2)