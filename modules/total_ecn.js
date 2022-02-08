// import { getExchange } from "./yahoo_api";
//
export function total_ecn (name, transactions, quantity){
    let exchange = getExchange(name);
    let ecn_factor = 0; // This variable stores how many times an ecn fee is incurred
    
    // Determines if an ecn fee should be incurred on the buy and/or sale of stocks
    if (quantity % 100 != 0) {
        ecn_factor = 2;
    } else if (transactions.includes("market")) {
        ecn_factor = 1;
        if (transactions.every(transaction => {
           return transaction === "market";
        })) {
            ecn_factor = 2;
        }
    }
}
