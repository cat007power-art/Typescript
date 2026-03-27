const buildList = (arr: (string | number | boolean)[]): HTMLUListElement => {
    const ul: HTMLUListElement = document.createElement('ul');
    arr.forEach(item => {
        const li: HTMLLIElement = document.createElement('li');
        li.textContent = String(item);
        ul.appendChild(li);
    });
    return ul;
};

const myList: HTMLUListElement = buildList([10, 'hello', true, false]);
document.body.appendChild(myList);
