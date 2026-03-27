const createParagraph = (text: string): HTMLParagraphElement => {
    const p: HTMLParagraphElement = document.createElement('p');
    p.textContent = text;
    return p;
};

const myParagraph: HTMLParagraphElement = createParagraph('hello world');
document.body.appendChild(myParagraph);
console.log(myParagraph);