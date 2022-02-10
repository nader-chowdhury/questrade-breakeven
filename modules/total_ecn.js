export function getECN(transactions, quantity, price, exchange){
    let ecn_factor = 1; // This variable stores how many times an ecn fee is incurred, default assumes at least one market order
    let ecn_per_share = 0;
    const ecn_table = { // This table stores the ecn fees per share based on exchanges/routes.
        removeLiquidity: {
            "TSX/CSE >= 1": 0.0035,
            "TSX < 1": 0.0008,
            "CSE < 1": 0.0012,
            NASDAQ: 0.003,
            NYSE: 0.004,
        },
        addLiquidity: {
            EDGA: 0.004
        }
    }

    // Determines if an ecn fee should be incurred on the buy and/or sale of stocks
    if (transactions.includes("market")) { // Check to see if there is "market" in transactions
        if (transactions.every(
                (transaction) => { return transaction === "market";})) { // if all orders are market, charge ecn both transactions, else only once
            ecn_factor = 2;
        }
    } else if (quantity % 100 != 0){ // if non-marketable order (not multiple of 100), charge ecn both times
        ecn_factor = 2;
    } else if (exchange === "edga") { // EDGA incurs ECN even if it adds liquidity 
        ecn_factor = 2;
        return ecn_table.addLiquidity.EDGA * quantity * ecn_factor; 
    } else {
        return 0; // If lot size is divisible by 100, and no market orders, no ecn fee is charged
    }
    
    // Determine ecn fee per share according to exchange, then calculate total ecn
    switch (exchange) {
        case "tsx":
            if (price < 1) {
                ecn_per_share = ecn_table.removeLiquidity["TSX < 1"];
            } else {
                ecn_per_share = ecn_table.removeLiquidity["TSX/CSE >= 1"];
            }
            break;
        case "cse":
            if (price < 1) {
                ecn_per_share = ecn_table.removeLiquidity["CSE < 1"]
            } else {
                ecn_per_share = ecn_table.removeLiquidity["TSX/CSE >= 1"];
            }
            break;
        case "mngd":
            return 0;
        case "nasdaq":
            ecn_per_share = ecn_table.removeLiquidity.NASDAQ;
            break;
        case "nyse":
            ecn_per_share = ecn_table.removeLiquidity.NYSE;
            break;
        case "edgx":
            ecn_per_share = ecn_table.removeLiquidity.NYSE;
            break;
        case "edga":
            return 0;
    }

    return ecn_per_share * quantity * ecn_factor;
}
