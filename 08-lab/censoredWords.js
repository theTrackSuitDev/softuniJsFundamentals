function censoredWords(text, wordToCensor) {
    let censored = '';
    for (let i = 0; i < wordToCensor.length; i++) {
        censored += '*';
    }

    while (text.includes(wordToCensor)) {
        text = text.replace(wordToCensor, censored);
    }

    console.log(text);
}
censoredWords('Find the hidden word', 'hidden')