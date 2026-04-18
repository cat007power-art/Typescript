interface Client {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    order: string[];
}

class ClientClass implements Client {
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public email: string,
        public phone: string,
        public order: string[]
    ) {}

    getOrderCount(): number {
        return this.order.length;
    }
}

const clients: Client[] = [
    new ClientClass(1, 'Ivan', 'Petrenko', 'ivan.petrenko@example.com', '+380501234567', ['Laptop', 'Mouse']),
    new ClientClass(2, 'Olena', 'Shevchenko', 'olena.shevchenko@example.com', '+380671234567', ['Phone']),
    new ClientClass(3, 'Petya', 'Koval', 'petya.koval@example.com', '+380931234567', ['Tablet', 'Keyboard']),
    new ClientClass(4, 'Svitlana', 'Tkachenko', 'svitlana.tkachenko@example.com', '+380991234567', ['Monitor']),
    new ClientClass(5, 'Andriy', 'Bondarenko', 'andriy.bondarenko@example.com', '+380661234567', ['Smartwatch', 'Headphones']),
    new ClientClass(6, 'Oksana', 'Melnyk', 'oksana.melnyk@example.com', '+380731234567', ['Camera']),
    new ClientClass(7, 'Kolya', 'Kravchenko', 'kolya.kravchenko@example.com', '+380671111111', ['Printer', 'Scanner']),
    new ClientClass(8, 'Katya', 'Polishchuk', 'katya.polishchuk@example.com', '+380991111111', ['TV']),
    new ClientClass(9, 'Volodymyr', 'Lysenko', 'volodymyr.lysenko@example.com', '+380931111111', ['Router', 'SSD']),
    new ClientClass(10, 'Natalia', 'Danylenko', 'natalia.danylenko@example.com', '+380501111111', ['Microwave'])
];


clients.sort((a, b) => a.order.length - b.order.length);

console.table(clients);