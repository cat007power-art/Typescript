interface Course {
    title: string;
    monthDuration: number;
}

const coursesAndDurationArray: Course[] = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

const sortDescending: Course[] = [...coursesAndDurationArray].sort(
    (a, b) => b.monthDuration - a.monthDuration
);

const filtered: Course[] = sortDescending.filter(course => course.monthDuration > 5);

const mapped = filtered.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));

console.log(mapped);
