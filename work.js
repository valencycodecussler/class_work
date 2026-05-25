//funciton/ Question 1



function check_age(age,balance){

        if (age >= 50) {
        balance = balance +(balance*30/100)
        console.log(balance)  
    } else if (age >= 45) {
            balance =balance + (balance*20/100);
            console.log(balance)  
    } else if (age >= 35) {
          balance =balance + (balance*15/100);
     console.log(balance)       
    }
    else if(age<=17){
        console.log('you are a minor')
    } 
    else{
        console.log('you are an adult')
    }
   
}
//check_age();
//
//Question 2 
function get_balance(){
    return balance = 1000;// returns the balance 
}

function apply_interest(interest_percentage,amount){

   let interest_applied= amount+(amount* interest_percentage/100);
   return interest_applied;
}
//console.log(apply_interest(10,get_balance()))

//Question 3 
function add_values(){
const cash_amounts = { "motheo": 10, "gerald": 20, "master": 15 };
let total = 0;

for (let key in cash_amounts) {
  if (cash_amounts.hasOwnProperty(key)) {
    total += cash_amounts[key];
  }
  console.log(total);
}
}
//add_values()
//21-05-2026 POP QUIZ 2

 let users = {user_1:{user_details:{
    name:"motheo",
    surname:""
 },account:{
    account_num:"",
    account_type:"",
    balance:2000,
    date: date = new Date()
 }},user_2:{user_details:{
    name:"master",
    surname:""
 },account:{
    account_num:"",
    account_type:"",
    balance:1000,
    date: date = new Date()
}}}
//console.log(users);

function divide(value){
return (users.user_1.account.balance / value)
}
function add(value){
return (users.user_1.account.balance + value)
}

function subtarct(value){
(users.user_1.account.balance - value)
}
function multiply(value){
(users.user_1.account.balance * value)
}
//console.log(add(1));
// for (const [key, value] of Object.entries(users)) {
//   //console.log(`User ID: ${key}, Name: ${value.account.balance}`);
//  }

//Quetsion 2
function gen_avg(){
    let total = (users.user_1.account.balance + users.user_2.account.balance);
    return total/2
}

//console.log(gen_avg());

function add_balance(){
let totalBalance = 0;

for (const userId in users) {
  totalBalance += users[userId].account.balance;
}
return console.log(totalBalance);
}
add_balance();
 
//3
function highest_lowest(){
    if(users.user_1.account.balance>users.user_2.account.balance){
        console.log(`highest value is ${JSON.stringify(users.user_1)}`)
    }
    else{
        console.log(`lowest value is ${JSON.stringify(users.user_2)}`)
    }
}
//highest_lowest()
