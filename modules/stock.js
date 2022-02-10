import { getCommission } from "./total_trade_commissions.js";
import { getECN } from "./total_ecn.js"

export default function Stock(
    symbol, 
    price, 
    quantity,
    transactions,
    exchange,
    type)
{
    let total_commission = getCommission(quantity, type);
    let total_ecn = getECN(transactions, quantity, price,exchange);
    let total_cost = total_commission + total_ecn + (quantity * price);
    let break_even_price = total_cost / quantity;
    
    return {
        symbol, 
        price, 
        quantity,
        transactions,
        exchange,
        type,
        total_commission,
        total_ecn,
        total_cost,
        break_even_price_formatted: new Intl.NumberFormat("en-US",{ 
            style: "currency",
            currency: "USD",})
        .format(break_even_price),
        break_even_price
    }
}
