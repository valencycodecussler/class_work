const Users = {
    "UserOne":{
        "UserDetails":{
            "name":"John",
            "surname":"Smith"
        },
        "Accounts":{
            "AccType":"main",
            "Balance":1000,
            "date": today = new Date(),
        }

    },
    "UserTwo":{
        "UserDetails":{
            "name":"Henry",
            "surname":"Danger"
        },
        "Accounts":{
            "AccType":"main",
            "Balance":2000,
            "date": today = new Date(),
        }
}
}

Users.UserTwo.Accounts.date.getSeconds

let Add = function(value){
return value + Users.UserOne.Accounts.Balance;
};
console.log(Add(300));

let Subtract = function(value){
 return value - Users.UserOne.Accounts.Balance;
 };
 //console.log(Subtract(400));

 let Multiplication = function(value){
return value * Users.UserOne.Accounts.Balance;    
 };
 //console.log(Multiplication(3));

 let Division = function(value){
    return Users.UserOne.Accounts.Balance / value;
 };
 //console.log(Division(2));

 let BalanceAvg = function(){
    let average = Users.UserOne.Accounts.Balance + Users.UserTwo.Accounts.Balance;
    return average/2;
 };
 //console.log(BalanceAvg());

 let HighLowValues = function(){
 let array = [Users.UserOne.Accounts.Balance, Users.UserTwo.Accounts.Balance];
 if (Users.UserOne.Accounts.Balance > Users.UserTwo.Accounts.Balance){
    console.log(`Account Balance for user one is greater:${Users.UserOne.Accounts.Balance} `);
 }else if (Users.UserTwo.Accounts.Balance > Users.UserOne.Accounts.Balance){
    console.log(`Account Balance for user two is greater:${Users.UserTwo.Accounts.Balance} `);
 } else if (Users.UserOne.Accounts.Balance < Users.UserTwo.Accounts.Balance){
    console.log(`Minimum value is ${Users.UserOne.Accounts.Balance}`);
 }else if (Users.UserTwo.Accounts.Balance > Users.UserOne.Accounts.Balance){
    console.log(`Maximum value is${Users.UserTwo.Accounts.Balance}`);
 }
 }
 HighLowValues();
  
 
