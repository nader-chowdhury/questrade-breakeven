let form = document.querySelector(".stock_form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(document.querySelector(".stock_form"));
    const purchase_price = formData.get("purchase_price");
    const quantity = formData.get("quantity")
    const buy_transaction_type = formData.get("buy_transaction_type");
    const sell_transaction_type = formData.get("sell_transaction_type");

    console.log(purchase_price*quantity);
});

function calculateBreakeven (price, quantity, buy_type, sell_type) {
    
}
