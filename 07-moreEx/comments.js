function comments(inputArray) {
    let users = [];
    let articles = [];
    let comments = [];

    class Comment {
        constructor(user, article, title, content) {
            this.user = user;
            this.article = article;
            this.title = title;
            this.content = content;
        }
    }

    for (const command of inputArray) {
        if (command.includes("user ")) {
            let username = command.split(" ")[1];
            users.push(username);
        } else if (command.includes("article ")) {
            let article = command.split(" ")[1];
            articles.push(article);
        } else {
            let username = command.split(" posts on ")[0];
            let partToDelete = `${username} posts on `;
            let commandLeft = command.slice(partToDelete.length);
            let article = commandLeft.split(": ")[0];
            partToDelete = `${article}: `;
            commandLeft = commandLeft.slice(partToDelete.length);
            let [title, content] = commandLeft.split(", ");

            if (users.find(element => element === username) &&
                articles.find(element => element === article)) {
                let comment = new Comment(username, article, title, content);
                comments.push(comment);
            }
        }
    }

    function elementCount(arr, element) {
        return arr.filter((currentElement) => currentElement.article == element).length;
    };

    articles.sort((a, b) => elementCount(comments, b) - elementCount(comments, a));

    for (const art of articles) {
        console.log(`Comments on ${art}`);
        let commentsOfArticle = comments.filter(el => el.article === art);
        commentsOfArticle.sort((a, b) => a.user.localeCompare(b.user));

        for (const comment of commentsOfArticle) {
            console.log(`--- From user ${comment.user}: ${comment.title} - ${comment.content}`);
        }
    }
}
comments (
    ['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 
    'article Bobby', 'article Steven', 'user Liam', 
    'user Henry', 'Mark posts on Bobby: Is, I do really like them', 
    'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']
)