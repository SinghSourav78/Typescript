let drink = "lemonade";
// drink = 5; // Error: Type 'number' is not assignable to type 'string'.
// 5 denge to error aayega kyunki drink variable ko string type ke liye declare kiya gaya hai. TypeScript mein, ek variable ko ek specific type ke saath declare karna hota hai, aur us type ke alawa koi aur value assign karne par error aata hai. Is case mein, drink variable ko string type ke liye declare kiya gaya hai, isliye usme number value assign karne par error aayega.

// ye almost javascript ke jitne bhi default datatype h subko ye support karta hai. Jaise ki string, number, boolean, array, tuple, enum, any, void, null, undefined, never, object etc. TypeScript mein hum in sabhi types ka use kar sakte hain apne code mein. Isse hum apne code ko zyada robust aur error-free bana sakte hain.

let cups = Math.random() > 0.5 ? 10 : 5;
// ye automatically smjh jaata h ki cubs ke under kon sa value aane wala h , cubs ke pass mouse lejakr highlight karne par uska type number aayega.


// ab ineresting mein 5 ko string kr leta hu

let cups2 = Math.random() > 0.5 ? 10 : "5";
// is case mein cups2 variable ka type string | number ho jayega, kyunki usme dono types ke values assign ho sakti hain. TypeScript automatically union type create kar deta hai jab ek variable mein multiple types ke values assign kiye jate hain. Isliye cups2 variable ka type string | number hoga, jo ki dono types ko represent karta hai.

// jitne bhi javascript ke default datatypes h unko ye apne aap smjh jaata h, aur agar hum usme alag type ki value assign karne ki koshish karte hain to error aata hai. Isse hum apne code ko zyada safe aur error-free bana sakte hain. TypeScript ke type system ke wajah se hum apne code mein bugs ko pehle hi pakad sakte hain, aur apne code ko maintainable bana sakte hain.

let chaiFlavour : string = "masala chai";
chaiFlavour = "ginger chai"; // valid
// chaiFlavour = 5; // Error: Type 'number' is not assignable to type 'string'.
// chaiFlavour variable ko string type ke liye declare kiya gaya hai, isliye usme number value assign karne par error aayega. TypeScript mein, ek variable ko ek specific type ke saath declare karna hota hai, aur us type ke alawa koi aur value assign karne par error aata hai. Is case mein, chaiFlavour variable ko string type ke liye declare kiya gaya hai, isliye usme number value assign karne par error aayega.