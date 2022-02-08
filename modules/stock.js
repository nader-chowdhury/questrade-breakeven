import { getExchange } from "./yahoo_api.js";

export default function Stock (
    symbol, 
    purchase_price, 
    quantity, buy_type, 
    sell_type)
{


    return {
        symbol, 
        purchase_price, 
        quantity, 
        buy_type, 
        sell_type,
        break_even_price
    }
}
