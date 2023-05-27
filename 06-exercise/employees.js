function employees(namesArray) {
    let employeesArray = [];
    class Employee {
        constructor(name, number) {
            this.name = name;
            this.number = number;
        }
    }

    for (let i = 0; i < namesArray.length; i++) {
        let name = namesArray[i];
        let number = name.length;
        let currentPerson = new Employee(name, number);
        employeesArray.push(currentPerson);
    }

    employeesArray.forEach((element) =>
        console.log(
            `Name: ${element.name} -- Personal Number: ${element.number}`
        )
    );
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])