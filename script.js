const passwordBox = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseToggle = document.getElementById("uppercase");
const lowercaseToggle = document.getElementById("lowercase");
const numbersToggle = document.getElementById("numbers");
const symbolsToggle = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|{}[]></-=";

function generatePassword() {
    let charset = "";
    let password = "";

    if (uppercaseToggle.checked) charset += upperCase;
    if (lowercaseToggle.checked) charset += lowerCase;
    if (numbersToggle.checked) charset += numbers;
    if (symbolsToggle.checked) charset += symbols;

    const length = parseInt(lengthSlider.value);

    if (charset === "") {
        alert("Please select at least one character type.");
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    
    copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    setTimeout(() => {
        copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    }, 1500);
}

function updateLengthValue() {
    lengthValue.textContent = lengthSlider.value;
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateLengthValue);

// Generate a password on page load
updateLengthValue();
generatePassword();
