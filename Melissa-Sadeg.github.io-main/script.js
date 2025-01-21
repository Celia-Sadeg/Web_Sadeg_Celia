const outputDisplay = document.getElementById("output")
const displayArea = document.querySelector(".display-section")
const buttons = document.querySelectorAll(".button-section button")



let result = ""
let currentInput = ""
let currentOperator = ""




buttons.forEach(element => {
    element.addEventListener("click", inputUpdate)
});


function inputUpdate(e) {
    let buttonPressed = e.target

    /*if you pressed a number*/
    if(buttonPressed.id <= '9' && buttonPressed.id >= '0') {
        console.log("you pressed a number")
        if(currentInput.length >= 13) return
        if(currentOperator === "") {result = ""}
        if(buttonPressed.id === '0' && currentInput === "0") return
        else if(buttonPressed.id !== '0' && currentInput === "0")
            currentInput = buttonPressed.id
        else
            currentInput += buttonPressed.id
        console.log("currentInput: " + currentInput)
        updateDisplay(currentInput)
    }


    /*if you pressed point*/
    else if(buttonPressed.id == "point") {
        if(currentInput.indexOf('.') > -1) {return}
        if(currentInput ===""){
            currentInput = "0."
        }
        else {
            currentInput += "."
        }
        updateDisplay(currentInput)
    }


    /*if you pressed an operator*/
    else if(buttonPressed.className === "operator") {
        console.log("you pressed an operator")
        if(currentOperator == "") {
            currentOperator = buttonPressed.id
            result = currentInput
            currentInput = ""
        }

        else if(currentInput === "") {
            if(buttonPressed.id === "equal"){
                result = calculate(currentOperator, result, result)
                //updateDisplay(result)
                showResult()

            }
            currentOperator = buttonPressed.id

        }
        else {
            result = calculate(currentOperator, result, currentInput)
            //updateDisplay(result)
            showResult()
            currentInput = ""
            currentOperator = buttonPressed.id
        }

    }

    /*if you pressed an DEL*/
    else if(buttonPressed.id == "del") {
        currentInput = "0"
        updateDisplay(currentInput)
    }

     /*if you pressed an RESET*/
    else if(buttonPressed.id == "reset") {
        result =  ""
        currentInput = "0"
        currentOperator = ""
        updateDisplay(currentInput)

    }
    console.log("buttonPressed: " + buttonPressed.id )
    console.log("currentOperator: " + currentOperator)
    console.log("result: " + result)
    console.log("currentInput: " + currentInput)
    console.log('----------------------------------')

}



function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
  }


function showResult() {
    var displayString = ""
    if(String(result).length > 14) {
        displayString = expo(result, 8)
        outputDisplay.innerText = displayString
    }
    else { updateDisplay(result)}
   

}

function updateDisplay(element) {

    var displayString = Intl.NumberFormat('en-US').format(Number(element));
    outputDisplay.innerText = displayString
}




function calculate(operator, num1, num2) {
    switch(operator) {
        case 'plus':
            return Number(num1) + Number(num2)
        case 'minus':
            return Number(num1) - Number(num2)
        case 'divide':
            return Number(num1) / Number(num2)
        case 'multiply':
            return Number(num1) * Number(num2)
        case 'equal' :
            return Number(num2) // '=' makes result = currentInput
        default:
            return
    }
}





