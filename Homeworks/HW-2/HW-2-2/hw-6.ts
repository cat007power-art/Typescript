const generateButton = document.getElementById("generate") as HTMLButtonElement;
const rowsInput = document.getElementById("rows") as HTMLInputElement;
const cellsInput = document.getElementById("cells") as HTMLInputElement;
const contentInput = document.getElementById("content") as HTMLInputElement;
const container = document.getElementById("tableContainer") as HTMLDivElement;

generateButton.addEventListener("click", () => {
    const rows: number = parseInt(rowsInput.value, 10);
    const cells: number = parseInt(cellsInput.value, 10);
    const content: string = contentInput.value;

    const table: HTMLTableElement = document.createElement("table");

    for (let i = 0; i < rows; i++) {
        const tr: HTMLTableRowElement = document.createElement("tr");
        for (let j = 0; j < cells; j++) {
            const td: HTMLTableCellElement = document.createElement("td");
            td.textContent = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    container.innerHTML = "";
    container.appendChild(table);
});