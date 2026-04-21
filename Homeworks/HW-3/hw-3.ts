async function foobar<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Помилка запиту: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

interface UsersResponse {
    users: User[];
}

foobar<UsersResponse>("https://dummyjson.com/users")
    .then((data) => {
        console.log(data.users);
    })
    .catch((err) => console.error(err));
