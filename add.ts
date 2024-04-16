let userName = ["Uzair", "Yasir", "Qasir", "Jalees", "Admin", "Muswar"]

userName =[]
if(userName.length === 0){
console.log("Your Array in Empty We need to fiind some users!")
}else{
// Using ForEach Loop on Array
  userName.forEach(oneUser =>{
    if(oneUser === "Admin"){
   console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
      console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
}