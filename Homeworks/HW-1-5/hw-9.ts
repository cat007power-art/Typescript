interface Array<T> {
    forEach(callback: (value: T, index: number, array: T[]) => void): void;
}

Array.prototype.forEach = function<T>(
    this: T[],
    callback: (value: T, index: number, array: T[]) => void
): void {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

const numbers: number[] = [1, 2, 3, 4];
numbers.forEach((item: number, index: number) => {
    console.log(`Елемент ${index}: ${item}`);
});

// --------------------------------------


interface Array<T> {
    filter(callback: (value: T, index: number, array: T[]) => boolean): T[];
}

Array.prototype.filter = function<T>(
    this: T[],
    callback: (value: T, index: number, array: T[]) => boolean
): T[] {
    const result: T[] = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

const nums: number[] = [10, 25, 30, 45, 50];
const filtered: number[] = nums.filter((num: number) => num > 30);

console.log(filtered); // [45, 50]