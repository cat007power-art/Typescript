interface Course {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
}

const coursesArray: Course[] = [
    {
        title: "JavaScript Complex",
        monthDuration: 5,
        hourDuration: 909,
        modules: ["html","css","js","mysql","mongodb","react","angular","aws","docker","git","node.js"]
    },
    {
        title: "Java Complex",
        monthDuration: 6,
        hourDuration: 909,
        modules: ["html","css","js","mysql","mongodb","angular","aws","docker","git","java core","java advanced"]
    },
    {
        title: "Python Complex",
        monthDuration: 6,
        hourDuration: 909,
        modules: ["html","css","js","mysql","mongodb","angular","aws","docker","python core","python advanced"]
    },
    {
        title: "QA Complex",
        monthDuration: 4,
        hourDuration: 909,
        modules: ["html","css","js","mysql","mongodb","git","QA/QC"]
    },
    {
        title: "FullStack",
        monthDuration: 7,
        hourDuration: 909,
        modules: ["html","css","js","mysql","mongodb","react","angular","aws","docker","git","node.js","python","java"]
    },
    {
        title: "Frontend",
        monthDuration: 4,
        hourDuration: 909,
        modules: ["html","css","js","mysql","mongodb","react","angular","aws","docker","git","sass"]
    }
];

const container: HTMLElement | null = document.getElementById("courses-container");

if (container) {
    coursesArray.forEach((course: Course) => {
        const courseBlock: HTMLDivElement = document.createElement("div");
        courseBlock.className = "course";
        // -------- title ----------
        const titleBlock: HTMLDivElement = document.createElement("div");
        titleBlock.className = "title";
        titleBlock.innerText = course.title;
        courseBlock.appendChild(titleBlock);

        // -------- durations ----------
        const durationsBlock: HTMLDivElement = document.createElement("div");
        durationsBlock.className = "durations";

        const monthBlock: HTMLDivElement = document.createElement("div");
        monthBlock.className = "duration";
        monthBlock.innerText = `Month: ${course.monthDuration}`;
        durationsBlock.appendChild(monthBlock);

        const hourBlock: HTMLDivElement = document.createElement("div");
        hourBlock.className = "duration";
        hourBlock.innerText = `Hours: ${course.hourDuration}`;
        durationsBlock.appendChild(hourBlock);

        courseBlock.appendChild(durationsBlock);

        // -------- modules ----------
        const modulesBlock: HTMLDivElement = document.createElement("div");
        modulesBlock.className = "modules";

        const ul: HTMLUListElement = document.createElement("ul");
        course.modules.forEach((m: string) => {
            const li: HTMLLIElement = document.createElement("li");
            li.innerText = m;
            ul.appendChild(li);
        });
        modulesBlock.appendChild(ul);
        courseBlock.appendChild(modulesBlock);

        container.appendChild(courseBlock);
    });
}
