
function getInputElelment(inputId, numberIdField) {
    const getInputText = document.getElementById(numberIdField);
    const getInput = parseInt(getInputText.value);
    let getValue;
    if (inputId === true) {
        getValue = getInput + 1;
    } else {
        getValue = getInput - 1;
    }
    return getValue;
}

function textField(textId, numberOfPhones) {
    const quenTityPrice = numberOfPhones * 1219;
    const totalMoney = document.getElementById(textId);
    totalMoney.innerText = quenTityPrice;
}
function textFieldCase(textId, numberOfPhones) {
    const quenTityPrice = numberOfPhones * 59;
    const totalMoney = document.getElementById(textId);
    totalMoney.innerText = quenTityPrice;
}

function getParse(fieldValue, getIdValu) {
    const inputField = document.getElementById(fieldValue);
    inputField.value = getIdValu;
}

function totalCount(totalPriceId) {
    const totalAmountInput = document.getElementById(totalPriceId);
    const totalAmounts = parseInt(totalAmountInput.innerText)
    return totalAmounts;

}

function setTextElementById(element, value) {
    const subtotalElement = document.getElementById(element);
    subtotalElement.innerText = value;
}


function calculateAllTotal() {
    const iphoneAmount = totalCount('iphone-price');

    const iphoneCaseAmount = totalCount('case-price');
    const subTotal = iphoneAmount + iphoneCaseAmount;
    setTextElementById('sub-total', subTotal)



    const taxInput = (subTotal * 10 / 100).toFixed(2)
    setTextElementById('tax', taxInput)

    const allTotalAmountStr = parseFloat(subTotal) + parseFloat(taxInput);

    setTextElementById('total-all', allTotalAmountStr)



}