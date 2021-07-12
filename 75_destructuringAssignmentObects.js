var user1 = {
    firstName: "Ram",
    enrollmentNo: 1234,
    birthday: "01-01-2000"
}
var user2 = {
    firstName: "Gopal",
    enrollmentNo: 1237,
    birthday: "01-07-2001"
}
var user3 = {
    firstName: "Verma",
    enrollmentNo: 2234,
    birthday: "03-01-2000"
}
var firstName1 = user1.firstName;
var birthday1 = user1.birthday;
console.log("traditional way: "+ firstName1 + " " + birthday1)
const {firstName, birthday} = user2;// simplest version
console.log("simplest way to use the destructuring assignemnt: "+ firstName + " " + birthday);
const {firstName: firstName3, birthday: birthday3} = user3;
console.log("using destructuring assignment and assigning a new variable: " + firstName3 + " " + birthday3);