function cloner<T extends object>(obj: T): T {
    if (obj) {
        type FuncEntry = { functionClone: Function; key: keyof T };
        const functions: FuncEntry[] = [];

        for (const key in obj) {
            const value = obj[key];
            if (typeof value === "function") {
                const functionClone = value.bind({});
                functions.push({ functionClone, key });
            }
        }

        const cloneObj: T = JSON.parse(JSON.stringify(obj));

        for (const func of functions) {
            (cloneObj as any)[func.key] = func.functionClone;
        }

        return cloneObj;
    }
    throw new Error("!!!");
}

const original = {
    name: "Test",
    greet() {
        console.log(`Hello, ${this.name}`);
    },
};

const copy = cloner(original);
copy.greet();