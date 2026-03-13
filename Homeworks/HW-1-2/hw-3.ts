function calcCylinderArea(r:number, h:number):number {
    return 2 * Math.PI * r * (r + h);
}

let area = calcCylinderArea(3, 10);
console.log(area);

