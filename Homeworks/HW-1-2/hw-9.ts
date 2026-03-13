function findMinNumber(array: number[]):number {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
const numbers = [8, 3, 12, 1, 7];
console.log(findMinNumber(numbers));

