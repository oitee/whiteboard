// https://leetcode.com/contest/biweekly-contest-43/problems/calculate-money-in-leetcode-bank/

var totalMoney = function(n) {
    let sum = 0;
    let monday = 0;
    let weekday = 1;
    for (let i = 1; i <= n; i++){
        if(weekday <= 7){
            sum = sum + weekday + monday;
            weekday++;
        }
        else{
            monday++;
            weekday = 1;
            sum = sum + weekday + monday;
            weekday++;
        }
    }
    return sum;

};

console.log(totalMoney(10))
console.log(totalMoney(20));