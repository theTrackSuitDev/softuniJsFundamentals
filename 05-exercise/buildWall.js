function buildWall(sectionsArray) {
    let daysUntilFinish = 30 - (Math.min(...sectionsArray));
    let concretePerDayArray = [];
    for (let i = 0; i < daysUntilFinish; i++) {
        let currentDayConcrete = 0;
        for (let i = 0; i < sectionsArray.length; i++) {
            let section = sectionsArray[i];
            if (section < 30) {
                section++;
                sectionsArray[i] = section;
                currentDayConcrete += 195;
            }
        }
        concretePerDayArray.push(currentDayConcrete);
    }

    let allConcreteUsed = concretePerDayArray.reduce((a, b) => a + b, 0);
    let finalPrice = allConcreteUsed * 1900;

    console.log(concretePerDayArray.join(", "));
    console.log(`${finalPrice} pesos`);
    
}
buildWall([21, 25, 28])