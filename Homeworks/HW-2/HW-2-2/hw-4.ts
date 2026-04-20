const kgInput = document.getElementById("kgInput") as HTMLInputElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

kgInput.addEventListener("input", () => {
    const kg: number = parseFloat(kgInput.value);

    if (!isNaN(kg)) {
        const pounds: string = (kg * 2.20462).toFixed(2);
        resultDiv.textContent = `${kg} кг = ${pounds} фунтів`;
    } else {
        resultDiv.textContent = "";
    }
});