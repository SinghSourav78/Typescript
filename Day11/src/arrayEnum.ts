const chaiFalours: string[] = ['chai', 'chai-as-promised', 'chai-http', 'chai-jquery', 'chai-sinon', 'chai-things', 'dirty-chai', 'sinon-chai'];

const chaiPrice: number[] = [80, 70, 60, 50, 40, 30, 20, 10];

const rating: Array<number> = [5, 4, 3, 2, 1];

type Chai = {
    name : string;
    price : number;
}

const menu: Chai[] = [
    { name: 'chai', price: 80 },
    { name: 'chai-as-promised', price: 70 },
    { name: 'chai-http', price: 60 },
]

const cities: readonly string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

// cities.push('Philadelphia'); // Error: Cannot add to a readonly array
// cities[0] = 'San Francisco'; // Error: Cannot assign to a readonly array element

const table: number [][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let chaiTuple: [string, number];
chaiTuple = ['chai', 80]; // Valid
// chaiTuple = [80, 'chai']; // Error: Type 'number' is not assignable to type 'string'
// chaiTuple = ['chai']; // Error: Source has 1 element(s) but target requires 2
// chaiTuple = ['chai', 80, 'extra']; // Error: Source has 3 element(s) but target allows only 2

let userInfo: [string, number, boolean?];
userInfo = ['Alice', 30]; // Valid
userInfo = ['Bob', 25, true]; // Valid
// userInfo = ['Charlie']; // Error: Source has 1 element(s) but target requires at least 2
// userInfo = ['Dave', 40, true, 'extra']; // Error: Source has 4 element(s) but target allows only 3

const location: readonly [number, number] = [40.7128, -74.0060]; // Latitude and Longitude of New York City
// location[0] = 34.0522; // Error: Cannot assign to a readonly array element
// location[1] = -118.2437; // Error: Cannot assign to a readonly array element

const chaiItems: [name:string, price:number] = ['chai', 80]; // Valid
// chaiItems = [80, 'chai']; // Error: Type 'number' is not assignable to type 'string'
// chaiItems = ['chai']; // Error: Source has 1 element(s) but target requires 2
// chaiItems = ['chai', 80, 'extra']; // Error: Source has 3 element(s) but target allows only 2

// Enums
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE; // size will be 2
const sizeName = CupSize[1]; // sizeName will be 'MEDIUM'

enum Status {
    PENDING = 100,
    SERVED, // eskso apne aap 101 assign krdega
    CANCELLED // eskso apne aap 102 assign krdega
}

enum ChaiType {
    MASALA = 'masala',
    GINGER = 'ginger',

}

function makeChai(type: ChaiType){
    console.log(`Making a cup of ${type} chai.`);
}


makeChai(ChaiType.MASALA); // Output: Making a cup of masala chai.
makeChai(ChaiType.GINGER); // Output: Making a cup of ginger chai.

enum RandomEnum {
    ID = 1,
    NAME = 'John',
}


const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.MEDIUM; // s will be 2, but in the compiled JavaScript, it will be replaced with the value 2 directly, without any reference to the enum.

let t: [string, number] = ['chai', 80]; // Valid
t.push("extra")