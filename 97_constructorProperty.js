let obj1 = {};
console.log(obj1.constructor);//[Function: Object]
console.log(obj1.prototype);//undefined

function AConstructor() {
    this.type = "object",
    this.value = "whatever"
};
let obj2 = new AConstructor();//output: [Function: AConstructor]
console.log(obj2.constructor);// output: [Function: AConstructor]

let obj3 = Object.create(obj2);
console.log(obj3.constructor);// output: [Function: AConstructor]
console.log(obj3.prototype);//undefined


//let obj4 = Object.create(obj2.prototype);// this will throw an error, as the obj3.prototype is undefined.
//console.log(obj4.constructor);

function Human(num){
    this.age = num;
    this.weight = 0;
};
console.log("Keys" + Object.keys(Human));
console.log(new Human(77).name);
let human0 = new Human(44);
console.log(human0);


Human.prototype = {
    constructor: Human,
    name: "b",
    date: "15thJuly2021",
    age : 0
};
console.log("printing Human constructor's prototype properties: " + Human.prototype);
let human1 = new Human(88);// creating a new object, AFTER defining Human's prototype object.
console.log(human1); //output: Human { age: 88, weight: 0 }
console.log(Human.prototype.isPrototypeOf(human1));// true
console.log("checking if the prototype properties of human1 are printed: " + human1.name); //checking if the prototype properties of human1 are printed: b

let human2 = new Human(9);
console.log(human2);
console.log(human1.constructor);//[Function: Human]
console.log(human1.name);//b
console.log(new Human(8).name);