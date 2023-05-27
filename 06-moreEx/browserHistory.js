function browserHistory(object, array) {
    let status = object;
    let commands = array.slice();

    while (commands.length > 0) {
        let currentCommand = commands.shift();
        let action = currentCommand.split(" ", 1)[0];
        let site = currentCommand.split(`${action} `)[1];
        switch (action) {
            case "Open":
                status["Open Tabs"].push(site);
                status["Browser Logs"].push(currentCommand);
                break;
            case "Close":
                if (status["Open Tabs"].includes(site)) {
                    status["Open Tabs"] = status["Open Tabs"].filter(
                        (element) => element != site
                    );
                    status["Recently Closed"].push(site);
                    status["Browser Logs"].push(currentCommand);
                }
                break;
            case "Clear":
                status["Open Tabs"] = [];
                status["Recently Closed"] = [];
                status["Browser Logs"] = [];
                break;
        }
    }
    console.log(status["Browser Name"]);
    console.log(`Open Tabs: ${status["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${status["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${status["Browser Logs"].join(", ")}`);

}
browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"])