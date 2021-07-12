function filter(f, data){
    var result = [];
    for (var i = 0; i < data.length; i++){
        if (f(data[i])){
            result.push(data[i]);
        }
    }
    return result;
}
console.log(filter(a => (a % 2) == 0, [0,1,2,3,4,5,6]));// output: [ 0, 2, 4, 6 ]