// creating a Guest List Arry
let guestList = ["Uzair", "Jalees", "Qasir", "Yasir"];

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
//Inform that only two guests can be invidet for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");
//using while-loop to remove guests from the array until only two names remain
while(guestList.length > 2){
    let removedGuest = guestList.pop();
    console.log(`sorry, ${removedGuest} I cant invite you to dinner`);
}
//sanding ainvitation to the last  two guest on the list
console.log("invitations to the last 2 Guests");
guestList.forEach(lasttwo =>console.log(`Luckly ${lasttwo},you are still invited to dinner`));
// Removing last two Guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);


