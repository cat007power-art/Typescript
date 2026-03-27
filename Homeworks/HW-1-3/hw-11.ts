const sum = (arr: number[]): number => arr.reduce((acc, num) => acc + num, 0);

console.log(sum([1, 2, 10]));