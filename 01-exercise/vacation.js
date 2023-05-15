function vacation(group, type, day) {
    let guestsCount = Number(group);
    let groupType = type;
    let dayOfWeek = day;
    let pricePerPerson = 0;
    let totalPrice = 0;
    switch (groupType) {
        case 'Students':
            switch (dayOfWeek) {
                case 'Friday':
                    pricePerPerson = 8.45;
                    break;
                case 'Saturday':
                    pricePerPerson = 9.8;
                    break;
                case 'Sunday':
                    pricePerPerson = 10.46;
                    break;
            }
            totalPrice = guestsCount * pricePerPerson;
            if (guestsCount >= 30) {
                totalPrice *= 0.85;
            }
            break;
        case 'Business':
            switch (dayOfWeek) {
                case 'Friday':
                    pricePerPerson = 10.9;
                    break;
                case 'Saturday':
                    pricePerPerson = 15.6;
                    break;
                case 'Sunday':
                    pricePerPerson = 16;
                    break;
            }
            if (guestsCount >= 100) {
                guestsCount -= 10;
            }
            totalPrice = guestsCount * pricePerPerson;
            break;
        case 'Regular':
            switch (dayOfWeek) {
                case 'Friday':
                    pricePerPerson = 15;
                    break;
                case 'Saturday':
                    pricePerPerson = 20;
                    break;
                case 'Sunday':
                    pricePerPerson = 22.5;
                    break;
            }
            totalPrice = guestsCount * pricePerPerson;
            if (guestsCount >= 10 && guestsCount <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday")