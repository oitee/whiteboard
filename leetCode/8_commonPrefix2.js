function common (acc, str){
    let result = "";
    let i = 0;
    while(acc.substring(i,(i + 1)) == str.substring(i, (i + 1)) && i < acc.length) {
        result = result + acc.substring(i, (i + 1));
        i++
    }
    
    return result;
}

var longestCommonPrefix = function(strs) {
    let acc = strs[0];

    for (let i = 0; i < strs.length; i++){
        acc = common(acc, strs[i]);
        if (acc == ""){
            return acc;
        }
    }
    return acc;
};

console.log("input: " + ["o", "oitee", "oiteecodes"]);
console.log(longestCommonPrefix(["o", "oitee", "oiteecodes"]));// "o"

console.log("input: " + ["o"]);
console.log(longestCommonPrefix(["o"]));//""

console.log("input: " + ["oi", "codes", "oiteecodes"]);
console.log(longestCommonPrefix(["oi", "codes", "oiteecodes"])); //""

console.log("input: " + ["flower", "flow", "flour"]);
console.log(longestCommonPrefix(["flower", "flow", "flour"]));//flo

console.log("input: " + ["dog", "racecar", "car"]);
console.log(longestCommonPrefix(["dog", "racecar", "car"]));//""

console.log("input: " + ["o", "oitee", "codes"]);
console.log(longestCommonPrefix(["o", "oitee", "codes"]));
