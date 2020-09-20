console.log('To see if this will Calculate')
class Calculator{
  constructor(previousOperandTextElement,currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }
  clear() {
    this.currentOperandTextElement = ''
    this.previousOperandTextElement = ''
    this.operation = undefined
  }
  delete() {
  }
  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }
  chooseOperation(operation) {
    if (this.currentOperand === '')return
    if (this.previousOperand !== ''){
      this.compute()
    }
    this.operation = operation 
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }
  compute() {
  }
  updateDisplay(){
    this.currentOperandTextElement.innertext = this.currentOperand
    this.previousOperandTextElement.innertext = this.previousOperand

  }
}

const numberButtons = document.querySelectorAll('[data-number]')
console.log(numberButtons)
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

//for (let button of numberButtons){
  //button.addEventListener('click', function(event){
    //console.log({button})
    //console.log(button.innerText)
  //})
//}

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innertext)
      calculator.updateDisplay()

    })
  })

  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innertext)
      calculator.updateDisplay()

    })
  })
  equalsButton.addEventListener('click', button => {

  })