let numOne = ''
let numTwo = ''
let operator = ''



const nums = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const result = document.querySelector('.result')
const clear = document.querySelector('.clear')

nums.forEach(num => num.addEventListener('click', getNumber))
operators.forEach(operator => operator.addEventListener('click', getOperator))
result.addEventListener('click', calculateResult)
clear.addEventListener('click', reset)

function operate(operator, numOne, numTwo) {
    numOne = +numOne
    numTwo = +numTwo
    switch(operator) {
        case '+':
            return numOne + numTwo
        case '-':
            return numOne - numTwo
        case '*':
            return (numOne * numTwo).toFixed(1)
        case '/':
            if(numTwo === 0) {
                 alert(`please, don't divive by 0`); 
                 reset() 
                 return ''
            } else {
                return (numOne / numTwo).toFixed(1)
            }
            
            

    }
}

function update(value) {
    const display = document.querySelector('span')
    display.innerText = value

}

function getNumber(e) {
    if(operator == '') {
        numOne += e.target.id
        console.log(numOne, operator, numTwo)
 update(numOne)
    } else {
        numTwo += e.target.id
        console.log(numOne, operator, numTwo)
 update(numTwo)
    }
 
}

function getOperator(e) {
    if(numOne !== '' && numTwo !== '' && operator !== '') {
        let result = operate(operator, numOne, numTwo)
        numOne = result
        numTwo = ''
        operator = e.target.id
        console.log(numOne, operator, numTwo)
        update(numOne)
    } else {
        operator = e.target.id
        console.log(numOne, operator, numTwo)
        update(operator)
    }
    
 
}

function calculateResult() {
    if(numOne !== '' && numTwo !== '' && operator !== '') {
        let result = operate(operator, numOne, numTwo)
        numOne = result
        numTwo = ''
        console.log(numOne, operator, numTwo)
        update(numOne)
    } else {
        return
    }

}

function reset() {
    numOne = ''
    numTwo = ''
    operator = ''
    update('0')

}


update('0')


// event listener on numbers and keep concatenate them 
//event listener on operator, move current number to number one
//once a new number is pressed, we should check if there is an operator, if there is, we assing in num2
//after an operator is pressed we should check if there is num 1, operator, num 2, if there is, we should operate, and move it to num a, keep adding un num2


