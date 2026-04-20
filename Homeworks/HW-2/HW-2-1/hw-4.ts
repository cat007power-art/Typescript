interface Course {
    title: string;
    monthDuration: number;
}

const coursesAndDurationArray: Course[] = [
    { title: "JavaScript Complex", monthDuration: 5 },
    { title: "Java Complex", monthDuration: 6 },
    { title: "Python Complex", monthDuration: 6 },
    { title: "QA Complex", monthDuration: 4 },
    { title: "FullStack", monthDuration: 7 },
    { title: "Frontend", monthDuration: 4 },
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const course: Course = coursesAndDurationArray[i];

    const div: HTMLDivElement = document.createElement("div");
    div.classList.add("item");

    const h1: HTMLHeadingElement = document.createElement("h1");
    h1.classList.add("heading");
    h1.textContent = course.title;

    const p: HTMLParagraphElement = document.createElement("p");
    p.classList.add("description");
    p.textContent = `Тривалість: ${course.monthDuration} місяців`;

    div.appendChild(h1);
    div.appendChild(p);

    document.body.appendChild(div);
}