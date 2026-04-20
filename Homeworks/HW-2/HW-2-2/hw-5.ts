function addToLocalStorage<T extends object>(arrayName: string, objToAdd: T): void {
    const arrStr: string | null = localStorage.getItem(arrayName);
    let arr: T[] = arrStr ? JSON.parse(arrStr) : [];

    arr.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(arr));
}

// приклад використання
addToLocalStorage("users", { name: "Саша", age: 30 });
addToLocalStorage("users", { name: "Вася", age: 40 });

const usersStr: string | null = localStorage.getItem("users");
const users: { name: string; age: number }[] = usersStr ? JSON.parse(usersStr) : [];

console.log(users);
