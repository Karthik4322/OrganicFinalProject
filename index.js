  /*console.log("I am going to learn javascript first time "); // this the print statement used in script language.
  let name = "Kathi karthik";
  console.log(typeof name);// we don't mention any specific data type for assigning the data like int , float, 
  name = 310119104043;
  console.log(typeof name);// to find data type we use typeof method , typecasting becomes very easy and reusing the same identifer.

 let bigInt = 9032320932302309302n; // if number goes above 15 to 16 digits , the compiler won't take correctly .So we use bigInt (n)
 console.log(bigInt);

 let Name = "Karthik Shanmugam";
 let old = "years old";

 console.log(`${Name} ${22+1} ${old}`); //  to concatenate the multiple identifier , we are using this 
 console.log(`He said,"This is very wrong to speak like this"`); // using double quotes using back tick
 console.log(`Don't tell anyone that is "I am batman lives in Night's life"`); */

/*
 let NName = prompt("What is your name ?",'null'); // prompt is used to get input from user , default value is null
 alert(`Hello ${NName}`);

 let resume = confirm("Are you gonna continue on this site");// is used to get input in boolean true or false. Ok- true, Cancel- false
 alert(resume);

 resume = confirm("Are you gonna continue on this site");
 alert(resume); 

 
 let status = confirm("Are you gonna continue on this site");
 if(status ==1){
   alert("Welcome to our site");
 }
 else{
   alert("Sorry you don't have access to this site");
 }
 */

/* // OR operator
console.log(10 || "yes");
console.log(""|| true);
console.log(undefined || false);
console.log(''||'abc');

// AND operator
console.log(10 && "Karthik");
console.log(null && '');
console.log(undefined && " ");
 */

// Type Conversions

/* console.log('23'-3); // result is 20 , type is NaN
console.log('23'*2); // result is 46 , type is NaN
console.log('23'+2); // result is 232 , type is String */

/* let isAdult = null;  
isAdult = String (isAdult); // null is converted into string value
console.log(isAdult);
console.log(typeof isAdult);
 */

/* let age = '23'; // String type
console.log(typeof age);
age = Number(age); // String converted into Number
console.log(age+3); // result is 26 */

/* let Age = '123k';// 1. 'true', 2. true , 3. null , 4. undefined , 5 . '123k'
console.log(typeof Age);
Age = Number (Age);
console.log(typeof Age);
-->console.log(Age); 
// 1. the result is NaN , 2. the result is 1 , 3. the result is 0, 4. the result is NaN , 5.the result is NaN */

/* let x = undefined; // 1. empty , 2. space ' ', 3.'0', 4. 0 , 5. '1' , 6. 1 , 7.'Karthik', 8. null, 9. undefined
console.log(typeof x);
x = Boolean(x);
console.log(typeof x);
console.log(x); 
// 1. result is false , 2. result is true, 3. result is true, 4.  result is false, 5. result is true
// 6. result is true, 7. result is true , 8. result is false, 9. result is false */


// Conditions

/* let vehicle = 'car';
if(vehicle == 'car')
    console.log("Collect toll fee Rs.90");
else if(vehicle == 'lorry')
    console.log("Collect toll fee Rs: 40");
else
    console.log("No fee for bicycles"); */

//  Conditional Statements
/* 
let veh = 'car';
let model = 'Rolls Royce';
let type = (veh=='car'? model =='Rolls Royce':"Collect toll fee Rs.90" )?'Pay Rs:1000 as toll fee': "Don't pay toll fee");
console.log(type); */

// Find leap year or not
/*
let year = '1800';
if(year % 4 ==0 ){
    if(year % 100 ==0){
        if(year% 400 ==0){
        console.log(`The given year: ${year } is a leap year`);
    }
    else{
        console.log(`The given year: ${year } is a not leap year`);
    }}
    else{
        console.log(`The given year: ${year } is a leap year`);
    }}
    else{
    console.log(`The given year: ${year } is not a leap year`);
    }
*/
    // Coalescing operator
/* 
    let age = undefined; // if value is undefined, undeclared, null , it takes that value 19
    let current_age = age ?? 19;
    console.log(current_age); */

// Creative thinking
   /*  if(null|| undefined || 0){
        console.log("Executed");
    }
    else{
        console.log("The condition becomes false");
    } */

// Switch case

    /* let a = 3, b = 5;
    let sign = '/';
    switch(sign){
        case '+': console.log(`Sum = ${a+b}`);break;
        case '-': console.log(`Subtraction = ${a-b}`);break;
        case '*': console.log(`Multiplication = ${a*b}`);break;
        case '%': console.log(`Modulus = ${a%b}`);break;
        default: console.log("Invalid operator");
    } */

// Creating method/ function

/* let a = 10;

function findType(a){
 if(a % 2 == 0){
  //console.log("Even");
  return "Even";
}
else{
  // console.log("Odd");
  return "Odd";
}
console.log("This statement will not going to execute ever after returning the statement");
}
console.log(findType(4)); */

// Saving method on identifier and send value through it

/* let a ;
function minimumAge(a){
    if (a>=18){
        return "Eligible";
    }
    else{
        return "Not Eligible";
    }
}
let eligibleCheck = minimumAge;
console.log(eligibleCheck(2)); */

