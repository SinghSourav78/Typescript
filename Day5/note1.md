# 🔹 Tumhara Code
type ChaiOrder = {
    type: string,
    sugar: number
}
🔹 Ye kya hai?

👉 Ye ek custom type bana rahe ho TypeScript me
👉 Iska naam hai: ChaiOrder

👉 Matlab:
“Ek chai order ka structure define kar rahe ho”

🔹 Andar kya define kiya?
{
  type: string,
  sugar: number
}

👉 Iska matlab:
| Property | Type   | Meaning                            |
| -------- | ------ | ---------------------------------- |
| type     | string | chai ka type (jaise adrak, masala) |
| sugar    | number | kitni chini (e.g. 1, 2 spoon)      |


🔹 Use kaise karte hain?
let order1: ChaiOrder = {
  type: "masala",
  sugar: 2
};

👉 Ye bilkul valid hai ✅

❌ Galat example
let order2: ChaiOrder = {
  type: "adrak",
  sugar: "2"
};

👉 Error ❌
👉 Kyunki sugar number hona chahiye, string nahi

🔹 Ek aur error case
let order3: ChaiOrder = {
  type: "green tea"
};

👉 Error ❌
👉 Kyunki sugar missing hai

🔥 Real life samajh lo

👉 Ye ek template / blueprint hai
👉 Jaise form fill karna hota hai:

type = compulsory
sugar = compulsory
🔹 Function me use
function prepareChai(order: ChaiOrder) {
  console.log(`Making ${order.type} chai with ${order.sugar} spoons of sugar`);
}

👉 Isse ensure hota hai ki correct data hi aaye

🔹 Interface vs Type (short)
interface ChaiOrder {
  type: string;
  sugar: number;
}

👉 Same kaam karta hai
👉 React me dono use hote hain

🔥 Final ek line me

👉 type ChaiOrder ek structure define karta hai jisme chai order ke required fields (type aur sugar) fix hote hain

type ChaiOrder = {
    type: string,
    sugar: number
}

let order1: ChaiOrder = {
  type: "masala",
  sugar: 2
};

console.log(order1);


# ******************************************************************

type ChaiOrder = {
    type: string,
    sugar: number
}

let order1: ChaiOrder = {
  type: "masala",
  sugar: 2
};

console.log(order1);

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === 'object' && 
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}

console.log(isChaiOrder(order1)); 

*********************************************************************************
type MasalaChai = {
    type: 'masala',
    spiceLevel: number
}


type GingerChai = {
    type: 'ginger',
    amount: number
}


type ElaichiChai = {
    type: 'elaichi',
    aroma: string
}


type Chai = MasalaChai | GingerChai | ElaichiChai;

let myChai: Chai = {
    type: 'masala',
    spiceLevel: 5
}

function MakeChai(order: Chai) {
    switch(order.type) {
        case 'masala':
            return `Masala chai`
            break;
        case 'ginger':
            return `Ginger chai`
            break;
        case 'elaichi':
            return `Elaichi chai`
            break;
    }
}

console.log(MakeChai(myChai));

*************************************************************************************

type MasalaChai = {
    type: 'masala',
    spiceLevel: number
}


type GingerChai = {
    type: 'ginger',
    amount: number
}


type ElaichiChai = {
    type: 'elaichi',
    aroma: string
}


type Chai = MasalaChai | GingerChai | ElaichiChai;

let myChai: Chai = {
    type: 'masala',
    spiceLevel: 5
}

function MakeChai(order: Chai) {
    switch(order.type) {
        case 'masala':
            return `Masala chai`
            break;
        case 'ginger':
            return `Ginger chai`
            break;
        case 'elaichi':
            return `Elaichi chai`
            break;
    }
}

console.log(MakeChai(myChai));

function brew(order: MasalaChai | GingerChai ) {
    if("spiceLevel" in order) {
        return `Brewing masala chai with spice level ${order.spiceLevel}...`
    }
}


console.log(brew(myChai));

*******************************************************************************
🔥 Scenario: API se list aa rahi hai

मान लो backend से categories (strings) की list आनी चाहिए:

let apiResponse: unknown = ["electronics", "clothes", "shoes"];

👉 लेकिन problem:

TypeScript को नहीं पता ये सच में string[] है या नहीं ❌
क्योंकि type = unknown
❌ Direct use (danger)
apiResponse.map(item => item.toUpperCase()); // ❌ error

👉 TypeScript बोलेगा:

“मुझे नहीं पता ये array है या नहीं”

✅ Type Guard banate hain
function isStringArray(arr: unknown): arr is string[] {
  return (
    Array.isArray(arr) &&
    arr.every(item => typeof item === "string")
  );
}
🔥 Ab safe use
if (isStringArray(apiResponse)) {
  const upperData = apiResponse.map(item => item.toUpperCase());
  console.log(upperData);
} else {
  console.log("Invalid API data");
}
🔹 Ab samjho kya benefit mila
❌ Pehle
apiResponse = unknown ❓

👉 kuch bhi ho sakta tha → unsafe

✅ Baad me
if (isStringArray(apiResponse))

👉 TypeScript samajh gaya:

apiResponse = string[] ✅

👉 Ab:

.map() safe
.toUpperCase() safe
koi crash nahi
🔥 Galat data case (real power)
let apiResponse: unknown = ["electronics", 123, "shoes"];

👉 Mixed data ❌

if (isStringArray(apiResponse)) {
  // ye run hi nahi hoga
} else {
  console.log("Data galat hai"); // ✅ handle ho gaya
}

👉 App crash nahi hua
👉 Tumne safe handle kar liya

🔥 Real project me use

👉 React me:

useEffect(() => {
  fetchData().then((res: unknown) => {
    if (isStringArray(res)) {
      setCategories(res); // ✅ safe
    }
  });
}, []);
🔥 Final samajh (gold line)

👉 Type guard ka use karke tum “unknown API data” ko “trusted string array” bana dete ho