// const tinderUser = new Object() ---creating object one way 
const tinderUser = {}  //other way to create object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
//we can also create object under object and access it 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);   ---outpur get hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
 const obj3 = Object.assign({}, obj1, obj2, obj4)   //---- Assign operator is used to combine multiple objects ...{}-> is target abd obj1,obj2,obj4 are source 

//const obj3 = {...obj1, ...obj2}  ///we can also cobine 2 object using spread operator 
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  --- we will get all key of tinderuser object but the output datatype is array -imp
// console.log(Object.values(tinderUser)); ---------we will get all value of tinderuser object but the output datatype is array -imp
// console.log(Object.entries(tinderUser)); ----------------we will get all key-value pair of tinderuser object in an individual array under large array -imp

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}



// course.courseInstructor  //constructor De-Structure

const {courseInstructor: instructor} = course  //constructor De-Structure

// console.log(courseInstructor);
console.log(instructor);

////below is the json format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]