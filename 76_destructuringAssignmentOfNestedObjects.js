var user1 = {
    firstName: "Jon",
    lastName: "Don",
    address: {
        home: "LA",
        office: "NY"
    },
    preference: ["movies", "history"]
}
var {firstName: Name} = user1;
console.log(Name);
var {address: {home, office}} = user1;// this declares the variable 'home' and saves it as "LA"
console.log(home,office);
var {address: {home: home1, office: office1}} = user1;// this will declare the variable home1, and store it as "LA1111"
console.log(home1, office1);//