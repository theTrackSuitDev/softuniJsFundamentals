function equalSums(numbers) {
    let notFound = true;
    for (let i = 0; i < numbers.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let j = i - 1; j >= 0; j--) {
               sumLeft += numbers[j];                
        }

        for (let k = i + 1; k < numbers.length; k++) {
                sumRight += numbers[k];                
        }

        if (sumRight === sumLeft) {
            console.log(i);
            notFound = false;
            break;
        }        
    }
    if (notFound) {
        console.log("no");
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])