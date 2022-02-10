import Stock from "../modules/stock.js";

let form = document.querySelector(".stock_form");

form.addEventListener("submit", (event) => {
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
    let display_information = document.createElement("textarea");
    display_information.setAttribute("readonly", "");
    display_information.appendChild(
        document.createTextNode(`${stock.break_even_price_formatted} or ${stock.break_even_price}`));
    form.appendChild(display_information);
    }
);
