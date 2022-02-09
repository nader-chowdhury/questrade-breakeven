import { getCommission } from "./total_trade_commissions.js";
import { getECN } from "./total_ecn.js"

export default function Stock (
    symbol, 
    price, 
    quantity,
    transactions,
    exchange)
{
    let break_even_price = (getCommission(quantity, quote) + getECN(transactions, quantity, price, exchange)) / quantity;
    return {
        symbol, 
        price, 
        quantity,
        transactions,
        break_even_price
    }
}
