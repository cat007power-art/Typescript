let s: string = 'hello world';
const s1: string = s.toUpperCase();
console.log(s1);

s = 'lorem ipsum';
const s2: string = s.toUpperCase();
console.log(s2);

s = 'javascript is cool';
const s3: string = s.toUpperCase();
console.log(s3);

const strings: string[] = [s1, s2, s3];
for (const str of strings) {
    console.log(str);
}


