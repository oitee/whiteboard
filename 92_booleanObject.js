function bouncer(arr) {
    var result = []
    for(let i = 0; i < arr.length; i++){
      if (Boolean(arr[i]))
      {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  console.log(bouncer([false, null, NaN, 1, 2, undefined]));
  console.log(Boolean(null));
  console.log(Boolean(NaN));
  console.log(Boolean(undefined));