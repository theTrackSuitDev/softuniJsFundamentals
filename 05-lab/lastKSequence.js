function lastKSequence(n, k) {
    let resultArray = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        if (resultArray.length < k) {
            sum = resultArray.reduce((a, x) => a + x, 0);
            resultArray.push(sum);
        } else {
            for (let i = resultArray.length - 1; i >= resultArray.length - k; i--) {
                sum += resultArray[i];                
            }

            resultArray.push(sum);
        }
    }

    console.log(resultArray.join(" "));
} 
lastKSequence(6, 3)
