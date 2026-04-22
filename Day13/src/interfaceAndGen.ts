// interface ka jo main goal h object ko shape dena h uske liye use hota h ye fir hamare data ko shape dena

interface Chai {
    flavor: string;
    price: number;
    milk?: boolean; // optional property
}

const masala: Chai = {
    flavor: "masala",
    price: 30
}

interface Shop {
    readonly id: number; // readonly property
    name: string;
}

const s : Shop = {
    id: 1,
    name: "ChaiCode coffe"

}
 s.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

interface DiscountCalulator {
    (price: number): number; // function type interface

}

const apply50: DiscountCalulator = (price) => price * 0.5;

interface TeaMachine {
    start(price: number): void;
    stop(): void;
}

const machine: TeaMachine = {
    start() {
        console.log("Machine started");
    },
    stop() {
        console.log("Machine stopped");
    }
}


interface ChaiRatings {
    [flavor: string]: number; // index signature    

}

const ratings: ChaiRatings = {
    masala: 5,
    ginger: 4,
    lemon: 3
}

// Merging interfaces
interface User {
    name: string;
}

interface User {
    age: number;
}

const u: User = {
    name: "John",
    age: 30
}

// Extending interfaces
interface A {a: string}
interface B {b: string}

interface C extends A, B {
    
}
