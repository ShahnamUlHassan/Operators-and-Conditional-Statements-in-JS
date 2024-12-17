                                  //comments in js

//console.log("Hello World!");

//this is comment

                                  //Arithmetic Operators
/*console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
//Modulus Operators
console.log("a % b =", a % b);
//Exponentiation Operators
console.log("a ** b =", a ** b);*/
                                   //Unary Opertors
                                     //Increment
// let a = 5;
// let b = 8;
// a++;
// console.log("a =", a);
                                      // //Decrement
// a--;
// console.log("a =", a);
// let a = 5;
// let b = 8;
// post increment a++
// pre increment ++a
// post dectrement a--
// pre dectrement --a

                                  //Assignment Operators

// let a = 5;
// let b = 8;
// a += 4;
// a *= 4;
// a -= 4;
// a /= 4;
// a **= 4;

                                   //Comparison Operators

// let a = 5;
// let b = 8;
//console.log("a == b",a == b,); //Equal to
//console.log("a != b",a != b,); //Not Equal to
//console.log("a === b",a === b,); // Stricktly Equal to
//console.log("a !== b",a !== b,); // Stricktly Not Equal To
//console.log("a >= b",a >= b,);
//console.log("a <= b",a <= b,);

                                    //Logical Operators

                                      //Logical AND

// let a = 5;
// let b = 8;

// let cond1 = a > b;
// let cond2 = a === 5;
// console.log("cond1 && cond2" , cond1 && cond2);

// let cond1 = a < b;
// let cond2 = a === 5;
// console.log("cond1 && cond2" , cond1 && cond2);

                                    //Logical OR

// let a = 5;
// let b = 8;

// console.log("cond1 || cond2", a > b || a === 5);

//Logical Not

// let a = 5;
// let b = 8;

// console.log("!(a<b) = " , !(a<b));


                                  //Conditional Statements

// If Statements

// let age = 25;
//  if(age > 18) {
//     console.log("you can vote");
//  };

//  let age = 16;
//  if(age < 18) {
//     console.log("you cannot vote");
//  };


// let age = 18;
// let mode = "dark";
// let color;

// if(mode === "dark"){
//     color = "black";
// }

// if(mode === "light"){
//     color = "white";
// }

// console.log(color);


                                   //If-else Statment

// let mode = "light";
// let color;

// if(mode === "dark"){
//     color = "black";
// } else {
//      color = "white"
// }

// console.log(color);

// let age = 25;

// if(age>=18){
//     console.log("you can vote")
// } else {
//     console.log("you cannot vote")
// };


// let num = 10;

// if(num % 2 === 0) {
//     console.log(num, "is even");
// } else{
//     console.log(num, "is odd")
// };


                                          //else-if statment

// let mode = "dark";
// let color;

// if( mode === "dark") {
//     color = "black";
// } else if(mode === "blue"){
//     color = "blue";
// } else if(mode === "pink"){
//     color = "pink"
// } else{
//     color = "white"
// };

                                 //Ternary Operators

// let age = 16;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

                          // if you want to learn more about JavaScript then visit MDN Docs

                          // Switch Statment
 
// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

                                      //Prompt
// let name = prompt("Hello!");

// console.log(name);

// let num = prompt("enter a number");

// if(num % 5 === 0){
//     console.log(num, "is multiple of 5")
// } else{
//     console.log(num, "is NOT a multiple of 5")
// };


                             // Practice 
let score = prompt("Enter your score:");
let grade;

if(score >=90 && score <= 100){
    grade = "A";
} else if(score >=70 && score <= 89){
    grade = "B";
} else if(score >= 60 && score <= 69){
    grade = "C";
} else if (score >= 50 && score <= 59){
    grade = "D";
} else if ( score >= 0 && score <= 49){
    grade = "F";
}

console.log("according to your score, your grade was :",grade);

