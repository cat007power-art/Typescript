type CurrencyRate = {
    currency: string;
    value: number;
};

const exchange = (
    sumUAH: number,
    currencyValues: CurrencyRate[],
    exchangeCurrency: string
): number | null => {
    const rateObj = currencyValues.find(item => item.currency === exchangeCurrency);
    if (rateObj) {
        return sumUAH / rateObj.value;
    }
    return null;
};

const result: number | null = exchange(
    10000,
    [
        { currency: 'USD', value: 40 },
        { currency: 'EUR', value: 42 }
    ],
    'USD'
);

console.log(result);