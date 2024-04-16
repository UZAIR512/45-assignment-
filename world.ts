//Making a Array of countries and print its Orginal Order
let countriesToVisit: string[] = ["china", "Denmark", "Brazil", "Argentina"];
console.log("Orginal Order:", countriesToVisit);

//print the Array in Alphabetical order without modifying the Actual Arry List
console.log("Alphabetical order:",[...countriesToVisit].sort());

// show that the array is still in its Orginal order
console.log("still in orginal Order:",countriesToVisit);

// print the Array in Reversed Order without modifying the ACtual Arry List 
console.log("Reverse Order:", [...countriesToVisit].reverse());

// show that the array is still in its Orginal order
console.log("still in orginal Order:",countriesToVisit);

// we have Changed the Orginal Array Order Now 
console.log("Orginal Arry Reversed:",countriesToVisit.reverse());

// print the array to show that it's back to its orginal order
console.log("Back to Orginal Order:", countriesToVisit.reverse());

// print the array to show that its order has been changed in Alphabetical order now  
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// we have Changed the Orginal Array Order Now in reverse order again
console.log("Orginal Arry Reversed Again:",countriesToVisit.reverse());



