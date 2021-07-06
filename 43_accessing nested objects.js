var Obj = {
    "prop1": "first property",
    "prop2": {"prop2.1": "first property under second property"},
    "prop3": {"prop3.1": {
                            "prop3.1.1": "first property under first property under third property",
                            "prop3.1.2": "second property under first property under third property"}
                
    }}

var result = Obj["prop3"]["prop3.1"]["prop3.1.2"];
//console.log(result);
//console.log(Obj.prop1);
var myArr = [Obj, 9, "ww"];
console.log(myArr[0]["prop3"]["prop3.1"]["prop3.1.1"]);