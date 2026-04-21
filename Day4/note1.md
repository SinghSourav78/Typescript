# 🔹 Tumhara Code
let apiRequestStatus: "success" | "error" | "pending" = "pending";

console.log("API Request Status: ", apiRequestStatus);
🔹 Step-by-Step Explanation
✅ 1. Variable declare kar rahe ho
let apiRequestStatus

👉 Ye ek variable hai jisme tum API ka status store karoge

✅ 2. Ye sabse important part hai 👇
: "success" | "error" | "pending"

👉 Isko bolte hain Union Type (String Literal Type)

Matlab:
👉 Ye variable sirf 3 values hi le sakta hai:

"success"
"error"
"pending"

❌ Iske alawa kuch bhi assign nahi kar sakte

🔥 Example samjho
apiRequestStatus = "success";  // ✅ valid
apiRequestStatus = "error";    // ✅ valid
apiRequestStatus = "pending";  // ✅ valid

apiRequestStatus = "loading";  // ❌ error (allowed nahi hai)

👉 TypeScript turant error de dega agar galat value di

✅ 3. Initial value
= "pending";

👉 Starting me tumne status "pending" set kiya hai
👉 Usually API call ke start me status pending hota hai

✅ 4. Console output
console.log("API Request Status: ", apiRequestStatus);

👉 Output aayega:

API Request Status: pending
🔹 Real Life Use (🔥 Important)

Maan lo tum API call kar rahe ho:

let apiRequestStatus: "success" | "error" | "pending" = "pending";

// API call start
apiRequestStatus = "pending";

// API success
apiRequestStatus = "success";

// API fail
apiRequestStatus = "error";

👉 Ye use hota hai:

Loading show karne me
Error handling me
UI control karne me
🔹 React me use (🔥 Interview level)
const [status, setStatus] = useState<"success" | "error" | "pending">("pending");

👉 Isse tum safe state manage karte ho

🔥 Final samajh lo ek line me

👉 Ye code ek variable banata hai jo sirf fixed values le sakta hai — isse bugs kam hote hain

# 🔹 Tumhara Code
const orders = ['12', '34', '56', '78'];

orders[4] = 24;

console.log(orders);
🔹 Problem kya hai?

👉 Tumne array banaya hai:

['12', '34', '56', '78']

👉 Is array ke sab elements string type ke hain

TypeScript automatically infer karta hai:

const orders: string[]
❌ Error wali line
orders[4] = 24;

👉 Yahan tum number (24) assign kar rahe ho
👉 But array ka type hai string[]

👉 Isliye TypeScript bolega:

Type 'number' is not assignable to type 'string'
🔥 Simple samajh lo

👉 orders = string array
👉 Tum usme number daal rahe ho ❌

🔹 Ek aur hidden baat (index bhi samjho)

Array:

['12', '34', '56', '78']

Index:

0 → '12'
1 → '34'
2 → '56'
3 → '78'

👉 Tum orders[4] use kar rahe ho
👉 Ye new position hai (5th element)

JavaScript me allowed hai ✅
But TypeScript me type mismatch ho raha hai ❌

🔹 Fix kaise kare?
✅ Option 1: string hi use karo
orders[4] = '24'; // ✅ correct
✅ Option 2: mixed type allow karo (not recommended usually)
const orders: (string | number)[] = ['12', '34', '56', '78'];

orders[4] = 24; // ✅
✅ Option 3: number array use karo
const orders: number[] = [12, 34, 56, 78];
orders[4] = 24;
🔥 Interview level insight

👉 TypeScript ka main kaam:

Galat data type ko rokna
Bugs ko pehle hi pakadna

👉 Agar ye TypeScript na hota, to JavaScript silently allow kar deta:

['12', '34', '56', '78', 24] // mixed array 😬
🔹 Final ek line me

👉 Error isliye aa raha hai kyunki tum string array me number insert kar rahe ho