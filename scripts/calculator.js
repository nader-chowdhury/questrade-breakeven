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
    display_price.textContent = `${stock.break_even_price_formatted}`;
    document.querySelector(".calculation__commission").textContent = stock.total_commission;
    document.querySelector(".calculation__ecn").textContent = stock.total_ecn;
    document.querySelector(".calculation__purchase").textContent = stock.price * stock.quantity;
    document.querySelector(".calculation__breakeven").textContent = `(${stock.total_commission} + ${stock.total_ecn} + ${stock.quantity * stock.price}) / ${stock.quantity}`;
    }
);
