function createList(array:any []):void {
    document.write('<ul>');
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

const primitives: any[] = [42, 'hello', true, 'world', false, 3.14];
createList(primitives);

