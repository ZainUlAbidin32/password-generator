const pwEl=document.getElementById("pw");
const copyEl=document.getElementById("copy");
const lenEl=document.getElementById("len");
const upperEl=document.getElementById("upper");
const lowerEl=document.getElementById("lower");
const numberEl=document.getElementById("number");
const symbolEl=document.getElementById("symbol");
const generateEl=document.getElementById("generate");

const upperLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbol="~!@#$%^&*()?><";

function getUpperLetter(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)]
}
function getLowerLetter(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)]
}
function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)]
}
function getSymbol(){
    return symbol[Math.floor(Math.random()*symbol.length)]
}

function generatePassword(){
    const len=lenEl.value;
    let password="";

    if(upperEl.checked){
        password+=getUpperLetter();
    }
    if(lowerEl.checked){
        password+=getLowerLetter();
    }
    if(numberEl.checked){
        password+=getNumber();
    }
    if(symbolEl.checked){
        password+=getSymbol();
    }
    
    for(let i=password.length;i<len;i++){
        const x=getPassword();
        password+=x;
    }
    pwEl.innerText=password;
}


function getPassword(){
    const xs=[];
    if(upperEl.checked){
        xs.push(getUpperLetter());
    }
    if(lowerEl.checked){
        xs.push(getLowerLetter());
    }
    if(numberEl.checked){
        xs.push(getNumber());
    }
    if(symbolEl.checked){
        xs.push(getSymbol());
    }
    if(xs.length===0){
        return "";
    }
    return xs[Math.floor(Math.random()*xs.length)];
}

generateEl.addEventListener("click",()=>{
    generatePassword();
})

//Copy the password
copyEl.addEventListener("click",()=>{
    const text=document.createElement("textarea");
    const password=pwEl.innerText;
    if(!password){
        return;
    }
    text.innerText=password;
    document.body.appendChild(text);
    text.select();
    document.execCommand("copy");
    text.remove();
    alert("Password copied to clipboard");
})