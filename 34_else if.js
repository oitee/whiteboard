function testingelseif(val){
    if (val > 0){
        console.log(val + " is greater than 0");
    }
    else if (val > 1){
        console.log(val + " is greater than one but this should have been null");
    }
    else if (val < 0){
        console.log(val + " less than zero");

    }
    else{
        console.log(val + " is zero");
    }
}
testingelseif(1);
testingelseif(10);
testingelseif(-10);
testingelseif(0);
