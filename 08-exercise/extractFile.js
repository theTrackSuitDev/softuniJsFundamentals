function extractFile(path) {
    let pathArray = path.split("\\");
    let lastIndex = pathArray.length - 1;
    let file = pathArray[lastIndex];
    let extensionPointIndex = file.lastIndexOf(".");
    let fileName = file.slice(0, extensionPointIndex);
    let extension = file.slice(extensionPointIndex + 1);

    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')