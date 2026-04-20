const items: string[] = ['Main','Products','About us','Contacts'];

const ul: HTMLUListElement = document.createElement("ul");

items.forEach(text => {
    const li: HTMLLIElement = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
});

document.body.appendChild(ul);
