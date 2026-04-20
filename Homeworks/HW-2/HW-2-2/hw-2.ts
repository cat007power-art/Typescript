let countStr: string | null = localStorage.getItem("counter");
let count: number = countStr ? parseInt(countStr, 10) : 0;

count++;

localStorage.setItem("counter", count.toString());

const counterDiv = document.getElementById("counter") as HTMLDivElement | null;
if (counterDiv) {
    counterDiv.textContent = count.toString();
}