function ages(input) {
    let age = Number(input);
    let type = '';
    if (age >= 66) {
        type = 'elder';
    } else if (age >= 20) {
        type = 'adult';
    } else if (age >= 14) {
        type = 'teenager';
    } else if (age >= 3) {
        type = 'child';
    } else if (age >= 0) {
        type = 'baby';
    } else {
        type = 'out of bounds';
    }
    console.log(type);
}
ages(100)