// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

//easy
// Use two pointers
// Left= 0; Right = 1
// Left indicates buying price
// Right indicates selling price
// For a transaction to make sense, price on Left should be less than price on Right
// So, if this condition is not met, make Left = Right and Right = Left + 1
// But, if this condition is met, find their difference (ie profit)
// Iterate through the entire array till Right reaches the end
// The max of all profits seen so far is the answer

var maxProfit = function(prices) {
    
    let left = 0;
    let right = 1;
    let maxP = 0;
    while(right < prices.length){
        if(prices[left] > prices[right]){
            left = right;
            right++;
        }
        else{
            let currentProfit = prices[right] - prices[left];
            maxP = Math.max(currentProfit, maxP);
            right++;
        }
    }
    return maxP;
};
