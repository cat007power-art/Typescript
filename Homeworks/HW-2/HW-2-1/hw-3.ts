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
    div.classList.add("course-block");

    div.textContent = `Title: ${course.title}, Duration: ${course.monthDuration} months`;

    document.body.appendChild(div);
}
