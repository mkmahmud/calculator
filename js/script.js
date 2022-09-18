// Get Dom Elements
const display = document.querySelector('.display');
const buttons = document.getElementById('buttons');

// expresstions
const expreetions = ['+', '-', '÷', '×','='];

// var Init
let firstval ; 
let expretion;
let secondVal;

buttons.addEventListener('click',(e)=>{
    if(!expreetions.includes(e.target.value)){
        display.innerText += e.target.value
        // console.log(e.target.value)
    }else{
        if(e.target.value != '='){
        firstval = display.innerText;
        display.innerText = '';
        expretion = e.target.value;
        }else{
            secondVal = display.innerText;
            setResult()
        }
    }
})

const setResult = () => {
    var operators = {
        '+': function(a, b) { return a + b },
        '-': function(a, b) { return a -  b }, 
        '÷': function(a, b) { return a / b }, 
        '×': function(a, b) { return a *  b }, 
    };
    display.innerText = operators[expretion](parseFloat(firstval), parseFloat(secondVal));
}


