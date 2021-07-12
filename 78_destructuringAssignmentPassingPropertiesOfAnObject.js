var myObj = {
    name: "MyObj",
    props: "five",
    day: 9,
    month: 8,
    year: 2021
}
const myFunc = ({day, month, year}) => day + "th day of the " + month + "th month of the year " + year;
console.log(myFunc(myObj));//output: 9th day of the 8th month of the year 2021