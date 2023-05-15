function cone(radius, height) {
    let volume = height * Math.PI * radius * radius / 3;
    let l = Math.sqrt(height * height + radius * radius);
    let totalArea = Math.PI * radius * radius + Math.PI * radius * l;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`);
}
cone(3.3, 7.8)