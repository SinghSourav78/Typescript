let subs: string | number = 10;
// esko 10 number bhi accpect h or esko '100k' bhi esko accept h kyunki isme union type use kiya gaya hai. Union type ka matlab hota hai ki ek variable multiple types ke values ko accept kar sakta hai. Is case mein, subs variable string ya number dono types ke values ko accept kar sakta hai. Isliye subs variable ka type string | number hoga, jo ki dono types ko represent karta hai.

let apiRequestStatus: "success" | "error" | "pending" = "pending";
// is case mein apiRequestStatus variable ka type "success" | "error" | "pending" hoga, jo ki string literal types ko represent karta hai. Iska matlab hai ki apiRequestStatus variable sirf "success", "error", ya "pending" string values ko accept kar sakta hai. Agar hum apiRequestStatus variable ko kisi aur string value assign karne ki koshish karte hain, to error aayega. Isse hum apne code ko zyada safe aur error-free bana sakte hain, kyunki hum sirf specific string values ko allow kar rahe hain.

// apiRequestStatus = "completed"; // Error: Type '"completed"' is not assignable to type '"success" | "error" | "pending"'.
// kuki humne bola h apiRequestStatus variable ke sirf 3 hi datatypes ho sakte h "success", "error", ya "pending". Isliye apiRequestStatus variable ko "completed" string value assign karne par error aayega, kyunki "completed" string value apiRequestStatus variable ke allowed types mein nahi hai. TypeScript ke type system ke wajah se hum apne code mein bugs ko pehle hi pakad sakte hain, aur apne code ko maintainable bana sakte hain.

let airLineSeat: "window" | "aisle" | "middle" = "window"; // eskii value 3 ke alawa kuchh nae ho sakta h 

airLineSeat = "aisle"; // valid

const orders = ['12', '34', '56', '78'] 

// let currentOrder;
// esko currentOrder ko highlight karne par uska type any aayega, kyunki usme koi value assign nahi ki gayi hai. TypeScript mein, agar hum ek variable ko declare karte hain lekin usme koi value assign nahi karte hain, to uska type any ho jata hai. Iska matlab hai ki currentOrder variable kisi bhi type ke value ko accept kar sakta hai, aur isse hum apne code mein bugs ko pakadne mein madad milti hai.

let currentOrder: string | undefined; // is case mein currentOrder variable ka type string | undefined hoga, kyunki usme string type ke values assign ho sakti hain, ya phir usme koi value assign nahi ki gayi hai. TypeScript mein, agar hum ek variable ko declare karte hain lekin usme koi value assign nahi karte hain, to uska type undefined ho jata hai. Iska matlab hai ki currentOrder variable kisi bhi string value ko accept kar sakta hai, ya phir usme koi value assign nahi ki gayi hai. Isse hum apne code mein bugs ko pakadne mein madad milti hai, kyunki hum explicitly bata rahe hain ki currentOrder variable mein string type ke values assign ho sakti hain, ya phir usme koi value assign nahi ki gayi hai.


for(let order of orders) {
    if(order === '34') {
        currentOrder = order;
        break;
    }
}

console.log(currentOrder); // Output: '34'