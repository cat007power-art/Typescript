const sessionsListStr: string | null = localStorage.getItem("sessionsList");
const sessionsList: string[] = sessionsListStr ? JSON.parse(sessionsListStr) : [];

const listElement = document.getElementById("sessions") as HTMLUListElement | null;

if (listElement) {
    sessionsList.forEach((session: string) => {
        const li: HTMLLIElement = document.createElement("li");
        li.textContent = session;
        listElement.appendChild(li);
    });
}