function substring(string, start, count) {
    let end = start + count;
    let subStr = string.substring(start, end);
    console.log(subStr);
}
substring('SkipWord', 4, 7)