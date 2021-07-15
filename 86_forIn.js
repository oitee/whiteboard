//testing out for..in statement
let testObj=
{name: "testObj",
properties: 3,
purpose: "for-in"};
for(let counterProperty in testObj){
    console.log(counterProperty + "'s value is " + testObj[counterProperty]);
}
/*Output: 
name's value is testObj
properties's value is 3
purpose's value is for-in*/