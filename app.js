// select elements:
const lowercaseChkbox = document.querySelector('#lowercase');
const uppercaseChkbox = document.querySelector('#uppercase');
const numbersChkbox = document.querySelector('#numbers');
const symbolsChkbox = document.querySelector('#symbols');
const lengthTxtbox = document.querySelector('#length');
const generateBtn = document.querySelector('#generate');
const result = document.querySelector('#result');

// characters to use for generator
const charsLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const charsUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const charsNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const charsSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '[', ']', '\\', ';', '\'', ',', '.', '/', '_', '+', '{', '}', ':', '"', '<', '>', '?'];
let chars = [];

// on click of the generate button
generateBtn.addEventListener('click', function(){
    // set array of characters to be used (chars) empty
    chars = [];

    // add characters to chars for password if the type is selected
    if (lowercaseChkbox.checked == true){
        chars = chars.concat(charsLowercase);
    }
    if (uppercaseChkbox.checked == true){
        chars = chars.concat(charsUppercase);
    }
    if (numbersChkbox.checked == true){
        chars = chars.concat(charsNumbers);
    }
    if (symbolsChkbox.checked == true){
        chars = chars.concat(charsSymbols);
    }
    console.log(chars);

    let pswdLength = lengthTxtbox.value;
    console.log(pswdLength);

    let pswd = "";

    for (i = 0; i < pswdLength; i++){
        let randomCharNum = Math.floor(Math.random() * chars.length);
        console.log(randomCharNum + " = " + chars[randomCharNum]);
        pswd += chars[randomCharNum];
        console.log(pswd);
    }

    result.innerText = pswd;

});