const passwordInput = document.querySelector('#passwordInput');
const generateButton = document.querySelector('#generate');

const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCases = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_-=+[]{}<>~|\/?";

const passwordLength = 8;

const generatePassword = () => {
    var password="";

    while(password.length < passwordLength){
        password += upperCases[Math.floor(Math.random() * upperCases.length)];
        password += lowerCases[Math.floor(Math.random() * lowerCases.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        // console.log(password);   
    }
    passwordInput.value = password;
}

const copyPassword = () => {
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999);//for mobile devices
    navigator.clipboard.writeText(passwordInput.value);
}

generateButton.addEventListener('click', generatePassword);

const copyButton = document.getElementById("copyPassword");
copyButton.addEventListener('click', copyPassword);
