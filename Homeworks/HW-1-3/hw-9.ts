type User = {
    id: number;
    name: string;
    age: number;
};

const Users = (users: User[]): void => {
    users.forEach(user => {
        const div: HTMLDivElement = document.createElement('div');
        div.innerHTML = `
            <p>ID: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <p>Age: ${user.age}</p>
        `;
        document.body.appendChild(div);
    });
};

const people: User[] = [
    { id: 1, name: 'Olya', age: 25 },
    { id: 2, name: 'Vanya', age: 30 },
    { id: 3, name: 'Katya', age: 22 }
];

Users(people);
