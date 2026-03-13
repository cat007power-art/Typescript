function sum(arr: number[]): number {
    let total = 0;
    for (const item of arr) {
        total=total+item;
    }
    return total;
}

console.log(sum([1, 2, 10]));