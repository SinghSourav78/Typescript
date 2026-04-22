function wrapInArray<T>(item: T): T[] {
    return [item];
}

wrapInArray("malasa"); // returns ["malasa"]
wrapInArray(42); // returns [42]
wrapInArray({ name: "Alice", age: 30 }); // returns [{ name: "Alice", age: 30 }]

function pair<A, B>(a: A, b: B): [A, B] {
    return [a,b];

}

pair("masala", 5); // returns ["masala", 5]
pair("masala", "ginger"); // returns ["masala", "ginger"]
pair("masala", { flavor: "spicy" }); // returns ["masala", { flavor: "spicy" }]

interface Box<T> {
    content: T
}

const numberBox: Box<number> = { content: 10 };
const numberBoxCup: Box<string> = { content: "chai" };

interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}

}

