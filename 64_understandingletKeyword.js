var global_var = 10; //declaring a global variable, using var; 
let global_let = 10; //declaring a global variable, using let
function myvar(){
    var local_var = 1; // declaring a new variable inside the function myvar(), using var keyword
    var global_var = local_var; // declaring the global variable (global_var) inside the function myvar(), using var 
    console.log(global_var); // output: 1
    local_var += global_var; // adding the variables, and storing it as local_var
    console.log(local_var);// output: 2
    console.log(global_var);// output: 1
   
}
function mylet(){
    let local_var = 3; // declaring the variable that was already declared in the myvar() function inside the function mylet(), using let keyword
    let anotherLocalVar = 4; // declaring a new variable inside the mylet() function, using let keyword
    let global_var = local_var; // declaring the global variable (global_var) inside the mylet() function using let
    local_var += global_var;// adding local_var and global_var, and storing it inside local_var 
    console.log(local_var);//output: 6
    console.log(anotherLocalVar);//output: 4
    console.log(global_var);//output: 3
}
myvar();
mylet();

