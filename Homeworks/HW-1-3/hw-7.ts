const createList = (text: string, count: number): HTMLUListElement => {
    const ul: HTMLUListElement = document.createElement('ul');
    for (let i = 0; i < count; i++) {
        const li: HTMLLIElement = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    return ul;
};

const myList: HTMLUListElement = createList('meow', 5);
document.body.appendChild(myList);
