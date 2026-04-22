class Chai {
    public flavor: string = "Masala";

    private secretIngredients = "Cardamon"

    reveal() {
        return this.secretIngredients; // This method can access the private property

    }

}

class Shop {
    protected shopName: string = "Chaiwala";
}

class Branch extends Shop {
    getName() {
        return this.shopName; // This method can access the protected property from the parent class
    }
}

class Walet{
    #balance = 100

    getBalance() {
        return this.#balance; // This method can access the private field
    }
}

const w = new Walet();

class Cup {
    readonly capacity: number = 250;

    constructor(capacity: number) {
        this.capacity = capacity; // This is allowed because we are initializing the readonly property in the constructor
    }
}

class ModerChai {
    private _sugar: number = 2

    get sugar() {
        return this._sugar; // This getter allows us to access the private property _sugar
    }

    set sugar(value: number) {
        if (value > 5) throw new Error("Too much sugar!"); // This setter allows us to set the private property _sugar with some validation

        this._sugar = value; 

    }
}


const d = new ModerChai();
d.sugar = 3; // This will call the setter and set _sugar to 3
console.log(d.sugar); // This will call the getter and return the value of _sugar, which is 3

// static properties and methods

class EkChai {
    static shopName: string = "Ek Chai";

    constructor(public flavor: string) {

    }
}

console.log(EkChai.shopName); // Accessing static property without creating an instance

// abstract classes

abstract class Drink {
    abstract make(): void; // This is an abstract method that must be implemented by any non-abstract subclass
}

class MyChai extends Drink {
    make(): void {
        console.log("Making a delicious chai!"); // This is the implementation of the abstract method
    }
}

class Heater {
    heat() {

    }
}

class ChaiMaker {
    constructor(private heater: Heater) { }// Dependency Injection: ChaiMaker depends on Heater, and we inject it through the constructor
    make() {
        this.heater.heat; // Using the injected Heater to heat the water for making chai
    }
}


