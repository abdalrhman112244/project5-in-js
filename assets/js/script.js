const firstNumber = document.querySelector('.first-number')
const secondNumber = document.querySelector('.second-number')
const operator = document.querySelector('.operator')
const submit = document.querySelector('.submit')
const result = document.querySelector('.result')


let firstNumberValue;
let secondNumberValue;
let operatorValue;
firstNumber.addEventListener('input', function(event){
    firstNumberValue = event.target.value;
    // console.log(firstNumberValue);
});
secondNumber.addEventListener('input', function(event) {
    secondNumberValue = event.target.value;
    // console.log(secondNumberValue);
});
operator.addEventListener('change', function(event) {
    operatorValue = event.target.value;
    // console.log(operatorValue);
});
submit.addEventListener('click', function(event) {
    event.preventDefault()
    // console.log(firstNumberValue,secondNumberValue,operatorValue);//عند الضغط على الزر طبعلي القيم المطلوبة ضمن الكونسول لوغ
    // console.log(result);
switch (operatorValue) {
    case "+":
        result.innerHTML = parseInt(firstNumberValue) + parseInt(secondNumberValue);
        break;
    case "-":
        result.innerHTML = firstNumberValue - secondNumberValue;
        break;
    case "*":
        result.innerHTML = firstNumberValue * secondNumberValue;
        break;
    case "/":
        result.innerHTML = firstNumberValue / secondNumberValue;
        break;
    default:
        result.innerHTML = 0;
        break;
}
});