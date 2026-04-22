const chai = {
    name : "Masala Chai",
    price : 20,
    isHot : true
}

let tea : {
    name : string;
    price : number;
    isHot : boolean;
}

tea = {
    name : "Green Tea",
    price : 15,
    isHot : true
}

// Alliging Objects
type Tea = {
    name : string;
    price : number;
    ingredients : string[];
}

const adrakChai: Tea = {
    name : "Adrak Chai",
    price : 25,
    ingredients : ["Tea Leaves", "Water", "Milk", "Sugar", "Ginger"]
}

type Cup = {size : string};
let smallCup: Cup = {size : "200ml"};

let bigCup = {size : "500ml", material: "steel"}

smallCup = bigCup; // This is allowed because smallCup only requires the 'size' property, which bigCup has. The 'material' property in bigCup is ignored.

// bigCup = smallCup; // This would cause an error because bigCup expects a 'material' property that smallCup does not have.

type Brew = { BrewTime : number };
const coffee = {brewTime : 5, beans : "Arabica"};
const chaiBrew:Brew = coffee; // This is allowed because the property names are case-sensitive, and 'brewTime' in coffee does not match 'BrewTime' in Brew. Therefore, chaiBrew will only have the 'BrewTime' property, which is not present in coffee, but it does not cause an error because TypeScript allows extra properties in object literals when assigning to a type.

type User = {
    username : string;
    password : string;
}

const u: User = {
    username : "chaicode",
    // agar password property ko hata diya jaye to TypeScript error dega kyunki User type ke hisab se password property required hai.
    password : "securepassword123"
}

type Item = {name: string, quantity: number};
type Address = {street: string, pin: number};

type Order = {
    id: string;
    items: Item[];
    address: Address;
}

type Chai = {
    name : string;
    price : number;
    isHot : boolean;
    
}

const updatedChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with the following properties:", updates);
}

updatedChai({price: 30}); // This will update only the price of the chai, while other properties remain unchanged.
updatedChai({isHot: false}); // This will update only the isHot property of the chai, while other properties remain unchanged.
updatedChai({}); // This will not update any properties of the chai, as an empty object is passed.

type ChaiOrder = {
    name?: string;
    quantity?: number;

}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
    
} 

// placeOrder({}); // This will cause a TypeScript error because the Required utility type makes all properties of ChaiOrder required, and an empty object does not satisfy that requirement.

// placeOrder({name: "Masala Chai"}); // This will cause a TypeScript error because the quantity property is required due to the Required utility type, and it is missing in this object.

placeOrder({name: "Masala Chai", quantity: 2}); // This will work correctly as both required properties are provided in the object.


type Chaitast = {
    name : string;
    price : number;
    isHot : boolean;
    ingredients : string[];
}

type BasicChaiInfo = Pick<Chaitast, "name" | "price">; 

const chaiInfo: BasicChaiInfo = {
    name : "Lemon tea",
    price : 18
}


type ChaiNew = {
    name : string;
    price : number;
    isHot : boolean;
    secretIngredients : string;
};

type PublicChaiInfo = Omit<Chai, "secretIngredients">;
 

