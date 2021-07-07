
function first(){
    var myvar = 1;
    let mylet = 1;
    justvar = 1;
    
}
function second(){
    console.log(myvar);// As myvar is defined within the function first(), this line throws an error message as myvar is not defined: ReferenceError: myvar is not defined
    console.log(mylet);// Similarly, this line throws an error message: ReferenceError: mylet is not defined
    console.log(justvar);//as the variable justvar was declared without var or let, this line produces the following output: 1
}

first();
second();


console.log(justvar); // As the function first() has already been called, this line produces the following output: 1
console.log(myvar);// As myvar was not declared outside the function first(), this line throws an error message: ReferenceError: myvar is not defined
console.log(mylet);// Similarly, this line throws an error message: ReferenceError: mylet is not defined


 
