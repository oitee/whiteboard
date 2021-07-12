//reduce function
function reduce(f, acc, data){
    
    for(let i = 0; i < data.length; i++){
        acc = f(acc, data[i]);
    }
    return acc;
}
//writing new_map(), using reduce()
function new_map(f, data){
    var acc = [];
    const func = (acc, item) =>  {acc.push(f(item)); return acc;}
    return reduce(func, [], data);
}
console.log(new_map(n => n + 1, [1, 2, 3, 4]));// return: [2, 3, 4, 5]
