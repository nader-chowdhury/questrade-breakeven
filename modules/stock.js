function Stock () {

    function calculateBreakeven (purchase_price, quantity, buy_transaction_type, sell_transaction_type) {
        let ECN_FEE = 0;
        let BREAK_EVEN = 0;

        // ECN FEE
        if (quantity % 100 != 0) {
            // charge ecn for buy and sell
            ECN_FEE = quantity * 2 * 1;
        } else if (sell_transaction_type && buy_transaction_type === "market") {// check both transaction type to be market or limit
            // charge ecn for buy and sell
            ECN_FEE = quantity * 2 * 1;
        } else if (sell_transaction_type || buy_transaction_type === "market") {// check if one of the transaction adds or removes liquidity
            // charge ecn only once
            ECN_FEE = quantity * 1;
        }
        
        // COMMISSION FEE
        return BREAK_EVEN;
    }

    return {
        ticker, 
        purchase_price, 
        quantity, 
        buy_transaction_type, 
        sell_transaction_type,
        calculateBreakeven
    }
}