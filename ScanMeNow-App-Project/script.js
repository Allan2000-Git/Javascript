const inputText = document.querySelector("#inputText");
const generateButton = document.querySelector("#generateButton");

const codeBox = document.querySelector(".code-box");
const codeImg = document.getElementById("code-img");

function generateQRCode(){
    let value = inputText.value;
    if(value.length > 0) {
        codeImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ value;
        codeImg.alt=value;
        codeImg.classList.add(".showCode");
    }else{
        alert("Please enter a valid URL or a string to generate QR Code");
        throw new Error("Enter a valid URL or a string to generate QR Code");
    }
    console.log(codeImg.classList);
}

generateButton.addEventListener("click", generateQRCode);