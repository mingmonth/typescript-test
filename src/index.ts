class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("lynn", 23, "female");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, your are a ${person.gender}!`
};

const abc = sayHi(lynn);
console.log(abc)

export {};    
