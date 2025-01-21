
const billInput = document.getElementById("bill-input")
const customTipInput = document.getElementById("custom-tip-input")
const numberOfPeopleInput = document.getElementById("number-of-people-input")
const tipRateButtons = document.getElementsByClassName("tip-rate")

const tipOutput = document.getElementById("tip-output")
const totalOutput = document.getElementById("total-output")
const resetButton = document.getElementById("reset-button")

let bill = 0
let tipRate = null
let numberOfPeople = 0


resetButton.addEventListener("click",resetAll)


function setBill() {
    bill = billInput.value
    if(bill.length == 0 || bill < 0) {
        bill = -1
        billInput.classList.add("input-error")
        document.getElementById("bill-error-message").style.display = "inline"
    }
    else {
        billInput.classList.remove("input-error")
        document.getElementById("bill-error-message").style.display = "none"
    }
}

billInput.addEventListener("input",setBill)
billInput.addEventListener("input",showResult)

function setTipRate()  {

    for(let i  = 0; i < tipRateButtons.length; i++) {
        tipRateButtons[i].classList.remove("selected")
    }
    if(event.target.tagName == "SPAN") {
        event.target.classList.add("selected")
        tipRate = event.target.innerText.slice(0,-1)
        customTipInput.value = null
    }
    else if(customTipInput.value.length == 0 || customTipInput.value < 0){
        tipRate = -1
        customTipInput.classList.add("input-error")
        document.getElementById("tip-error-message").style.display = "inline"
    }
    else {
        tipRate = customTipInput.value
        customTipInput.classList.remove("input-error")
        document.getElementById("tip-error-message").style.display = "none"
    }
}

for(let i = 0; i < tipRateButtons.length - 1; i++) {
    tipRateButtons[i].addEventListener("click", setTipRate)
    tipRateButtons[i].addEventListener("click", showResult)

}


customTipInput.addEventListener("input", setTipRate)
customTipInput.addEventListener("input", showResult)


function setNumberOfPeople() {
    console.log(numberOfPeopleInput.value.length)
    if(numberOfPeopleInput.value.length == 0 || numberOfPeopleInput.value < 0){
        numberOfPeopleInput.classList.add("input-error")
        document.getElementById("people-error-message").innerHTML = "Not valid"
        document.getElementById("people-error-message").style.display = "inline"
        numberOfPeople = -1
    }

    else if(numberOfPeopleInput.value == 0) {
        numberOfPeopleInput.classList.add("input-error")
        document.getElementById("people-error-message").innerHTML = "Can't be zero"
        document.getElementById("people-error-message").style.display = "inline"
        numberOfPeople = 0
    }



    else {
        numberOfPeople = numberOfPeopleInput.value
        numberOfPeopleInput.classList.remove("input-error")
        document.getElementById("people-error-message").style.display = "none"

    }
}


numberOfPeopleInput.addEventListener("input",setNumberOfPeople)
numberOfPeopleInput.addEventListener("input",showResult)

function calTip(bill ,tipRate, numberOfPeoeple) {
    let tip = bill * tipRate * 0.01
    return (tip / numberOfPeoeple).toFixed(2)
}

function calTotal(bill ,tipRate, numberOfPeoeple) {
    let total = bill * (1 + tipRate * 0.01)
    return (total / numberOfPeoeple).toFixed(2)
}

function resetAll() {
    bill = 0
    tipRate = null
    numberOfPeople = 0
    for(let i  = 0; i < tipRateButtons.length; i++) {
        tipRateButtons[i].classList.remove("selected")
    }
    billInput.value = ""
    customTipInput.value = ""
    numberOfPeopleInput.value = ""
    tipOutput.innerText = "0.00"
    totalOutput.innerText = "0.00"
    resetButton.classList.remove("clickable")
    billInput.classList.remove("input-error")
    customTipInput.classList.remove("input-error")
    numberOfPeopleInput.classList.remove("input-error")
    document.getElementById("bill-error-message").style.display = "none"
    document.getElementById("tip-error-message").style.display = "none"
    document.getElementById("people-error-message").style.display = "none"
}



function showResult() {
    resetButton.classList.add("clickable")
    if(bill != -1 && tipRate != -1 && numberOfPeople != 0 && numberOfPeople != -1){
        tipOutput.innerText = calTip(bill, tipRate, numberOfPeople)
        totalOutput.innerText = calTotal(bill, tipRate, numberOfPeople)
    }
    else {
        tipOutput.innerText = "0.00"
        totalOutput.innerText = "0.00"
    }

    if(bill == 0 && tipRate == 0 && numberOfPeople == 0 &&bill != -1 && tipRate != -1 && numberOfPeople != -1) {
        resetButton.classList.remove("clickable")
    }

    console.log('bill: ' + bill)
    console.log('tipRate: ' + tipRate)
    console.log('numberOfPeople:' + numberOfPeople)
}
