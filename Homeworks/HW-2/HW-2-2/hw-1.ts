const submitButton = document.getElementById("submit-button") as HTMLButtonElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const surnameInput = document.getElementById("surname") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

submitButton.addEventListener("click", () => {
    const name: string = nameInput.value;
    const surname: string = surnameInput.value;
    const age: string = ageInput.value;

    resultDiv.textContent = `Ім'я: ${name}, Прізвище: ${surname}, Вік: ${age}`;
});