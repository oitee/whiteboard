function phoneticLookup(val){
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"}
    if(lookup.hasOwnProperty(val)){
        result = lookup[val];
    }
        else {result =  false;}
    return result;
}

console.log(phoneticLookup("alpha"));
console.log(phoneticLookup("aaa"));
