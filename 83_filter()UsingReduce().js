//WAP called filter, that accepts a one-argument function as an input and an array; the function returns all the elements in the array for which the function return are true value. USE Reduce
function reduce(f, acc, data){
    
    for(let i = 0; i < data.length; i++){
        acc = f(acc, data[i]);
    }
    return acc;
}

function filter(f, data){

var result = reduce((acc, item) => {if (f(item)){acc.push(item);} return acc}, [], data)

    return result;
}

console.log(filter(n => (n % 2) != 0, [1, 2, 3, 4, 5]));//return [1, 3, 5]

