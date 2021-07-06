var myObj = {
    "player10": "Messi",
    "player9": "De Maria",
    "player7": "Ronaldo",
    "10": "Messi(2)"
}
console.log(myObj.player10);
var playernum = "player7";
console.log(myObj[playernum]);
myObj["coach"] = "Dravid";
console.log(myObj);
delete myObj.coach;
console.log(myObj);
console.log(myObj[10]);
