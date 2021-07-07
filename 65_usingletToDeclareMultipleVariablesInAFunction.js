var global_var = 10; 
let global_let = 10; 

function mylet(){
    var local_var = 3; 
    let anotherLocalVar = 4; 
    let local_var = global_var; // SyntaxError: Identifier 'local_var' has already been declared
    let anotherLocalVar = 33;// SyntaxError: Identifier 'anotherLocalVar' has already been declared  
    console.log(local_var);
    console.log(anotherLocalVar);
}
mylet();

