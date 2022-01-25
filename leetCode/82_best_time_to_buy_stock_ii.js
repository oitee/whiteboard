// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/


// iterate through the entire array
// find local minima and local maxima (or, find local peaks- both in terms of height and depth)
// Principle: buy only when the next guy is more than you
// sell only when the next guy is less than you
// keep adding the (sellingprice - buyingprice) values

var maxProfit = function(prices) {
    let buy = 0;
    let totalProfit = 0;
    
    while(buy < prices.length){
        
        
        if(prices[buy] < prices[buy + 1]){
            //this is the buying price
            //time to find the selling price, ie, the guy who's next is less than itself
            let sellingPrice = buy + 1;
            while(prices[sellingPrice] < prices[sellingPrice + 1]){
                sellingPrice++;
            }
            
            totalProfit = totalProfit + prices[sellingPrice] - prices[buy];
            buy = sellingPrice + 1;
            
        }
        else{
            buy++;
        }
        
    }
    return totalProfit;
    
};