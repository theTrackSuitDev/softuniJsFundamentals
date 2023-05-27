function cats(arrayOfStrings) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = function () {
                console.log(`${name}, age ${age} says Meow`);
            }

        }
    }
    
    for (const element of arrayOfStrings) {
        let currentElementArray = element.split(" ");
        let name = currentElementArray.shift();
        let age = currentElementArray.shift();
        let currentCat = new Cat(name, age);
        currentCat.meow();
    }
}
cats(['Mellow 2', 'Tom 5'])