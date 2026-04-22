class Chai {
    flavor: string;
    price: number;

    constructor(flavor: string, price: number) {
        this.flavor = flavor;
        this.price = price;
        console.log(this); // This refer to the new Object created by the constructor
    }  

}

const masalaChai = new Chai("Ginger", 10);
masalaChai.flavor = "Masala";

