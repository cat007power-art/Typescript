const sessionsListStr: string | null = localStorage.getItem("sessionsList");
const sessionsList: string[] = sessionsListStr ? JSON.parse(sessionsListStr) : [];

const now: Date = new Date();
sessionsList.push(now.toLocaleString());

localStorage.setItem("sessionsList", JSON.stringify(sessionsList));