var myvar; //this line merely assigns the variable myvar; value of myvar is undefined
myvar = 0; // now, a value is assigned to myvar
let mylet; // the variable mylet is merely declared; its value is currently undefined
mylet = 0; //now, a value is assigned to mylet
const MY_CONST;// this line will throw a Syntax Error, as no value is assigned to MY_CONST
const MY_CONST1 = 11;// no error message, as a value is assigned to MY_CONST1 at the time of declaration
MY_CONST1++;// this line will throw a TypeError message, as this line attempts to assign a new value to MY_CONST1
