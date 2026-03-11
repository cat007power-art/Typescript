
type Author= {name:string, age: number};
type Book_1= {
    title:string,
    pageCount:number,
    genre:string,
    authors: {name:string, age:number} []
};

let book_1: Book_1 ={
    title:'def',
    pageCount:200,
    genre: 'detective',
    authors:[
        {
            name:"Oleg",
            age:40
        },
        {
        name:"Vasya",
        age:29}]
}

