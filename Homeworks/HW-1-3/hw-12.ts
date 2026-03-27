const swap = <T>(arr: T[], index1: number, index2: number): T[] => {
    if (index1 < 0 || index2 < 0 || index1 >= arr.length || index2 >= arr.length) {
        throw new Error("Индекс вне диапазона массива");
    }

    const temp: T = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
};

const numbers: number[] = [10, 20, 30];
console.log(swap(numbers, 0, 2));