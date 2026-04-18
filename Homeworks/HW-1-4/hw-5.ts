function stringToArray(str: string): string[] {
    return str.split(' ');
}

const str: string = 'Ревуть воли як ясла повні';
const arr: string[] = stringToArray(str);
console.log(arr);
