function triangleArea(sideA, sideB, sideC) {
    let semiParam = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(semiParam * (semiParam - sideA) * 
    (semiParam - sideB) * (semiParam - sideC));
    console.log(area);
}
triangleArea(2,
    3.5,
    4)