import Stock from "../modules/stock.js";

let form = document.querySelector(".stock_form");
let display_price = document.querySelector(".breakeven-price__text");

form.addEventListener("input", (event) => {
    event.preventDefault();
    let formData = new FormData(document.querySelector(".stock_form"));

    let stock = Stock(
        formData.get("symbol"), 
        formData.get("purchase_price"), 
        formData.get("quantity"),
        [formData.get("buy_type"), formData.get("sell_type")],
        formData.get("exchange"),
        formData.get("type"),
        );
    display_price.textContent= `${stock.break_even_price_formatted} or ${stock.break_even_price}`;
    }
);
