function myfunc(){
    let local_var = 10;
    for(let local_var = 10; local_var < 15; local_var++){
        console.log("value of local_var within the for-loop " + local_var);
    }
    console.log("value of local_var outside the for-loop " + local_var);
}
myfunc();
