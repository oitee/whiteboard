function NewConstructor(){
    //this.name = "newObject";
    this.arr = [1, 2, 3];
    this.obj = {prop1: "always prop1", prop2: "still prop2"};
}
let newObject1 = new NewConstructor();
console.log(newObject1);

//trying out a construtor that accepts arguments
function AnotherConstrutor(num, arr){
    this.name = "anotherObject";
    this.phone = num;
    this.likes = arr;
    this.default = null;
}
let anotherObject = new AnotherConstrutor(98033212, ["ice-cream", "brownie"]);
console.log(anotherObject);

//trying out instanceOf
console.log(anotherObject instanceof AnotherConstrutor);


