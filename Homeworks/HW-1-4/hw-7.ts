function sortNums(array: number[], direction: 'ascending' | 'descending'): number[] {
    const sorted: number[] = array.sort((a, b) => a - b);
    if (direction === 'ascending') {
        return sorted;
    }
    if (direction === 'descending') {
        return sorted.reverse();
    }
    return sorted;
}

const nums: number[] = [11, 21, 3];

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));