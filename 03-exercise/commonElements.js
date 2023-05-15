function commonElements(arrayOne, arrayTwo) {
    for (const currentElement of arrayOne) {
        for (const nextElement of arrayTwo) {
            if (currentElement === nextElement) {
                console.log(currentElement.toString());
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])