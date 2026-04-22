function makeChai(type: string, cups: number){
    console.log(`Making ${type} chai with ${cups} cups of water.`);
}

makeChai("masala", 2);

function getChaiPrice():number{
    return 50;
}

function makeOrder(order: string){
    if(!order) return null;
    return order;
}

function logChai() : void {
    console.log("Chai is being made.");
}

// function orderChai(type?: string){
//  
// }

function orderChai(type: string = "Masala"){
    
}

function createChai(order: {
    tyep: string;
    sugar: number;
    size: "small" | "large";
}) : number {
    return 100;
}