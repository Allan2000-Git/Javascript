const API_URL = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_kpmYE8qWrGT8ksGYLUqtOWJvFLaXo767MSyDma9M';

const inputValue = document.querySelector("#amount");
const selectValue = document.querySelector("#currency");
const submitButton = document.querySelector("#submit");

const form = document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const amount = parseInt(inputValue.value);
    const currency = selectValue.value;
    console.log(amount, currency);
});