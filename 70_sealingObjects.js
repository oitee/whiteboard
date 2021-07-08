var myObj = {
    A: "1",
    B: "2",
    C: "3"
}
Object.seal(myObj);
myObj.D = "4"; //This will fail, as insertion of a new property will be disallowed
myObj.C = 3;// This modification will be successful, as the property 'C' exists inside myObj
console.log(myObj);//output: { A: '1', B: '2', C: 3 }