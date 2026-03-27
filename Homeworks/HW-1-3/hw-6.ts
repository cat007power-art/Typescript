const createList = (text: string): HTMLUListElement => {
    const ul: HTMLUListElement = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
        const li: HTMLLIElement = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    return ul;
};
const myList: HTMLUListElement = createList('meow');
document.body.appendChild(myList);
