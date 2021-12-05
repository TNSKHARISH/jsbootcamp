let temp = 165
// && ---> logical AND . True if both sides are true . false otherwise
if(temp>=65 && temp<=90)
console.log('You can go outside')
if(temp<=0 || temp>90)
console.log("It's dangerous . Dont Go Outside")
// Challenge Area
let isGuestOneVegan=true
let isGuestTwoVegan=false
if(isGuestOneVegan&&isGuestTwoVegan)
console.log('Only Offer up Vegan Dishes')
else if(isGuestOneVegan||isGuestTwoVegan)
console.log('Make Sure you offer up some Vegan options')
else 
console.log(" Offer what are all on the menu ")