function companyUsers(inputArray) {
    let companies = {};

    for (const element of inputArray) {
        let [companyName, employeeId] = element.split(" -> ");
        if (!companies.hasOwnProperty(companyName)) {
            companies[companyName] = new Set();
        }

        companies[companyName].add(employeeId);
    }

    let companiesArray = Object.entries(companies);

    companiesArray.sort((a, b) => a[0].localeCompare(b[0]));

    for (const company of companiesArray) {
        let companyName = company.shift();
        console.log(companyName);

        company[0].forEach(element => {
            console.log(`-- ${element}`);
        });
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])