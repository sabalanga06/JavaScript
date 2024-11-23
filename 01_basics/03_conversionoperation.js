let score = "hitesh"
console.log(typeof score);
 console.log(typeof(score));

 let valueInNumber = Number(score)
 console.log(typeof valueInNumber);
 console.log(valueInNumber);  

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// IIII => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log( typeof stringNumber);






//++++++++++++++++++++++++++++++++++++ Comparision operator ++++++++++++++++++

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0 ) ;
console.log(null >= 0 ) ;

/* The reason is that an equality check == and comparisons > < >=
<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false. */


console.log(undefined == 0 ) ;
console.log(undefined > 0); I
console.log(undefined < 0);


//=== strict check ...datatype and value both conversion and == just value check
console.log("2" === 2)

// symbol datatype even thought the value are saem 123 but ans is false beacuse it will generate unique symbol only for both 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id === anotherId);


// Primitive
// 7 types String, Number, Boolearn, null, undefined, Symbol,BigInt
// Reference (Non primitive)
// Array, Objects, Functions

//+++++++++++++++++++++++++++++Stack and heap+++++++++++++++++++++++
// Stack (Primitive)  -> call by value Deep Copy  --- means copy created does not effect to original value , 
//Heap (Non-Primitive)-> call by references Shallow copy----- means direct references given of actual value and changes effect to original value  
//call by value 
let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);  //hiteshchoudharydotcom
console.log(anothername); //chaiaurcode

//call by reference 
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

    let userTwo = userOne
    userTwo.email = "hitesh@google.com"
    console.log(userOne.email);   //hitesh@google.com 
    console.log(userTwo.email); //hitesh@google.com



// Array advance methods
//1. spread operator
//2. splice method
//3. flat maethod 
//4. From method.which convert any value into array
//5. Array.Of method method  == return a new array froma set of elements(variables, araray any type of elements) 

