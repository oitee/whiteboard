function ANewConstructor(num, arr){
    this.name = "A new Object";
    this.phone = num;
    this.likes = arr;
    this.default = null;
}
//adding prototype properties
ANewConstructor.prototype.dislikes = 0;
let object0 = new ANewConstructor(2441139, []);
console.log(object0.dislikes);//output: 0

//Objects have two types of properties: own properties and prototype properties
object0.address = "India";//adding an own property
console.log(object0.hasOwnProperty("phone"));//true
console.log(object0.hasOwnProperty("address"));//true
console.log(object0.hasOwnProperty("dislikes"));//false
//Thus, hasOwnProperty is used to detect the object's own properties.

//using for..in to find out object0's own properties and prototype properties
for (let counterProperty in object0){
    if(object0.hasOwnProperty(counterProperty)){
        console.log(counterProperty + " is object0's own property");
    }
    else{
        console.log(counterProperty + " is a protype property of object0");
    }
}

//using constructor keyword to see if an object is part of a constructor
console.log(object0.constructor == ANewConstructor);

//There is an easier way to add prototype properties: chaging the .prototype object itself
ANewConstructor.prototype = {
    value: "objects",
    year: 2021,
    status: "working"};
console.log(object0.status);//why is this undefined?

//Extracting the prototype properties of object0 again
/*for (let counterProperty in object0){
    if(object0.hasOwnProperty(counterProperty)){
    }
    else{
        console.log(counterProperty + " is a protype property of object0");
    }
}*/
console.log(ANewConstructor.prototype.isPrototypeOf(object0));//false