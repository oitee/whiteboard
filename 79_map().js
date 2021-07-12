function map(myFunc, arr){
        for (let i = 0; i < arr.length; i++){
        arr[i] = myFunc(arr[i]);
    }
    return arr;
}

const myFunc = n => n + 1;
const myFunc2 = n => n * 5;
console.log(map(myFunc, [1, 2, 3, 4]));
console.log(map(n => n * 5, [1, 2, 3, 4]));
console.log(map(n => "The number is " + n, [1, 2, 3, 4]));