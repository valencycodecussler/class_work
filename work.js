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
check_age();
//
//Question 2 
function get_balance(){
    return balance = 1000;// returns the balance 
}

function apply_interest(interest_percentage,amount){

   let interest_applied= amount+(amount* interest_percentage/100);
   return interest_applied;
}
console.log(apply_interest(10,get_balance()))

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
add_values()