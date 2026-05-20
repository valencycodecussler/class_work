
//1.) Create a function that test if someone is an adult. is they are 35 applt a 10% increase on whaterever balance they have. if they are 45 15%. if they are 50 or older they get a 30% on the interest.

let adultFunct = function(age,deposit){
    let rate;
    if (age===35){
        rate = 0.10;}
    else if(age===45){
        rate = 0.15
}
else if(age > 50){
    rate ===0.30
}
let interest = rate * deposit;
let NewBalance = interest + deposit;
console.log("Interest: "+ interest);
console.log("NewBalance:"+ NewBalance);
};
//adultFunct(45,57700);


//2.) Create a function that takes another function as a param.(You have to create a function named {get balance} that function must be passed as a param to another one )

// let GetBalance = function(num1,num2){
//     console.log(num1 + num2);
// };
// (GetBalance(23,56));

// let DisplayBalance = function(){
 
// }


//3)Create a function that constanly adds the values of a group of objects and returns the total.
let Iterator = function(){
    let MyArray = [20,25,60,10,35,46,19];
    let total = 0;
    for (let i = 0; i < MyArray.length;i++){
        total = total + MyArray[i];
    }
    return total;
};
console.log("Total:"+ Iterator());


//4) create a simple for loop.
 for (let i = 0; i < 5; i++){
    console.log("Iteration number:" +i)
 }