function gramophone(bandName, albumName, songName) {
    const secPerRot = 2.5;
    let duration = albumName.length * bandName.length * songName.length / 2;
    let rotations = Math.ceil(duration / secPerRot);
    console.log(`The plate was rotated ${rotations} times.`); 
}
gramophone('Rammstein', 'Sehnsucht', 'Engel')