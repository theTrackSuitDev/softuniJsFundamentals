function extractEmails(inputString) {
    let emailPattern = /(^| )([a-z0-9]+[\.\-_]*[a-z0-9]+)+@[a-z\-_]+(\.[a-z]+)+/gi
    let mails = inputString.match(emailPattern);
    if (mails) {
        mails.forEach(element => {
            console.log(element);
        });
    }
}
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- steve.parker@softuni.de.')