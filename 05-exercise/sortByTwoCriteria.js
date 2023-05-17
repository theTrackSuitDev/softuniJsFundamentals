function sortByTwoCriteria(inputArray) {
    function compareFn(a, b) {
        let al = a.length;
        let bl = b.length;

        if (al < bl) {
          return -1;
        }

        if (al > bl) {
          return 1;
        }

        if (al === bl) {
            let arr = [];
            arr.push(a, b);
            arr.sort();
            if (arr[0] === a) {
                return -1;
            } else {
                return 1;
            }
        }
    }

    inputArray.sort(compareFn);
    inputArray.forEach(element => console.log(element));
}
sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])
