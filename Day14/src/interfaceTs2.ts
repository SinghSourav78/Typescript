type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order: ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}

interface TeaRecipe {
    water: number;
    milk: number;

}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

interface CupSize {
    size: "small" | "large";
}


class Chai implements CupSize {
    size: "small" | "large" = "large";
}


// ye error de raha , but interface bana denge to ye error nahi dega, kyunki interface ke andar humne size property ko define kar diya hai aur uska type bhi define kar diya hai, isliye class Chai ko implement karne me koi problem nahi aayegi

// type Response = {ok : true} | {ok : false}
// class myRes implements Response {
    // ok : boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType){
    console.log(`Ordering ${t} chai`);
}

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChaiOrder = BaseChai & Extra

const cup: MasalaChaiOrder = {
    teaLeaves: 2,
    masala: 1
} 

type User = {
    username : string;
    bio?: string
}

const u1: User = {username: "Hitesh"}
const u2: User = {username: "Hitesh", bio:"hitesh.ai"}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName : "Masterji",
    version : 1
}

// cfg.appName = "ChaiCode"
// ye error ku de raha h
