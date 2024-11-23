const accountId = 151455
let accountEmail = "Saba@google.com"   // let is local variable within scope only so use let instead of var
var accountPassword = "125956+"
accountCity = "HARYANA"
let accountState; ///print undefined if you dont assign any value 


//Now lets try to change the Const variable value  and thn do comsole.log
//accountId = 2 // while doing this to change const variable u will error : 'Assignment to constant variable.'....const variable is not modifiable so comment it and then run
console.log(accountId);

/*
not to use Var ...because there is problem of block scope and functionbal scope ........... which means it global varibale 

do not use always console.log to print so many thing ... to avoid writing console.log multiple time use CONSOLE.TABLE to print all variable value in table format 
*/


accountEmail = "hchc@yahoo.com"
accountPassword = "14694+646'];y778[;"
accountCity = "Bengaluru"

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])