interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
}

class UserClass implements User {
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public email: string,
        public phone: string
    ) {}
}

const users: User[] = [];

users.push(new UserClass(1, 'Ivan', 'Petrenko', 'ivan.petrenko@example.com', '+380501234567'));
users.push(new UserClass(2, 'Olena', 'Shevchenko', 'olena.shevchenko@example.com', '+380671234567'));
users.push(new UserClass(3, 'Petya', 'Koval', 'petya.koval@example.com', '+380931234567'));
users.push(new UserClass(4, 'Svitlana', 'Tkachenko', 'svitlana.tkachenko@example.com', '+380991234567'));
users.push(new UserClass(5, 'Andriy', 'Bondarenko', 'andriy.bondarenko@example.com', '+380661234567'));
users.push(new UserClass(6, 'Oksana', 'Melnyk', 'oksana.melnyk@example.com', '+380731234567'));
users.push(new UserClass(7, 'Kolya', 'Kravchenko', 'kolya.kravchenko@example.com', '+380671111111'));
users.push(new UserClass(8, 'Katya', 'Polishchuk', 'katya.polishchuk@example.com', '+380991111111'));
users.push(new UserClass(9, 'Volodymyr', 'Lysenko', 'volodymyr.lysenko@example.com', '+380931111111'));
users.push(new UserClass(10, 'Natalia', 'Danylenko', 'natalia.danylenko@example.com', '+380501111111'));

console.log(users);