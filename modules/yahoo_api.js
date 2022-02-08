const API_KEY = "kVYsDhUUoW3mTt1GZ2JIS901jx0rKEki6llXPMV1";

export async function getExchange(stock_name) {
    try {
        let response = await fetch(`https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${stock_name}`);
        let stock = await response.json();
        return stock;
    } catch (error) {
        console.log(error);
    }
}
