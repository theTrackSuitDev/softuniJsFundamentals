function songs(inputArray) {
    class Song {
        constructor(list, name, time) {
            this.typeList = list;
            this.name = name;
            this.time = time;
        }
    }

    let songsCount = inputArray.shift();
    let songsArray = [];
    for (let i = 0; i < songsCount; i++) {
        let currentSong = inputArray.shift();
        currentSong = currentSong.split("_");
        let list = currentSong.shift();
        let name = currentSong.shift();
        let time = currentSong.shift();

        let song = new Song(list, name, time);
        songsArray.push(song);
    }

    let listToPrint = inputArray.shift();

    if (listToPrint === "all") {
        for (const element of songsArray) {
            console.log(element.name);
        }
    } else {
        for (const element of songsArray) {
            if (listToPrint === element.typeList) {
                console.log(element.name); 
            }
        }
    }
}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])