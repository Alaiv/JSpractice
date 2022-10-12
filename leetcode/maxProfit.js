const maxProfit = function(prices) {
    let result = 0
    let min = prices[0]
    for (let i = 0; i < prices.length; i++) {
        let sell = prices[i]
        let profit = sell - min

        if (profit > result) {
            result = profit
        }
        if (sell < min) {
            min = sell
        }
    }
    return result
};