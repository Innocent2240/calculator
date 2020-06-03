
const numberButtons = document.querySelectorAll('.button');
const operationButtons = document.querySelectorAll('[data-operation]');
const equal = document.querySelector('.equal');
const deleteAll = document.querySelector('.deleteAll');
const cancel = document.querySelector('.cancel');
const firstOperand = document.querySelector('.firstOperand');
const secondOperand = document.querySelector('.secondOperand');


numberButtons.forEach( button => {

    button.addEventListener('click',() => {
        let content=button.getAttribute('data-number');
        secondOperand.textContent +=content;
    })
})
deleteAll.addEventListener('click',() => {
    secondOperand.textContent ='';
    firstOperand.textContent=' ';
})

cancel.addEventListener('click',() => {
let stringValue=secondOperand.textContent;
let stringNum =stringValue.split('');
stringNum.pop();
secondOperand.textContent=stringNum.join('');

})

equal.addEventListener('click',() => {
    let expression =secondOperand.textContent;
    secondOperand.textContent =eval(expression);
    firstOperand.textContent= eval(expression);
 
})
