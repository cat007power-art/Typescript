function exchange(sumUAH:number, currencyValues:{currency: string, value: number}[], exchangeCurrency:string):number {
    const currencyObj = currencyValues.find(
        item => item.currency === exchangeCurrency
    );
    if (currencyObj) {
        return sumUAH / currencyObj.value;
    }
    return -1;
}
console.log(
    exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD')
);
