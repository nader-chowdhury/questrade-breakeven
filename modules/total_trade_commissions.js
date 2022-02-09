export function getCommission(quantity, quote) {
let commission_factor = 2;

    if (quote.quoteType === "ETF") {
        commission_factor = 1;
    }

    if (quantity <= 495) {
        return commission_factor * 4.95;
    } else if (quantity >= 995) {
        return commission_factor * 9.95;
    } else {
        return commission_factor * 0.01 * quantity;
    }
}
