interface Driver {
    name: string;
    age: number;
    experience: string;
}

class Car {
    constructor(
        public model: string,
        public manufacturer: string,
        public year: number,
        public maxSpeed: number,
        public engineCapacity: string,
        public driver?: Driver
    ) {}

    drive(): void {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }

    info(): void {
        console.log(`Модель – ${this.model}`);
        console.log(`Виробник – ${this.manufacturer}`);
        console.log(`Рік випуску – ${this.year}`);
        console.log(`Максимальна швидкість – ${this.maxSpeed}`);
        console.log(`Об’єм двигуна – ${this.engineCapacity}`);
        if (this.driver) {
            console.log(`Водій – ${JSON.stringify(this.driver)}`);
        }
    }

    increaseMaxSpeed(newSpeed: number): void {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue: number): void {
        this.year = newValue;
    }

    addDriver(driver: Driver): void {
        this.driver = driver;
    }
}

const myCar = new Car("Model S", "Tesla", 2020, 250, "100 kWh");

myCar.drive();
myCar.info();

myCar.increaseMaxSpeed(30);
myCar.drive();

myCar.changeYear(2022);
myCar.info();

myCar.addDriver({ name: "Ivan", age: 30, experience: "5 років" });
myCar.info();