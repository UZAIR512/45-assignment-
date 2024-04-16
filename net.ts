// creating a Guest List Arry
let guestList1 = ["Uzair", "Jalees", "Qasir", "Yasir"];

// Making varibale for thos guest who cant come
let dontCome = guestList[0];

// print the name of Guest who cant come
console.log(dontCome, "Naii Ahh Sakty han");

// Add or Remove values from Guest List Arry
guestList.splice(0, 1, "Aman");

// Message Print for Bigger Table
console.log("Good News ! We have Foud a Bigger Table for Dinner");

// Adding a new value at starting index of
guestList.unshift("Ali")

// Adding a new value at ending index of arry
guestList.push("Zain");

// Get a middle index of our guest list arry
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of arry
guestList.splice(middleIndex, 0, "Akram");
//print Message of Updated List
console.log("update List of our Guests");
// Sending a invition message to our guests one by one with thier names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));




