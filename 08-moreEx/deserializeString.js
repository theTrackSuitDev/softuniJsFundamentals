function deserializeString(inputArray) {
    let result = [];

    let command = inputArray.shift();
    while (command != "end") {
        let [char, indexString] = command.split(":");
        let indexArray = indexString.split("/");
        indexArray = indexArray.map(Number);
        for (const index of indexArray) {
            result[index] = char;
        }

        command = inputArray.shift();
    }

    console.log(result.join(""));
}
deserializeString(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end'])