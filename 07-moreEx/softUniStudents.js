function softUniStudents(inputArray) {
    let courses = [];

    class Course {
        constructor(name, capacity) {
            this.name = name;
            this.capacity = Number(capacity);
            this.students = [];
        }
    }

    class Student {
        constructor(username, credits, email) {
            this.username = username;
            this.credits = Number(credits);
            this.email = email;
        }
    }

    for (const command of inputArray) {
        if (command.includes(": ")) {
            let [name, capacity] = command.split(": ");
            capacity = Number(capacity);
            let courseIndex = courses.findIndex(el => el.name === name);
            if (courseIndex === -1) {
                let newCourse = new Course(name, capacity);
                courses.push(newCourse);
            } else {
                courses[courseIndex].capacity += capacity;
            }
        } else {
            let username = command.split("[")[0];
            let partToDelete = `${username}[`
            let commandLeft = command.slice(partToDelete.length);
            let credits = commandLeft.split("]")[0];
            partToDelete = `${credits}] with email `;
            commandLeft = commandLeft.slice(partToDelete.length);
            let [email, courseName] = commandLeft.split(" joins ");

            let courseIndex = courses.findIndex(el => el.name === courseName);
            if (courseIndex != -1) {
                if (courses[courseIndex].capacity > courses[courseIndex].students.length) {
                    let newStudent = new Student(username, credits, email);
                    courses[courseIndex].students.push(newStudent);
                }
            }
        }
    }

    courses.sort((a, b) => b.students.length - a.students.length);

    courses.forEach(element => {
        console.log(`${element.name}: ${element.capacity - element.students.length} places left`);
        element.students.sort((a, b) => b.credits - a.credits);
        element.students.forEach(student => {
            console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
        });
    });

}
softUniStudents(
    ['JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore']
)