function ANewConstrutor(num, arr){
    this.name = "A new Object";
    this.phone = num;
    this.likes = arr;
    this.default = null;
}
let object0 = new ANewConstrutor(1234, [1, 3, 4]);
//adding a new property to the prototype of ANewConstrutor
ANewConstrutor.prototype.dislikes = 0;
let object1 = new ANewConstrutor(2441139, []);
console.log(object1);
console.log(object1.dislikes);
console.log(object0.dislikes);

//Accessing the prototype of object1
console.log(Object.getPrototypeOf(object1)); 

