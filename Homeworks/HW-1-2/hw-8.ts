function displayUsers(usersArray: any[]): void {
    for (const user of usersArray) {
        document.write(`
            <div class="user-block">
                <h2>ID: ${user.id}</h2>
                <p>Name: ${user.name}</p>
                <p>Age: ${user.age}</p>
            </div>
        `);
    }
}
const users = [
    { id: 1, name: 'Olena', age: 25 },
    { id: 2, name: 'Taras', age: 32 },
    { id: 3, name: 'Ihor', age: 28 }
];

displayUsers(users);