const API_URL = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_kpmYE8qWrGT8ksGYLUqtOWJvFLaXo767MSyDma9M&base_currency=';

const inputValue = document.querySelector("#amount");
const selectValue = document.querySelector("#currency");
const submitButton = document.querySelector("#submit");

const form = document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const amount = parseInt(inputValue.value);
    const currency = selectValue.value.toUpperCase();

    convertCurrency(currency, amount);
});

async function convertCurrency(baseCurrency, value) {
    let myTable = ""; 

    const respose = await fetch(API_URL + baseCurrency);
    const data = await respose.json();

    for(let obj of Object.keys(data["data"])) {
        myTable+= `
        <tr>
            <td>${obj}</td>
            <td>${data["data"][obj]["code"]}</td>
            <td>${Math.round(data["data"][obj]["value"] * value)}</td>
        </tr>
        `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myTable;
}