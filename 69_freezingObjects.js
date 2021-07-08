//"use strict"
var obj = {
    prop1: "A",
    prop2: "B",
    prop3: "C"
}
obj.prop4 = "D"; //modifying obj, by adding a new property. 
Object.freeze(obj);
obj.prop5 = "E"; // This attempt of adding a new property will fail, as the object is frozen
console.log(obj); //output: { prop1: 'A', prop2: 'B', prop3: 'C', prop4: 'D' }

var anotherObj = {
    myArr: [1, 2, 3],
    myObj: {prop1: "A", prop2: "B", prop3: "C"},
    myVar: "1"
}
Object.freeze(anotherObj);
anotherObj.myArr[3] = 4;// This will work
anotherObj.myObj.prop4 = "D";//This will work
anotherObj.myVar = 1;//This will fail silently
console.log(anotherObj);/* output: { myArr: [ 1, 2, 3, 4 ],
    myObj: { prop1: 'A', prop2: 'B', prop3: 'C', prop4: 'D' },
    myVar: '1' } */