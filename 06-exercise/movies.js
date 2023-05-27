function movies(inputArray) {
    let moviesArray = [];
    class Movie {
        constructor(title) {
            this.name = title;
        }
    }

    while (inputArray.length > 0) {
        let currentCommand = inputArray.shift();
        if (currentCommand.includes("addMovie")) {
            currentCommand = currentCommand.split("addMovie ");
            let title = currentCommand[1];
            let newMovie = new Movie(title);
            moviesArray.push(newMovie);
        } else if (currentCommand.includes("directedBy")) {
            currentCommand = currentCommand.split(" directedBy ");
            let title = currentCommand[0];
            let director = currentCommand[1];
            let indexToModify = moviesArray.findIndex(
                (el) => el.name === title
            );
            if (indexToModify != -1) {
                moviesArray[indexToModify].director = director;
            }
        } else {
            // Handles "onDate" commands.
            currentCommand = currentCommand.split(" onDate ");
            let title = currentCommand[0];
            let date = currentCommand[1];
            let indexToModify = moviesArray.findIndex(
                (el) => el.name === title
            );
            if (indexToModify != -1) {
                moviesArray[indexToModify].date = date;
            }
        }
    }

    moviesArray.forEach((el) => {
        if (el.hasOwnProperty("director") && el.hasOwnProperty("date")) {
            console.log(JSON.stringify(el));
        }
    });
}

movies([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen",
]);