// Arrow function

/* Example 1:
let abc = 54;
let multiply= (abc)=>console.log(abc*2);
multiply(20); */

//Example 2:

/* let who = "Robert"; // this value will not be taken even though the value "Jaime" is not passed 
let cerseiOpens =(who)=>{ //value is taken as "Jaime" now
    if(who =="Jaime")
    { 
        console.log("opens");
    }
    else {
        console.log("closed");
    }
}
cerseiOpens("Jaime");// We should definitely give some argument to be passed */

//  Callback function

/* function operations(op, a, b){
    return op(a,b);
}
let sum = (a,b) =>a+b; // arrow functions always returns a value like return a+b

function sub(a,b){
    return a-b;
}
console.log(operations(sub,18,9)); */

// Here we are using operations function to call indirectly a sub function and arrow functions always returns a value

// Objects explanation

/* 
// Here car is object , not a class . In javascript there is no concept called class.

let engineFuelType = ' ,electric & ev';
let car ={
    modelName : 'Altroz',
    brand: 'TATA',
    fuelType : 'petrol'+engineFuelType,
    price : 15,
    Onroadprice(price) {  // using method on setting property value
        return this.price = price + 2;
    }
};
console.log(car.Onroadprice(18)); // calling method using object name
//console.log(car);
//car.price = 18;
//console.log(car.price); // to get specific property using name price
//delete car.price;   // command to delete property
console.log(car); */

// Sample object creation

/* let user = {
    name : 'Karthik' ,
    phNo : 9841759422
};
user.name = 'Karthik.S';
console.log(user.name);
delete user.phNo;
console.log(user); */

// Creating the constructor 
/*
let a = {
    name : 'goms',
};
function User(a){
    this.name = a;
}
let name = new User('Karthik');
let fName = new User('Jeeva');
console.log(name);
console.log(fName);
*/
// task 

/*
function Operation(){ // constructor name is always starts with capital letter
    this.a = 3;
    this.b = 4;
    this.add = function(c){
        return this.a+this.b+c;
    }
}
let elements = new Operation();
console.log(elements.add(41));
*/

// Arrays
// 1. Types of Declaration - 3 
// 2. We can store different datatype elements,functions,objects
// 3. Usage of push,unshift,pop,shift operations

/*let veggies = new Array();
veggies = ["Carrot", "Beetroot", "Amla"];
console.log(veggies[1]);

let veggies = ["Carrot", "Beetroot", "Amla"];
 
let veggies = [];
veggies = ["Carrot", "Beetroot", "Amla"];
console.log(veggies);
*/
/*
let nonveggies =['chicken','mutton',true,undefined,null,function sum(a,b){return a+b},{name:'Karthik',id: 9898}];
console.log(nonveggies[5](3,5)); // executing function
console.log(nonveggies[6].name); // executing object
*/

/*
let operations = ['Love','Hurt','Pain'];
///console.log(operations.push('Time'));
//console.log(operations.unshift('Confidence'));
//console.log(operations.pop());
//console.log(operations.shift());
//console.log(operations);
// By using these operations we can't change specifically from positions
*/

/*
let operations = ['Love','Hurt','Pain'];
for(op in operations){
    console.log(operations[op]);
}
*/

/*
let operations = ['Love','Hurt','Pain'];
for(op of operations){
    console.log(op);
}
*/
/*
let matrix = [[1,2,3],[4,5,6],[7,9,8]];
for(mat of matrix){
    console.log(mat);
}
*/

/*
let matrix = [[1,2,3],[4,5,6],[7,9,8]];
for(let i =0;i<matrix.length;i++){
    for(j=0;j<matrix[i].length;j++)
        console.log(matrix[i][j]);
}
*/
// Map data structure declaration and methods
/*
let cricketPlayersID = new Map();
cricketPlayersID.set(7,"Mahendra Singh Dhoni")
.set(18,"Virat Kohli")
.set(45,"Rohit Sharma")
.set(3,"Suresh Raina")
.set(25,"Shikhar Dhawan")
.set(8,"Ravindra Jadeja");
console.log(cricketPlayersID.get(18));
console.log(cricketPlayersID.delete(3)); // not necessary to use console it returns operation is completed
console.log(cricketPlayersID);
console.log(cricketPlayersID.delete(3));// returns operations has completed or not using boolean result true or false
console.log(cricketPlayersID.clear()); // returns undefined
console.log(cricketPlayersID);
*/

// Set data Structures declaration and their methods
/*
let phno = new Set();
phno.add(9841759024);
phno.add(8056014573);
phno.add(9841759024);
phno.add(7358904572);
//console.log(phno);
for(let mobileno of phno){ // for in method is not applicable on set
    console.log(mobileno); 
}
*/
// Recursive Function

// Factorial of number
/*
function factorial(n){
    if(n==0){
        return n;
    }
    return n* factorial (n-1);
}
console.log(factorial(5));
*/

// Task
/*
function add(n){
    if(n==0){
        return n;
    }
    return n + add(n-1);
}
console.log(add(1));
*/