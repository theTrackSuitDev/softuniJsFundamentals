function bookShelf(inputArray) {
    let shelves = [];
    
    class Shelf {
        constructor(id, genre) {
            this.id = id;
            this.genre = genre;
            this.books = [];
        }
    }

    class Book {
        constructor(title, author) {
            this.title = title;
            this.author = author;
        }
    }

    for (const command of inputArray) {
        if (command.includes(" -> ")) {
            let [id, genre] = command.split(" -> ");
            if (!shelves.find(el => el.id === id)) {
                let newShelf = new Shelf(id, genre);
                shelves.push(newShelf);
            }
        } else {
            let bookTitle = command.split(": ")[0];
            let partToDelete = `${bookTitle}: `;
            let commandLeft = command.slice(partToDelete.length);
            let [author, genre] = commandLeft.split(", ");

            let shelfIndex = shelves.findIndex(el => el.genre === genre);
            if (shelfIndex != -1) {
                let newBook = new Book(bookTitle, author);
                shelves[shelfIndex].books.push(newBook);
            }
        }
    }

    shelves.sort((a, b) => b.books.length - a.books.length);

    shelves.forEach(element => {
        console.log(`${element.id} ${element.genre}: ${element.books.length}`);
        element.books.sort((a, b) => a.title.localeCompare(b.title));
        element.books.forEach(element => {
            console.log(`--> ${element.title}: ${element.author}`);
        });
    });
}
bookShelf(
['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi']
)